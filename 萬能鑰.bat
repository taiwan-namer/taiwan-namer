@echo off
REM ==========================================
REM  羅老闆的萬能 AI 遙控器
REM ==========================================

REM --- 1. 防止中文亂碼 ---
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
set PYTHONLEGACYWINDOWSSTDIO=1

REM --- 2. 設定 DeepSeek 金鑰 (或是您也可以寫死在 ai_boss.py 裡) ---
set OPENAI_BASE_URL=https://api.deepseek.com
set OPENAI_API_KEY=sk-9d5ccc34471246a6827e65dc70e892cf

REM --- 3. 設定 Python 路徑 (保險起見) ---
set PATH=%PATH%;C:\Users\Admin\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts

REM --- 4. 呼叫總部的特助 (關鍵在這一行！) ---
REM %USERPROFILE% 會自動抓到 C:\Users\Admin
REM 只要您的 AI_Tools 放在桌面，這一行不管去哪台電腦都能跑
echo 正在連線至總部 AI 特助...
echo.

python "%USERPROFILE%\Desktop\AI_Tools\ai_boss.py"

pause