# 台式網域命名 - 軟體架構設計文檔

## 1. 系統概述

### 1.1 架構風格
- **前端架構：** Next.js 14+ (App Router) + React Server Components
- **部署模式：** Vercel Edge Network (全球 CDN)
- **資料存儲：** Hybrid (LocalStorage + Server-side JSON logs)
- **API 設計：** RESTful + Server Actions

### 1.2 技術堆疊

#### 前端 (Frontend)
```
Next.js 14.x (App Router)
├─ React 18+
├─ TypeScript 5.x
├─ Tailwind CSS 3.x
├─ shadcn/ui (Component Library)
├─ Framer Motion (Animations)
└─ Lucide React (Icons)
```

#### 後端 (Backend - Serverless)
```
Next.js API Routes (Vercel Functions)
├─ Node.js 20.x
├─ TypeScript
└─ Vercel Edge Config (簡易配置)
```

#### AI 整合
```
Anthropic Claude API (Sonnet 4)
└─ 用於網域命名生成
```

#### 資料層
```
LocalStorage (Client-side)
├─ 收藏清單
└─ 使用者偏好

JSON Logs (Server-side)
├─ 點擊事件追蹤
└─ 聯盟導流記錄
```

#### 部署與監控
```
Vercel
├─ Edge Network (CDN)
├─ Serverless Functions
└─ Analytics

監控工具
├─ Vercel Analytics (基礎監控)
└─ Google Analytics 4 (事件追蹤)
```

---

## 2. 系統架構圖

### 2.1 High-Level Architecture

```
                         Internet
                            │
                            ▼
                    ┌───────────────┐
                    │  Vercel CDN   │
                    │  (Edge Cache) │
                    └───────┬───────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
            ▼               ▼               ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │   靜態頁面    │ │   Next.js    │ │  API Routes  │
    │   (SSG)      │ │   App Router │ │  (Serverless)│
    │              │ │   (SSR/ISR)  │ │              │
    └──────────────┘ └──────┬───────┘ └──────┬───────┘
                            │                 │
                            │                 ▼
                            │          ┌──────────────┐
                            │          │ Claude API   │
                            │          │ (External)   │
                            │          └──────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  Client Side  │
                    ├───────────────┤
                    │ - React       │
                    │ - LocalStorage│
                    │ - Analytics   │
                    └───────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ 外部聯盟連結  │
                    ├───────────────┤
                    │ - GoDaddy     │
                    │ - Namecheap   │
                    │ - Bluehost    │
                    └───────────────┘
```

### 2.2 資料流程圖 (Data Flow)

```
使用者輸入關鍵字
        │
        ▼
  [Client Component]
  SearchBar.tsx
        │
        ▼
  POST /api/generate
        │
        ▼
  [Server Action]
  generateDomains()
        │
        ├─> Call Claude API
        │   (生成網域建議)
        │
        ├─> 查詢價格表 (Static Config)
        │
        └─> 返回結果
                │
                ▼
        [Client Component]
        ResultsGrid.tsx
                │
                ├─> 顯示網域卡片
                │
                └─> 使用者操作
                    ├─ 複製 → LocalStorage
                    ├─ 收藏 → LocalStorage
                    ├─ 分享 → Generate URL
                    └─ 查價 → /go/[vendor]
                                    │
                                    ▼
                            [API Route]
                            記錄點擊事件
                                    │
                                    ├─> 寫入 JSON Log
                                    │   (Vercel Blob/KV)
                                    │
                                    └─> 302 跳轉到聯盟連結
```

---

## 3. 目錄結構設計

