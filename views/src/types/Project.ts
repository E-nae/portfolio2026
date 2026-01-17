// --- Types ---

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
    github: { url: string }[];
}