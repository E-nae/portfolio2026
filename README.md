# Everything is Enaeble - Frontend Developer Portfolio

> **"아이디어가 현실이 되는 과정에 기술적 확신을 더합니다."**
>
> Next.js 14와 Custom Node.js Server로 구축한 프론트엔드 개발자 포트폴리오 웹사이트입니다.

![Project Preview]()

## 📋 Project Overview

이 프로젝트는 단순한 정적 웹사이트가 아닌, **확장 가능한 Node.js 환경** 위에서 동작합니다.
Next.js의 강력한 SSR 기능과 Express.js의 유연한 라우팅 시스템을 결합하여, 향후 API 확장 및 백엔드 로직 통합이 용이하도록 설계되었습니다.

- **Design Concept:** White, Minimal, Typography-driven
- **Key Feature:** Smooth Scroll, Staggered Animations, Real-time Email Sending

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

### Backend (Custom Server)
- **Runtime:** Node.js (ESM)
- **Server Framework:** Express.js
- **Email Service:** Nodemailer (SMTP)X -> Resend
- **Process Manager:** Cross-env
- **Anti-spam:** google reCAPTCHA v3
- **Anti-bot:** Rate Limit

## 📂 Directory Structure

```bash
my-portfolio/
├── app/                # Next.js 14 App Router Source
│   ├── contact/        # Contact Page
│   ├── globals.css     # Global Styles (Tailwind)
│   ├── layout.tsx      # Root Layout
│   └── page.tsx        # Main Page (Hero, Projects, About)
├── routes/             # Backend API Routes
│   └── contact.js      # Email sending logic
├── public/             # Static Assets
├── server.ts           # Custom Express Server Entry Point
├── tsconfig.json       # TypeScript Configuration
└── package.json


=====================================================

🚀 Getting Started
1. Installation
- 프로젝트를 클론하고 의존성을 설치합니다.

```[Bash]
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
npm install


2. Environment Setup (.env)
루트 경로에 .env 파일을 생성하고, 이메일 전송을 위한 SMTP 설정을 입력합니다. (Gmail 사용 시 '앱 비밀번호' 사용 필수)

```[코드 스니펫]
NODE_ENV=development
PORT=3000

# Nodemailer Settings (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password


3. Running the Project
Development Mode Next.js와 Custom Server(Express)를 동시에 실행합니다.

```[Bash]
npm run dev
Production Build

```[Bash]
npm run build
npm start

✨ Key Features implementation
1. Custom Server Architecture
- Next.js의 기본 서버 대신 server.ts를 진입점으로 사용하여, Express 미들웨어를 활용할 수 있는 구조를 구축했습니다. 이를 통해 프론트엔드와 백엔드 로직을 하나의 프로젝트에서 모놀리식으로 효율적으로 관리합니다.

2. Real-time Contact Form
- Nodemailer를 사용하여 별도의 서드파티 서비스(EmailJS 등) 없이 직접 SMTP 연동을 구현했습니다.
- Reply-To 설정: 받은 메일에서 '답장'을 누르면 문의한 사용자의 이메일로 바로 연결됩니다.
- HTML Template: 브랜드 아이덴티티가 적용된 깔끔한 디자인의 메일이 발송됩니다.

3. Interactive UX
- Framer Motion을 활용하여 스크롤 시 요소들이 순차적으로 떠오르는 Stagger Effect를 구현했으며, useRouter와 window.scrollTo를 조합하여 부드러운 페이지 내비게이션 경험을 제공합니다.

📝 License
This project is licensed under the MIT License.
