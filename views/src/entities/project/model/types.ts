export interface ProjectLink {
  /** 버튼에 표시될 이름 (예: 프론트엔드 코드) */
  label: string;
  url: string;
}

export interface Project {
  id: number;
  /** 프로젝트로 답한 질문. "~할 수 있을까요?"로 끝나게 씀 */
  question: string;
  title: string;
  description: string;
  role?: string;
  period?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  demoUrl: string;
  codeLinks: ProjectLink[];
}
