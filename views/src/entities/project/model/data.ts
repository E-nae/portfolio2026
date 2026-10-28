import type { Project } from "./types";

// --- Mock Data (프로젝트가 적어도 꽉 차 보이게 긴 설명과 큰 이미지 사용) ---
export const projects: Project[] = [
  {
    id: 1,
    title: "Interior AI Agent",
    category: "AI Application",
    description:
      "AI 기반의 인테리어 디자인 도우미 애플리케이션입니다. 사용자가 입력한 스타일과 예산에 따라 최적화된 인테리어 디자인을 제안해줍니다.",
    tags: ["Python3", "streamlit", "LangGraph"],
    image: "/assets/project4.png",
    url: "https://project4.enaeble.co.kr",
    github: [{ url: "https://github.com/E-nae/interior_ai_agent" }],
  },
  {
    id: 2,
    title: "Dashboard",
    category: "Dashboard",
    description:
      "대시보드 및 대용량 데이터 시각화 페이지입니다. TanStack Table과 Virtual Scroll을 결합해 수만 건의 데이터도 렉 없이 렌더링했으며, Nuqs를 도입해 모든 필터 상태를 URL로 관리하여 UX를 개선했습니다.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Redis(ioredis)"],
    image: "/assets/project3.png",
    url: "https://project3.enaeble.co.kr",
    github: [
      { url: "https://github.com/E-nae/virtual_scroll_dashboard_frontend" },
      { url: "https://github.com/E-nae/virtual_scroll_dashboard_backend" },
    ],
  },
  {
    id: 3,
    title: "Real-time Collaboration Editor",
    category: "Productivity App",
    description:
      "동시에 사용자들이 문서를 편집할 수 있는 실시간 협업 에디터입니다. 작성된 내용은 Supabase(PostgreSQL)에 바이너리 형태로 저장됩니다.",
    tags: ["Next.js", "Tiptap", "Node.js", "Hocuspocus", "Supabase"],
    image: "/assets/project1.png",
    url: "https://project1.enaeble.co.kr",
    github: [{ url: "https://github.com/E-nae/realtime_collaborative_Editor" }],
  },
  {
    id: 4,
    title: "Queue reservation system",
    category: "Productivity App",
    description:
      "대규모 트래픽이 몰리는 티켓 예매 상황을 가정하여 구축한 가상 대기열(Virtual Waiting Room) 시스템입니다. Redis의 자료구조를 활용하여 선착순 대기열을 구현하고, Lua Script를 통해 결제 시점의 동시성 문제(Race Condition)를 해결했습니다.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Redis(ioredis)"],
    image: "/assets/project2.png",
    url: "https://project2.enaeble.co.kr",
    github: [{ url: " https://github.com/E-nae/Queue-reservation" }],
  },
];
