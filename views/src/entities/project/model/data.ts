import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 2,
    question: "수만 건의 데이터를 버벅임 없이 보여줄 수 있을까요?",
    title: "Dashboard",
    description:
      "TanStack Table과 Virtual Scroll을 결합해 수만 건의 데이터도 끊김 없이 그립니다. 필터 상태는 Nuqs로 모두 URL에 담아, 새로고침하거나 링크를 공유해도 같은 화면이 열립니다.",
    tags: ["Next.js", "TanStack Table", "Nuqs", "Node.js", "Redis"],
    image: "/assets/project3.png",
    imageAlt: "Dashboard 화면",
    demoUrl: "https://project3.enaeble.co.kr",
    codeLinks: [
      {
        label: "프론트엔드 코드",
        url: "https://github.com/E-nae/virtual_scroll_dashboard_frontend",
      },
      {
        label: "백엔드 코드",
        url: "https://github.com/E-nae/virtual_scroll_dashboard_backend",
      },
    ],
  },
  {
    id: 4,
    question: "티켓이 열리는 순간 몰려드는 사람들을 순서대로 받을 수 있을까요?",
    title: "Queue reservation system",
    description:
      "대규모 트래픽이 몰리는 예매 상황을 가정한 가상 대기열입니다. Redis 자료구조로 선착순 대기열을 만들고, 결제 시점의 동시성 문제(Race Condition)는 Lua Script로 해결했습니다.",
    tags: ["Next.js", "Node.js", "Redis", "Lua Script"],
    image: "/assets/project2.png",
    imageAlt: "Queue reservation system 대기열 화면",
    demoUrl: "https://project2.enaeble.co.kr",
    codeLinks: [
      { label: "코드 보기", url: "https://github.com/E-nae/Queue-reservation" },
    ],
  },
  {
    id: 3,
    question: "여러 사람이 한 문서를 동시에 고칠 수 있을까요?",
    title: "Real-time Collaboration Editor",
    description:
      "여러 사용자가 같은 문서를 동시에 편집하는 실시간 협업 에디터입니다. Tiptap과 Hocuspocus로 변경 내용을 맞추고, 문서는 Supabase(PostgreSQL)에 바이너리로 저장합니다.",
    tags: ["Next.js", "Tiptap", "Hocuspocus", "Node.js", "Supabase"],
    image: "/assets/project1.png",
    imageAlt: "협업 에디터 화면",
    demoUrl: "https://project1.enaeble.co.kr",
    codeLinks: [
      {
        label: "코드 보기",
        url: "https://github.com/E-nae/realtime_collaborative_Editor",
      },
    ],
  },
  {
    id: 1,
    question: "스타일과 예산만 말하면 인테리어를 제안해 줄 수 있을까요?",
    title: "Interior AI Agent",
    description:
      "AI 기반 인테리어 디자인 도우미입니다. 사용자가 입력한 스타일과 예산에 맞춰 인테리어 디자인을 제안합니다.",
    tags: ["Python 3", "Streamlit", "LangGraph"],
    image: "/assets/project4.png",
    imageAlt: "Interior AI Agent 화면",
    demoUrl: "https://project4.enaeble.co.kr",
    codeLinks: [
      { label: "코드 보기", url: "https://github.com/E-nae/interior_ai_agent" },
    ],
  },
];