```
taiwan-domain-namer/
├── app/                          # Next.js App Router
│   ├── (main)/                   # 主要頁面群組
│   │   ├── page.tsx              # 首頁
│   │   ├── results/              
│   │   │   └── page.tsx          # 結果頁
│   │   └── layout.tsx            # 共用 Layout
│   │
│   ├── blog/                     # 部落格
│   │   ├── page.tsx              # 文章列表
│   │   └── [slug]/               
│   │       └── page.tsx          # 單篇文章
│   │
│   ├── admin/                    # 後台
│   │   ├── layout.tsx            # 帶認證的 Layout
│   │   └── clicks/               
│   │       └── page.tsx          # 點擊統計
│   │
│   ├── go/                       # 聯盟導流
│   │   └── [vendor]/             
│   │       └── route.ts          # 跳轉 API Route
│   │
│   ├── api/                      # API Routes
│   │   ├── generate/             
│   │   │   └── route.ts          # 生成網域
│   │   ├── favorites/            
│   │   │   └── route.ts          # 收藏管理 (選用)
│   │   └── analytics/            
│   │       └── route.ts          # 事件追蹤
│   │
│   ├── about/                    # 靜態頁面
│   │   └── page.tsx              
│   ├── privacy/                  
│   │   └── page.tsx              
│   └── contact/                  
│       └── page.tsx              
│
├── components/                   # React 元件
│   ├── ui/                       # shadcn/ui 基礎元件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   ├── domain/                   # 網域相關元件
│   │   ├── DomainCard.tsx
│   │   ├── VendorButton.tsx
│   │   ├── ResultsGrid.tsx
│   │   └── PriceTag.tsx
│   │
│   ├── search/                   # 搜尋相關
│   │   ├── SearchBar.tsx
│   │   └── SearchSummary.tsx
│   │
│   ├── marketing/                # 行銷元件
│   │   ├── HostingBanner.tsx
│   │   ├── Testimonials.tsx
│   │   └── TrustBar.tsx
│   │
│   ├── layout/                   # 版面元件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSection.tsx
│   │
│   └── admin/                    # 後台元件
│       ├── ClicksTable.tsx
│       └── StatsCard.tsx
│
├── lib/                          # 核心邏輯
│   ├── ai/                       # AI 整合
│   │   └── claude.ts             # Claude API 封裝
│   │
│   ├── analytics/                # 分析追蹤
│   │   ├── events.ts             # 事件定義
│   │   └── track.ts              # 追蹤函式
│   │
│   ├── affiliate/                # 聯盟行銷
│   │   ├── vendors.ts            # 廠商配置
│   │   ├── links.ts              # 連結生成
│   │   └── logger.ts             # 點擊日誌
│   │
│   ├── domain/                   # 網域邏輯
│   │   ├── pricing.ts            # 價格配置
│   │   ├── validation.ts         # 驗證規則
│   │   └── sorting.ts            # 排序邏輯
│   │
│   └── utils/                    # 工具函式
│       ├── cn.ts                 # Tailwind 合併
│       ├── format.ts             # 格式化
│       └── storage.ts            # LocalStorage 封裝
│
├── types/                        # TypeScript 型別
│   ├── domain.ts                 # 網域相關型別
│   ├── analytics.ts              # 分析事件型別
│   └── api.ts                    # API 請求/回應型別
│
├── config/                       # 設定檔
│   ├── site.ts                   # 網站基本設定
│   ├── vendors.ts                # 廠商設定
│   └── pricing.ts                # 價格設定
│
├── data/                         # 靜態資料
│   ├── blog-posts.json           # 部落格文章元資料
│   └── testimonials.json         # 使用者見證
│
├── public/                       # 靜態資源
│   ├── images/
│   └── favicon.ico
│
├── styles/                       # 全域樣式
│   └── globals.css
│
├── middleware.ts                 # Next.js 中介軟體
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. 核心模組設計

### 4.1 AI 生成模組 (`lib/ai/claude.ts`)

```typescript
// lib/ai/claude.ts
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface GenerateDomainRequest {
  keywords: string;
  count?: number; // 生成數量，預設 6
}

interface DomainSuggestion {
  domain: string;
  chineseName: string;
  meaning: string;
  tld: string;
}

