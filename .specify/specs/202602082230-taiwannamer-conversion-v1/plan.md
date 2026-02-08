# taiwannamer-conversion-v1 技術計畫

## Tech Stack
*   **框架**: Next.js 15 (App Router) with TypeScript
*   **樣式**: Tailwind CSS
*   **狀態管理**: React Context (用於偏好設定、收藏狀態) + Zustand (用於事件追蹤、全域 UI 狀態)
*   **表單/UI 元件**: shadcn/ui (基於 Radix UI)
*   **HTTP 客戶端**: axios (封裝用於 API 呼叫)
*   **測試**: Jest + React Testing Library
*   **程式碼品質**: ESLint + Prettier + TypeScript 嚴格模式
*   **部署**: Vercel (與 Next.js 原生整合)

## Architecture
### 目錄結構 (Feature-based)
```
src/
├── app/                    # Next.js App Router 頁面
│   ├── (home)/            # 首頁 (生成頁面)
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── results/           # 結果頁面
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── go/                # 聯盟連結追蹤路由 (R4)
│   │   ├── [vendor]/
│   │   │   └── route.ts   # API Route (Server Action)
│   │   └── layout.tsx
│   ├── favorites/         # 收藏清單頁面 (R2)
│   │   └── page.tsx
│   └── layout.tsx         # 根佈局
├── components/            # 共用元件
│   ├── ui/                # shadcn/ui 基礎元件
│   ├── domain/            # 領域元件
│   │   ├── DomainCard/    # 域名結果卡片 (R2)
│   │   ├── PreferenceFilter/ # 偏好篩選器 (R3)
│   │   └── ResultCTA/     # 結果引導區塊 (R1)
│   └── layout/            # 佈局元件
├── lib/                   # 工具函式與配置
│   ├── tracking/          # 事件追蹤邏輯 (R5)
│   ├── storage/           # localStorage 封裝 (收藏功能)
│   ├── vendors/           # 聯盟廠商配置與連結生成
│   └── constants.ts       # 常數定義
├── hooks/                 # 自訂 React Hooks
│   ├── usePreferences.ts  # 偏好設定 Hook
│   └── useFavorites.ts    # 收藏功能 Hook
├── types/                 # TypeScript 類型定義
├── store/                 # Zustand stores
│   └── trackingStore.ts   # 事件追蹤狀態
└── styles/                # 全域樣式
```

### 資料流與關鍵互動
1.  **生成流程**: 用戶在首頁設定偏好 (R3/US1) → 提交關鍵字 → 呼叫現有生成 API → 導向 `/results` 頁面並顯示結果。
2.  **結果頁面**: 顯示 `DomainCard` 元件陣列 (R2) 與 `ResultCTA` 區塊 (R1)。所有互動事件透過 `tracking` lib 記錄 (R5)。
3.  **聯盟連結**: 點擊「查詢價格」或「前往架站」→ 導向 `/go/[vendor]` → Server Action 記錄 `outbound_click` 事件 → 302 重定向至真實聯盟連結 (R4)。
4.  **收藏功能**: 使用 `useFavorites` hook 封裝 localStorage 操作，狀態透過 Context 共享 (R2/US3)。
5.  **事件追蹤**: 前端事件呼叫 `tracking.trackEvent()`，發送至專用 API endpoint (例如 `/api/track`)，由後端記錄至資料庫或日誌系統 (R5/US5)。

## Implementation Plan

### 階段一：基礎架構與追蹤系統 (3-4 天)
**目標**：建立專案骨架、事件追蹤基礎設施、聯盟連結路由。

1.  **初始化專案** (憲法 §三)
    *   建立 Next.js 15 + TypeScript 專案。
    *   配置 ESLint, Prettier, Tailwind CSS, shadcn/ui。
    *   建立基本目錄結構。

2.  **實作聯盟連結追蹤路由 `/go/[vendor]`** (R4)
    *   建立動態路由 `app/go/[vendor]/route.ts`。
    *   實作 Server Action: 解析 `vendor` 和 `domain` 參數。
    *   呼叫追蹤函式記錄 `outbound_click_[vendor]` 事件。
    *   從配置檔取得對應廠商的真實聯盟連結，執行 302 重定向。
    *   **Spec 確認**: R4 要求的路由格式與追蹤事件已涵蓋。

3.  **建立事件追蹤庫與後端記錄** (R5, US5)
    *   建立 `lib/tracking/` 模組，提供 `trackEvent(eventType: string, metadata?: object)` 函式。
    *   建立 `POST /api/track` API route，接收事件資料。
    *   MVP 階段：將事件以結構化格式記錄至資料庫 (如 PostgreSQL) 或檔案日誌。
    *   建立簡易管理後台頁面 (`/admin/tracking`)，顯示事件計數表格。
    *   **Spec 確認**: R5 所列四種事件 (`generate_click`, `outbound_click_[vendor]`, `copy_domain`, `favorite_add`) 必須能被此系統記錄與查閱。

