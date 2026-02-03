import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `你是一個專精台灣在地文化的品牌命名大師。請根據用戶輸入的關鍵字，生成 6 個創意網域名稱。要有台灣諧音梗（例如 "TeaMe" 挺你）、台語羅馬拼音、或好記的英文。

【嚴格規定】網域名稱 name 必須：
- 只使用英文字母 (a-z)、數字 (0-9)、連字號 (-)、以及標準頂級域 (.com / .io / .tw 等)。
- 絕對禁止使用中文字元、全形字、或任何會產生 Punycode (xn--...) 的字元。
- 諧音或含義用 meaning 欄位用中文說明即可，但 name 必須是純英文／羅馬拼音，全球通用（例：SongLa.com、WuCha.com、TeaMe.io）。

請強制回傳嚴格的 JSON 格式，不要包含任何其他文字或 markdown。只回傳一個 JSON 陣列，每個物件包含：
- name: 網域名稱（字串，僅英文/數字/連字號/標準 TLD，禁止中文）
- meaning: 中文諧音或含義（字串）
- status: 隨機為 "available" 或 "taken"（字串）

範例格式：
[{"name":"TeaMe.io","meaning":"挺你","status":"available"},{"name":"WuCha.com","meaning":"無查/找茶","status":"taken"},{"name":"SongLa.com","meaning":"鬆啦","status":"available"}]`;

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  console.log("[generate] API Key 前五碼:", apiKey ? `${apiKey.slice(0, 5)}***` : "(無)");

  if (!apiKey) {
    return NextResponse.json(
      { error: "未設定 DEEPSEEK_API_KEY" },
      { status: 500 }
    );
  }

  let keyword: string;
  try {
    const body = await request.json();
    keyword = typeof body?.keyword === "string" ? body.keyword.trim() : "";
  } catch {
    keyword = "";
  }

  const finalKeyword = keyword || "珍珠奶茶、好運";

  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `請根據以下關鍵字生成 6 個創意網域名稱，並回傳嚴格 JSON 陣列：${finalKeyword}`,
          },
        ],
        temperature: 0.8,
      }),
    });

    console.log("[generate] DeepSeek response.status:", res.status);
    console.log("[generate] DeepSeek response.statusText:", res.statusText);

    if (!res.ok) {
      const errText = await res.text();
      console.log("[generate] DeepSeek 錯誤訊息內容:", errText);
      throw new Error(`DeepSeek API 錯誤: ${res.status} ${res.statusText} - ${errText}`);
    }

    const data = await res.json();
    const content =
      data?.choices?.[0]?.message?.content?.trim() || "";

    let jsonStr = content;
    const codeBlock = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlock) jsonStr = codeBlock[1].trim();
    const parsed = JSON.parse(jsonStr) as Array<{
      name?: string;
      meaning?: string;
      status?: string;
    }>;

    const list = Array.isArray(parsed)
      ? parsed
          .slice(0, 6)
          .map((item) => ({
            name: (String(item?.name ?? "").replace(/[^a-zA-Z0-9.-]/g, "").trim() || String(item?.name ?? "").trim()),
            meaning: String(item?.meaning ?? ""),
            status:
              item?.status === "taken" ? "taken" : "available",
          }))
      : [];

    return NextResponse.json({ domains: list });
  } catch (e) {
    console.log("[generate] catch 完整 error:", e);
    console.log("[generate] catch error 內容 (stringify):", JSON.stringify(e, null, 2));
    const message = e instanceof Error ? e.message : "請求失敗";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