export async function generateDomains(
  req: GenerateDomainRequest
): Promise<DomainSuggestion[]> {
  const { keywords, count = 6 } = req;
  
  const prompt = `
你是台灣在地文化專家，擅長創造有趣的諧音梗網域名稱。

使用者關鍵字：${keywords}

請生成 ${count} 個網域建議，需符合：
1. 使用諧音、台語、或雙關語
2. 網域需真實可註冊（英文或拼音）
3. 包含寓意解釋
4. 涵蓋不同 TLD：.com, .tw, .io, .ai

回應格式（JSON）：
[
  {
    "domain": "ZhenHaoHe.com",
    "chineseName": "珍好喝",
    "meaning": "諧音「真好喝」，適合飲料品牌",
    "tld": "com"
  }
]
`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  // 解析 Claude 回應
  const content = message.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type');
  }

  // 提取 JSON（處理可能的 Markdown 標記）
  const jsonText = content.text
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .trim();
  
  const domains: DomainSuggestion[] = JSON.parse(jsonText);
  
  // 附加價格資訊
  return domains.map(d => ({
    ...d,
    price: getPriceByTLD(d.tld),
    vendors: getVendorsByTLD(d.tld)
  }));
}
```

### 4.2 價格配置模組 (`lib/domain/pricing.ts`)

```typescript
// lib/domain/pricing.ts

export const TLD_PRICING: Record<string, number> = {
  com: 300,
  tw: 800,
  io: 1200,
  ai: 2500,
};

export function getPriceByTLD(tld: string): number {
  return TLD_PRICING[tld] || 500;
}

// 價格顯示格式化
export function formatPrice(price: number): string {
  return `NT$ ${price.toLocaleString('zh-TW')} 起`;
}
```

### 4.3 廠商配置模組 (`lib/affiliate/vendors.ts`)

```typescript
// lib/affiliate/vendors.ts

export type VendorId = 'godaddy' | 'namecheap' | 'bluehost' | 'taiwanese';

interface VendorConfig {
  id: VendorId;
  name: string;
  supportedTLDs: string[];
  affiliateId: string;
  baseUrl: string;
}

export const VENDORS: Record<VendorId, VendorConfig> = {
  godaddy: {
    id: 'godaddy',
    name: 'GoDaddy',
    supportedTLDs: ['com', 'io', 'ai', 'net', 'org'],
    affiliateId: process.env.GODADDY_AFFILIATE_ID!,
    baseUrl: 'https://www.godaddy.com/domainsearch/find'
  },
  
  namecheap: {
    id: 'namecheap',
    name: 'Namecheap',
    supportedTLDs: ['com', 'io', 'ai', 'net', 'org'],
    affiliateId: process.env.NAMECHEAP_AFFILIATE_ID!,
    baseUrl: 'https://www.namecheap.com/domains/registration/results/'
  },
  
  bluehost: {
    id: 'bluehost',
    name: 'Bluehost',
    supportedTLDs: [], // 主機商，不直接查網域
    affiliateId: process.env.BLUEHOST_AFFILIATE_ID!,
    baseUrl: 'https://www.bluehost.com/track/'
  },
  
  taiwanese: {
    id: 'taiwanese',
    name: '台灣網域註冊',
    supportedTLDs: ['tw'],
    affiliateId: process.env.TW_REGISTRAR_AFFILIATE_ID!,
    baseUrl: 'https://example.tw/domain-search' // 替換為實際台灣註冊商
  }
};

// 根據 TLD 取得可用廠商
export function getVendorsByTLD(tld: string): VendorId[] {
  if (tld === 'tw') return ['taiwanese'];
  return ['godaddy', 'namecheap'];
}

// 生成聯盟連結
export function buildAffiliateLink(
  vendorId: VendorId,
  domain: string
): string {
  const vendor = VENDORS[vendorId];
  
  switch (vendorId) {
    case 'godaddy':
      return `${vendor.baseUrl}?domainToCheck=${domain}&aff=${vendor.affiliateId}`;
    
    case 'namecheap':
      return `${vendor.baseUrl}?domain=${domain}&affid=${vendor.affiliateId}`;
    
    case 'bluehost':
      return `${vendor.baseUrl}${vendor.affiliateId}`;
    
    case 'taiwanese':
      return `${vendor.baseUrl}?domain=${domain}&ref=${vendor.affiliateId}`;
    
    default:
      throw new Error(`Unknown vendor: ${vendorId}`);
  }
}
```

### 4.4 點擊日誌模組 (`lib/affiliate/logger.ts`)

```typescript
// lib/affiliate/logger.ts
import { kv } from '@vercel/kv'; // 或使用 Vercel Blob

export interface ClickLog {
  timestamp: string;
  vendor: string;
  domain: string;
  tld: string;
  source_page: string;
  user_agent?: string;
}

