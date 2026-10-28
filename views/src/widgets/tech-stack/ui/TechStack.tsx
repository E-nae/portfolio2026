const groups = [
    { title: '화면', items: ['React, Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Table, Nuqs', 'Tiptap'] },
    { title: '서버와 실시간', items: ['Node.js, Express', 'Redis, Lua Script', 'Hocuspocus', 'Supabase (PostgreSQL)'] },
    { title: 'AI', items: ['Python', 'LangGraph', 'Streamlit'] },
];

export default function TechStack() {
    return (
        <section aria-labelledby="tools-title" className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-10 lg:px-16 lg:pb-30">
            <h2 id="tools-title" className="mb-6 text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.03em] md:mb-10">
                답하는 데 쓴 도구
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 md:gap-12">
                {groups.map((group) => (
                    <div key={group.title}>
                        <h3 className="mb-3 text-base font-medium text-muted">{group.title}</h3>
                        <ul className="text-lg leading-[2]">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
