'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { scrollToSection } from '@/shared/lib/scroll';

export default function Hero() {
    const router = useRouter();

    return (
        <section className="flex flex-col justify-center min-h-screen px-8 pt-20 bg-gray-50">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    Frontend Developer
                </span>
                
                {/* 메인 슬로건 적용 */}
                <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-gray-900 md:text-8xl">
                    Everything is <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
                        Enaeble.
                    </span>
                </h1>
                
                {/* 슬로건과 이어지는 서브 텍스트 */}
                <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-500 md:text-xl leading-relaxed">
                    &ldquo;이게 될까요?&rdquo;라는 질문에 <b className="text-gray-900">&ldquo;됩니다&rdquo;</b>로 답하는 개발자.<br />
                    당신의 아이디어를{' '}
                    <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">Enaeble</b>
                    {' '}하겠습니다.
                </p>
                
                <div className="flex justify-center gap-4">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 font-semibold text-white bg-gray-900 rounded-full shadow-lg hover:bg-gray-800"
                    onClick={() => scrollToSection('projects')}
                >
                    프로젝트 보기
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 font-semibold text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50"
                    onClick={()=> router.push('/contact')}
                >
                    Contact Me
                </motion.button>
                </div>
            </motion.div>
        </section>
    );
    
}