// 記錄點擊事件
export async function logClick(log: ClickLog): Promise<void> {
  const key = `clicks:${Date.now()}`;
  
  // 寫入 Vercel KV
  await kv.set(key, JSON.stringify(log));
  
  // 同時增加計數器
  await kv.incr(`clicks:total`);
  await kv.incr(`clicks:vendor:${log.vendor}`);
}

// 查詢統計
export async function getClickStats() {
  const total = await kv.get<number>('clicks:total') || 0;
  
  const vendorStats = await Promise.all(
    ['godaddy', 'namecheap', 'bluehost'].map(async (v) => ({
      vendor: v,
      count: await kv.get<number>(`clicks:vendor:${v}`) || 0
    }))
  );
  
  return { total, byVendor: vendorStats };
}

// 查詢最近點擊
export async function getRecentClicks(limit = 50): Promise<ClickLog[]> {
  const keys = await kv.keys('clicks:*');
  const sortedKeys = keys
    .filter(k => k.startsWith('clicks:') && k !== 'clicks:total')
    .sort()
    .reverse()
    .slice(0, limit);
  
  const logs = await Promise.all(
    sortedKeys.map(async (key) => {
      const data = await kv.get<string>(key);
      return data ? JSON.parse(data) : null;
    })
  );
  
  return logs.filter(Boolean);
}
```

### 4.5 分析追蹤模組 (`lib/analytics/events.ts`)

```typescript
// lib/analytics/events.ts

export const ANALYTICS_EVENTS = {
  // 搜尋相關
  SEARCH_INITIATED: 'search_initiated',
  SEARCH_COMPLETED: 'search_completed',
  
  // 網域操作
  DOMAIN_COPIED: 'domain_copied',
  DOMAIN_FAVORITED: 'domain_favorited',
  DOMAIN_UNFAVORITED: 'domain_unfavorited',
  
  // 分享
  SHARE_CLICKED: 'share_clicked',
  
  // 聯盟點擊
  OUTBOUND_CLICK_GODADDY: 'outbound_click_godaddy',
  OUTBOUND_CLICK_NAMECHEAP: 'outbound_click_namecheap',
  OUTBOUND_CLICK_BLUEHOST: 'outbound_click_bluehost',
  OUTBOUND_CLICK_TAIWANESE: 'outbound_click_taiwanese',
} as const;

export type AnalyticsEventName = typeof ANALYTICS_EVENTS[keyof typeof ANALYTICS_EVENTS];

// 追蹤函式
export function track(
  eventName: AnalyticsEventName,
  properties?: Record<string, any>
) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', eventName, properties);
  }
  
  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, properties);
  }
}
```

---

## 5. API 設計規範

### 5.1 生成網域 API

**Endpoint:** `POST /api/generate`

**Request Body:**
```json
{
  "keywords": "珍珠奶茶",
  "count": 6
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "domain": "ZhenHaoHe.com",
      "chineseName": "珍好喝",
      "meaning": "諧音「真好喝」，適合飲料品牌",
      "tld": "com",
      "price": 300,
      "vendors": ["godaddy", "namecheap"]
    }
  ],
  "metadata": {
    "generated_at": "2026-02-08T10:30:00Z",
    "keywords": "珍珠奶茶"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "GENERATION_FAILED",
    "message": "無法生成網域建議，請稍後再試"
  }
}
```

### 5.2 聯盟導流 API

**Endpoint:** `GET /go/[vendor]`

**Query Parameters:**
- `domain` (required): 網域名稱
- `tld` (required): 頂級域
- `source` (optional): 來源頁面

**Example:**
```
GET /go/godaddy?domain=ZhenHaoHe.com&tld=com&source=results
```

**Response:**
```
302 Found
Location: https://www.godaddy.com/domainsearch/find?domainToCheck=ZhenHaoHe.com&aff=12345
```

**Side Effects:**
- 記錄點擊事件到日誌
- 增加廠商點擊計數器

---

## 6. 資料庫設計

### 6.1 LocalStorage 結構 (Client-side)

```typescript
// 收藏清單
localStorage.setItem('favorites', JSON.stringify([
  {
    domain: 'ZhenHaoHe.com',
    chineseName: '珍好喝',
    meaning: '諧音「真好喝」',
    tld: 'com',
    addedAt: '2026-02-08T10:30:00Z'
  }
]));

