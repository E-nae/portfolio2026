# Everything is Enaeble - Frontend Developer Portfolio

> **"아이디어가 현실이 되는 과정에 기술적 확신을 더합니다."**
>
> Next.js 정적 사이트와 Cloudflare Pages Functions로 구축한 프론트엔드 개발자 포트폴리오 웹사이트입니다.

🔗 https://enaeble.co.kr

## 📋 Project Overview

별도 서버 없이 Cloudflare Pages 하나로 프론트엔드와 API를 함께 운영합니다.
페이지는 정적 파일로 배포되고, 문의 메일 전송 API는 같은 도메인의 Pages Functions에서 처리하므로 서버가 잠들거나 CORS를 신경 쓸 일이 없습니다.

- **Design Concept:** "이게 될까요? → 됩니다", White, Minimal, Typography-driven
- **Key Feature:** Smooth Scroll, Staggered Animations, Contact Form (Email)

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript
- **Architecture:** FSD (Feature-Sliced Design)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

### API (Cloudflare Pages Functions)
- **Runtime:** Cloudflare Workers
- **Email Service:** Resend
- **Anti-spam:** Google reCAPTCHA v3

### Deploy
- **Hosting:** Cloudflare Pages (GitHub `main` 브랜치 푸시 시 자동 배포)

## 📂 Directory Structure

```bash
portfolio2026/
└── views/                      # Cloudflare Pages 프로젝트 루트
    ├── app/                    # Next.js App Router (라우트 진입점)
    ├── functions/
    │   └── api/contact.ts      # POST /api/contact 문의 메일 전송
    ├── src/                    # FSD 레이어
    │   ├── pages/              #   페이지 (home, contact)
    │   ├── widgets/            #   hero, about, project-list 등
    │   ├── features/           #   contact-form
    │   ├── entities/           #   project
    │   └── shared/             #   config, lib, ui
    ├── public/                 # 정적 에셋
    └── next.config.ts          # output: 'export' (빌드 결과: out/)
```

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/E-nae/portfolio2026.git
cd portfolio2026/views
npm install
```

### 2. Environment Setup

`views/.env` (프론트, 빌드 시 포함됨)

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

`views/.dev.vars` (API 로컬 테스트용 비밀키, Git에 올리지 않음)

```bash
RESEND_API_KEY=your-resend-api-key
RECAPTCHA_SECRET=your-recaptcha-secret
CONTACT_RECEIVER_EMAIL=you@example.com
```

배포 환경에서는 같은 값을 Cloudflare Pages 대시보드의 **Settings → Variables and Secrets**에 등록합니다.

### 3. Running the Project

화면만 확인할 때

```bash
npm run dev
```

문의 API까지 함께 확인할 때 (Pages Functions는 `next dev`에서 실행되지 않음)

```bash
npm run build
npx wrangler pages dev out
```

## ✨ Key Features

### 1. Serverless Contact API
- 정적 사이트와 같은 도메인에서 Pages Functions가 `/api/contact`를 처리합니다. 항상 켜져 있고 무료 플랜으로 운영됩니다.
- reCAPTCHA v3 점수로 봇 요청을 차단하고, 입력값 길이 제한과 HTML 이스케이프를 적용했습니다.
- **Reply-To 설정:** 받은 메일에서 '답장'을 누르면 문의한 사용자의 이메일로 바로 연결됩니다.
- **HTML Template:** 브랜드 아이덴티티가 적용된 디자인의 메일이 발송됩니다.

### 2. Interactive UX
- Framer Motion을 활용하여 스크롤 시 요소들이 순차적으로 떠오르는 Stagger Effect를 구현했으며, 부드러운 섹션 이동 경험을 제공합니다.

## 📝 License
This project is licensed under the MIT License.
