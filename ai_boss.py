import os
import json
import datetime
import re
from openai import OpenAI

# =====================================================
# 基本設定
# =====================================================

api_key = os.environ.get("OPENAI_API_KEY")
base_url = os.environ.get("OPENAI_BASE_URL", "https://api.deepseek.com")

if not api_key:
    api_key = input("請輸入您的 API Key: ")

client = OpenAI(api_key=api_key, base_url=base_url)

BASE_DIR = ".specify"
MEMORY_DIR = f"{BASE_DIR}/memory"
SPECS_DIR = f"{BASE_DIR}/specs"

os.makedirs(MEMORY_DIR, exist_ok=True)
os.makedirs(SPECS_DIR, exist_ok=True)

CONSTITUTION_PATH = f"{MEMORY_DIR}/constitution.md"


# =====================================================
# 工具函式
# =====================================================

def read_file(path):
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    return ""

def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"✅ 已寫入：{path}")

def call_ai(system_prompt, user_prompt):
    print("🤖 AI 思考中...")
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
    )
    return response.choices[0].message.content


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def create_spec_unit(name):
    spec_id = datetime.datetime.now().strftime("%Y%m%d%H%M")
    slug = slugify(name)
    path = f"{SPECS_DIR}/{spec_id}-{slug}"

    os.makedirs(path, exist_ok=True)

    meta = {
        "id": spec_id,
        "name": name,
        "status": "draft",
        "created_at": datetime.datetime.now().isoformat()
    }

    write_file(f"{path}/meta.json", json.dumps(meta, indent=2, ensure_ascii=False))
    return path


# =====================================================
# Step 1 — Constitution
# =====================================================

def step_constitution():
    print("\n📜 Step 1｜設定專案憲法（最高法律）")

    current = read_file(CONSTITUTION_PATH)
    if current:
        print("目前憲法已存在。")

    user_input = input("請描述你的開發原則（或輸入 skip）: ")
    if user_input.lower() == "skip":
        return

    system_prompt = """
你是 spec-kit 的「憲法制定者」。
請撰寫一份專案憲法，這些規則：
- 對所有 AI 都具備最高約束力
- 未被 spec 定義的事情不得自行補充
- 違反憲法視為錯誤

請條列撰寫，語氣明確。
"""

    result = call_ai(system_prompt, user_input)
    write_file(CONSTITUTION_PATH, result)


# =====================================================
# Step 2 — Specify
# =====================================================

def step_specify():
    print("\n📝 Step 2｜建立 Spec（定義『要做什麼』）")

    constitution = read_file(CONSTITUTION_PATH)
    if not constitution:
        print("❌ 尚未設定 Constitution")
        return

    name = input("Spec 名稱（例如: ai-website-generator）: ")
    spec_path = create_spec_unit(name)

    user_input = input("請描述你要做的功能 / 產品想法: ")

    system_prompt = f"""
你是專業 PM，請依據【專案憲法】撰寫 spec.md。
禁止談技術，只描述需求。

【專案憲法】
{constitution}

【Spec 結構】
# Spec: {name}

## Background
## Requirements（編號 R1, R2...）
## User Stories（編號 US1, US2...）
## Acceptance Criteria
## Out of Scope
"""

    spec = call_ai(system_prompt, user_input)
    write_file(f"{spec_path}/spec.md", spec)

    print(f"📁 Spec 建立完成：{spec_path}")


# =====================================================
# Step 2.5 — Clarify
# =====================================================

def step_clarify():
    print("\n🔍 Step 2.5｜Clarify（規格審核）")

    spec_path = choose_spec()
    if not spec_path:
        return

    spec = read_file(f"{spec_path}/spec.md")

    system_prompt = """
你是 spec-kit 的規格審核官。
請嚴格檢查 spec 是否存在：
- 模糊需求
- 缺少驗收標準
- 無法執行的敘述
- 邏輯矛盾

請用「問題清單」列出。
若規格已足夠，請明確標註「Spec 可進入 Plan 階段」。
"""

    clarify = call_ai(system_prompt, spec)
    write_file(f"{spec_path}/clarify.md", clarify)


