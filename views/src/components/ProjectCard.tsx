import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/Project';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 items-center"
        >
            <div className={`relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
    
            {/* Content Area */}
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 md:text-right items-end' : 'md:text-left items-start'}`}>
                <span className="text-blue-600 font-bold tracking-wider text-sm mb-2 uppercase">{project.category}</span>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                    {project.description}
                </p>
                
                <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                    {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg">
                        {tag}
                    </span>
                    ))}
                </div>
    
                <div className='flex flex-row gap-5 items-center'>
                    <motion.a 
                        href={project.url}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 border-b-2 border-gray-900 pb-1"
                    >
                        View Project <ExternalLink size={18} />
                    </motion.a>
                    {
                        project.github.map((git) => (
                            <motion.a 
                                key={git.url}
                                href={git.url}
                                whileHover={{ x: 5 }}
                                className="w-7 h-7 rounded-full bg-black p-1 flex items-center cursor-pointer"
                            >
                                <Github size={20} style={{ color: '#fff'}} />
                            </motion.a>
                        ))
                    }
                    
                </div>
            </div>
        </motion.div>
  
    )
}