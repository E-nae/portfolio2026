// --- Types ---

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string; // 이미지 경로 (public 폴더 내)
}