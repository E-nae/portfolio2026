import { Project } from "@/types/Project";

// --- Mock Data (프로젝트가 적어도 꽉 차 보이게 긴 설명과 큰 이미지 사용) ---
export const projects: Project[] = [
    {
      id: 1,
      title: "Real-time Collaboration Editor",
      category: "Productivity App",
      description: "동시에 사용자들이 문서를 편집할 수 있는 실시간 협업 에디터입니다. 작성된 내용은 Supabase(PostgreSQL)에 바이너리 형태로 저장됩니다.",
      tags: ["Next.js", "Tiptap", "Node.js", "Hocuspocus", "Supabase"],
      image: "/assets/project1.png",
      url: "https://project1.enaeble.co.kr"
    },
    {
      id: 2,
      title: "Queue reservation system",
      category: "Productivity App",
      description: "대규모 트래픽이 몰리는 티켓 예매 상황을 가정하여 구축한 가상 대기열(Virtual Waiting Room) 시스템입니다. Redis의 자료구조를 활용하여 선착순 대기열을 구현하고, Lua Script를 통해 결제 시점의 동시성 문제(Race Condition)를 해결했습니다.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Redis(ioredis)"],
      image: "/assets/project2.png",
      url: "https://project2.enaeble.co.kr"
    },
    {
      id: 3,
      title: "Dashboard",
      category: "Dashboard",
      description: "대시보드 및 대용량 데이터 시각화 페이지입니다. TanStack Table과 Virtual Scroll을 결합해 수만 건의 데이터도 렉 없이 렌더링했으며, Nuqs를 도입해 모든 필터 상태를 URL로 관리하여 UX를 개선했습니다.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Redis(ioredis)"],
      image: "/assets/project3.png",
      url: "https://project3.enaeble.co.kr"
    },
];