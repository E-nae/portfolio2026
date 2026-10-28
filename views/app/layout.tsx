import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "@/app/styles/globals.css";

const plex = IBM_Plex_Sans_KR({
  variable: "--font-plex",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enaeble | 프론트엔드 개발자 임인혜",
  description:
    "\"이게 될까요?\"라는 질문에 \"됩니다\"로 답하는 프론트엔드 개발자 임인혜의 포트폴리오입니다.",
  openGraph: {
    title: "Enaeble | 프론트엔드 개발자 임인혜",
    description: "\"이게 될까요?\"라는 질문에 \"됩니다\"로 답한 프로젝트들을 모았습니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={plex.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