### 階段二：使用者介面元件與功能 (4-5 天)
**目標**：實作核心使用者介面元件，滿足主要互動需求。

1.  **實作偏好篩選元件 `PreferenceFilter`** (R3, US1)
    *   元件位置：首頁關鍵字輸入區附近。
    *   包含三個下拉選單：「用途」、「語言」、「風格」。
    *   選項值需與後端生成演算法預先對齊。
    *   使用狀態管理 (Context) 儲存用戶選擇，並在提交生成請求時傳遞。
    *   **Spec 確認**: R3 要求的三項篩選與 US1 情境已滿足。

2.  **實作域名結果卡片 `DomainCard`** (R2, US2, US3)
    *   顯示域名文字 (如 `taiwannamer.com`)。
    *   三個互動按鈕：
        *   **複製**: 使用 `navigator.clipboard.writeText`，成功時顯示 Toast 通知。
        *   **收藏**: 點擊切換收藏狀態，使用 `useFavorites` hook 操作 localStorage。
        *   **分享**: 生成當前頁面 URL (或包含域名參數)，複製連結並顯示 Toast。
    *   卡片需響應式設計。
    *   **Spec 確認**: R2 三項功能與 US2、US3 情境已滿足。

3.  **實作結果引導區塊 `ResultCTA`** (R1, US4)
    *   位於結果頁面頂部或結果列表下方顯眼位置。
    *   包含：
        1.  引導文案 (R1.1)。
        2.  「立即查詢」按鈕：連結至 `/go/namecheap?domain=xxx` (優先 .com/.tw) (R1.2)。
        3.  緊迫性文案 (如：「🔥 建議立即購買，避免被搶註」) (R1.3)。
        4.  「一鍵架站」按鈕：連結至 `/go/bluehost` (R1.4)。
    *   **Spec 確認**: R1 所有引導元素與 US4 情境已滿足。

4.  **實作收藏清單頁面 `/favorites`** (R2, R7)
    *   列出 localStorage 中所有收藏的域名。
    *   提供移除收藏的選項。
    *   **Spec 確認**: 提供查看入口 (R2) 且跨訪問持久化 (R7)。

### 階段三：整合、測試與優化 (3-4 天)
**目標**：將所有元件整合至頁面，確保流程順暢，並進行測試與效能優化。

1.  **整合結果頁面 (`/results`)**
    *   組合 `ResultCTA`、`DomainCard` 列表。
    *   從路由參數或狀態取得生成結果資料。
    *   在所有互動點 (生成按鈕、複製、收藏、分享、聯盟連結) 注入事件追蹤呼叫 (R5)。

2.  **整合首頁 (`/`)**
    *   組合 `PreferenceFilter` 與現有關鍵字輸入表單。
    *   表單提交時，記錄 `generate_click` 事件，並將偏好參數傳遞至結果頁面。

3.  **全面測試**
    *   單元測試：針對工具函式、hooks、元件邏輯。
    *   整合測試：測試主要使用者流程 (生成 → 結果 → 點擊聯盟連結)。
    *   檢查 localStorage 操作與事件追蹤是否正確運作。
    *   **憲法確認**: 測試覆蓋率需達 80% (§二.2)。

4.  **效能與最終檢查**
    *   使用 Next.js 內建工具檢查 Core Web Vitals。
    *   確認圖片使用 `next/image`。
    *   實作元件懶加載 (如 `dynamic import` 用於非關鍵元件)。
    *   最終驗收所有 Acceptance Criteria。

### Spec 不足與阻塞項目
1.  **生成演算法對接 (R3)**: Spec 要求偏好設定「應顯著影響生成演算法的結果排序或內容」。**需要後端團隊明確定義「用途/語言/風格」選項值如何對應到現有演算法的輸入參數**，否則前端僅能傳遞參數，無法保證效果。
2.  **事件追蹤後端規格 (R5)**: MVP 的「簡單後台日誌或儀表板」需明確定義格式與查詢方式。計畫中預設使用資料庫與簡易管理頁面，若需其他形式需提前確認。
3.  **現有網站整合**: 本計畫假設為新頁面開發。如需無縫整合至現有 `taiwannamer.com`，需確認現有技術棧、樣式衝突、路由結構等，可能產生額外工作量。

### 交付物
1.  完整可運作的 Next.js 應用程式，包含上述所有頁面與功能。
2.  事件追蹤後台 (簡易版)。
3.  技術文件 (README.md、元件文件、追蹤數據格式說明)。
4.  測試報告與效能指標。