# =====================================================
# Step 3 — Plan
# =====================================================

def step_plan():
    print("\n🏗️ Step 3｜Plan（怎麼做）")

    spec_path = choose_spec()
    if not spec_path:
        return

    if not os.path.exists(f"{spec_path}/clarify.md"):
        print("❌ 尚未完成 Clarify，禁止進入 Plan")
        return

    constitution = read_file(CONSTITUTION_PATH)
    spec = read_file(f"{spec_path}/spec.md")

    system_prompt = f"""
你是 spec-kit 的技術架構師。

規則：
1. 所有實作必須對應 Spec 條目（R1 / US1）
2. 不得新增 spec 未定義功能
3. 若 spec 不足，請明確指出阻塞

【憲法】
{constitution}

【Spec】
{spec}

請輸出 plan.md：
## Tech Stack
## Architecture
## Implementation Plan（需標註 Spec Reference）
"""

    plan = call_ai(system_prompt, "請產出技術計畫")
    write_file(f"{spec_path}/plan.md", plan)


# =====================================================
# Step 4 — Tasks
# =====================================================

def step_tasks():
    print("\n✅ Step 4｜Tasks（可執行任務）")

    spec_path = choose_spec()
    if not spec_path:
        return

    plan = read_file(f"{spec_path}/plan.md")
    if not plan:
        print("❌ 尚未完成 Plan")
        return

    system_prompt = """
你是工程經理。
請將 plan 拆解成 Cursor 可直接執行的 checklist。

規則：
- 每一條任務必須標註 Spec Reference（R1 / US1）
- 不得出現 spec 未定義事項

格式：
- [ ] R1: 任務說明（檔案: xxx）
"""

    tasks = call_ai(system_prompt, plan)
    write_file(f"{spec_path}/tasks.md", tasks)


# =====================================================
# Step 5 — Analyze
# =====================================================

def step_analyze():
    print("\n🧪 Step 5｜Analyze（一致性檢查）")

    spec_path = choose_spec()
    if not spec_path:
        return

    spec = read_file(f"{spec_path}/spec.md")
    tasks = read_file(f"{spec_path}/tasks.md")

    system_prompt = """
你是 spec-kit 的一致性分析工具。
請檢查：
1. 是否有 spec 條目沒有對應任務
2. 是否有任務找不到 spec 來源
3. 是否有多餘或重複實作
"""

    result = call_ai(system_prompt, f"SPECS:\n{spec}\n\nTASKS:\n{tasks}")
    write_file(f"{spec_path}/analysis.md", result)


# =====================================================
# 輔助：選擇 Spec
# =====================================================

def choose_spec():
    specs = os.listdir(SPECS_DIR)
    if not specs:
        print("❌ 尚無任何 Spec")
        return None

    for i, s in enumerate(specs):
        print(f"{i+1}. {s}")

    idx = int(input("選擇 Spec: ")) - 1
    return f"{SPECS_DIR}/{specs[idx]}"


# =====================================================
# 主選單
# =====================================================

def main():
    while True:
        print("""
====================================
🤖 AI Spec Studio（spec-kit compatible）
====================================
1. Constitution
2. Specify
3. Clarify
4. Plan
5. Tasks
6. Analyze
Q. Exit
""")
        choice = input("選擇操作: ")

        if choice == "1":
            step_constitution()
        elif choice == "2":
            step_specify()
        elif choice == "3":
            step_clarify()
        elif choice == "4":
            step_plan()
        elif choice == "5":
            step_tasks()
        elif choice == "6":
            step_analyze()
        elif choice.lower() in ["q", "exit"]:
            break
        else:
            print("❌ 無效選項")

if __name__ == "__main__":
    main()