// 使用者偏好
localStorage.setItem('preferences', JSON.stringify({
  hasSeenWelcome: true,
  preferredVendor: 'godaddy'
}));
```

### 6.2 Vercel KV 結構 (Server-side)

```typescript
// 點擊日誌（時間戳為 key）
kv.set('clicks:1707386400000', JSON.stringify({
  timestamp: '2026-02-08T10:30:00Z',
  vendor: 'godaddy',
  domain: 'ZhenHaoHe.com',
  tld: 'com',
  source_page: 'results'
}));

// 總計數器
kv.set('clicks:total', 1234);

// 廠商計數器
kv.set('clicks:vendor:godaddy', 567);
kv.set('clicks:vendor:namecheap', 432);
kv.set('clicks:vendor:bluehost', 235);
```

---

## 7. 安全性設計

### 7.1 API 保護

```typescript
// middleware.ts - Rate Limiting
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const now = Date.now();
  
  // 清理過期記錄
  const requests = rateLimit.get(ip) || [];
  const recentRequests = requests.filter(t => now - t < 60000); // 1分鐘內
  
  // 限制：每分鐘最多 10 次請求
  if (recentRequests.length >= 10) {
    return NextResponse.json(
      { error: '請求過於頻繁，請稍後再試' },
      { status: 429 }
    );
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

### 7.2 後台認證

```typescript
// app/admin/layout.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const cookieStore = cookies();
  const authToken = cookieStore.get('admin_token');
  
  // 簡易密碼驗證（生產環境應使用更安全的方案）
  const validToken = process.env.ADMIN_PASSWORD_HASH;
  
  if (authToken?.value !== validToken) {
    redirect('/admin/login');
  }
  
  return <div>{children}</div>;
}
```

### 7.3 環境變數管理

```bash
# .env.local (不提交到 Git)
ANTHROPIC_API_KEY=sk-ant-xxx
GODADDY_AFFILIATE_ID=xxx
NAMECHEAP_AFFILIATE_ID=xxx
BLUEHOST_AFFILIATE_ID=xxx
TW_REGISTRAR_AFFILIATE_ID=xxx
ADMIN_PASSWORD_HASH=xxx
KV_REST_API_URL=xxx
KV_REST_API_TOKEN=xxx
```

---

## 8. 效能優化策略

### 8.1 快取策略

```typescript
// app/api/generate/route.ts
export const runtime = 'edge'; // 使用 Edge Runtime

// 靜態頁面快取
export const revalidate = 3600; // 1小時

// 動態路由 ISR
export async function generateStaticParams() {
  // 預先生成熱門關鍵字頁面
  return [
    { keywords: '珍珠奶茶' },
    { keywords: '咖啡廳' },
    { keywords: '火鍋店' },
  ];
}
```

### 8.2 圖片優化

```tsx
// 使用 Next.js Image 元件
import Image from 'next/image';

<Image
  src="/vendor-logo.png"
  alt="GoDaddy"
  width={120}
  height={40}
  loading="lazy"
  placeholder="blur"
/>
```

### 8.3 程式碼分割

```tsx
// 動態載入非關鍵元件
import dynamic from 'next/dynamic';

const HostingBanner = dynamic(
  () => import('@/components/marketing/HostingBanner'),
  { loading: () => <BannerSkeleton /> }
);
```

---

## 9. 部署架構

### 9.1 Vercel 部署配置

```json
// vercel.json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "framework": "nextjs",
  "regions": ["hnd1", "sin1"],  // 日本、新加坡（亞洲節點）
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic-api-key",
    "GODADDY_AFFILIATE_ID": "@godaddy-affiliate-id"
  }
}
```

### 9.2 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 10. 監控與日誌

### 10.1 錯誤追蹤

```typescript
// lib/monitoring/error-handler.ts
export function handleError(error: Error, context?: Record<string, any>) {
  // 記錄到控制台
  console.error('[Error]', error.message, context);
  
  // 生產環境發送到 Sentry (選用)
  if (process.env.NODE_ENV === 'production' && window.Sentry) {
    window.Sentry.captureException(error, { extra: context });
  }
}
```

### 10.2 效能監控

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

---

## 11. 擴展性考量

### 11.1 未來功能預留

```typescript
// 帳號系統預留接口
interface User {
  id: string;
  email: string;
  favorites: Domain[];
  searches: SearchHistory[];
}

// 即時網域查詢預留
interface DomainAvailability {
  domain: string;
  available: boolean;
  checkedAt: string;
}
```

### 11.2 多語言支援預留

```typescript
// lib/i18n/translations.ts
export const translations = {
  'zh-TW': {
    'search.placeholder': '輸入關鍵字',
    'cta.search': '開始算命',
  },
  'en': {
    'search.placeholder': 'Enter keywords',
    'cta.search': 'Start Naming',
  }
};
```

---

## 12. 測試策略

### 12.1 單元測試

```typescript
// __tests__/lib/domain/pricing.test.ts
import { getPriceByTLD, formatPrice } from '@/lib/domain/pricing';

describe('Pricing Module', () => {
  test('should return correct price for .com', () => {
    expect(getPriceByTLD('com')).toBe(300);
  });
  
  test('should format price correctly', () => {
    expect(formatPrice(300)).toBe('NT$ 300 起');
  });
});
```

### 12.2 整合測試

```typescript
// __tests__/api/generate.test.ts
import { POST } from '@/app/api/generate/route';

describe('Generate API', () => {
  test('should generate domains with valid keywords', async () => {
    const request = new Request('http://localhost/api/generate', {
      method: 'POST',
      body: JSON.stringify({ keywords: '珍珠奶茶' })
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(data.success).toBe(true);
    expect(data.data).toHaveLength(6);
  });
});
```

### 12.3 E2E 測試

```typescript
// e2e/homepage.spec.ts (Playwright)
import { test, expect } from '@playwright/test';

test('should complete full search flow', async ({ page }) => {
  await page.goto('/');
  
  // 輸入關鍵字
  await page.fill('input[name="keywords"]', '珍珠奶茶');
  await page.click('button[type="submit"]');
  
  // 等待結果
  await page.waitForSelector('[data-testid="domain-card"]');
  
  // 驗證結果
  const cards = await page.$$('[data-testid="domain-card"]');
  expect(cards.length).toBeGreaterThan(0);
  
  // 點擊查價
  await page.click('button:has-text("GoDaddy 查價")');
  
  // 驗證跳轉（應該開新分頁）
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('button:has-text("GoDaddy 查價")')
  ]);
  
  expect(newPage.url()).toContain('godaddy.com');
});
```

---

## 13. 文檔與協作

### 13.1 README.md

```markdown
# 台式網域命名

## 快速開始

### 安裝依賴
npm install

### 設定環境變數
cp .env.example .env.local

### 開發模式
npm run dev

### 建置
npm run build

### 測試
npm test

## 技術堆疊
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Anthropic Claude API

## 專案結構
詳見 ARCHITECTURE.md
```

### 13.2 貢獻指南

```markdown
# CONTRIBUTING.md

## 開發流程
1. 從 main 分支建立 feature branch
2. 完成功能後提交 PR
3. 通過 CI 與 Code Review
4. Merge 到 main

## Commit 訊息規範
- feat: 新功能
- fix: 修復 bug
- docs: 文件更新
- style: 程式碼格式
- refactor: 重構
- test: 測試

範例：`feat: add domain sharing feature`
```

---

## 總結

本架構設計提供：

✅ **清晰的目錄結構** - 易於導航與維護  
✅ **模組化設計** - 高內聚低耦合  
✅ **效能優化** - Edge CDN + ISR + 程式碼分割  
✅ **安全性** - Rate Limiting + 環境變數管理  
✅ **可擴展性** - 預留未來功能接口  
✅ **可測試性** - 單元/整合/E2E 測試  
✅ **可維護性** - TypeScript + 完整文檔  

**建議開發順序：**
1. 建立基礎架構與路由
2. 實作 AI 生成核心功能
3. 完成 UI 元件與頁面
4. 整合聯盟導流與追蹤
5. 後台統計介面
6. 測試與優化

**預估開發時程：**
- Phase 1 (基礎架構): 1 週
- Phase 2 (核心功能): 2 週
- Phase 3 (UI/UX): 2 週
- Phase 4 (整合測試): 1 週
- **總計：6 週**
