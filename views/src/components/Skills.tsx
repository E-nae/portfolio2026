import { motion } from 'framer-motion';
import { Code2, Layers, Zap } from 'lucide-react';

export default function Skills() {
    const skills = [
        { name: "React / Next.js", icon: <Code2 /> },
        { name: "TypeScript", icon: <Zap /> },
        { name: "Tailwind CSS", icon: <Layers /> },
        { name: "Node.js", icon: <Code2 /> },
      ];

    return (
        <section className="py-24 bg-white">
            <div className="container px-8 mx-auto">
                <h2 className="mb-16 text-3xl font-bold text-center text-gray-900">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center justify-center p-8 transition-colors bg-gray-50 border border-gray-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50/30"
                    >
                        <div className="mb-4 text-blue-600">{skill.icon}</div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}