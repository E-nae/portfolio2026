import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    const moveToProjects = () => {
        const section = document.getElementById('projects');
        
        if (section) {
            // 네비게이션 바 높이(약 80px~100px)만큼 여유를 두고 스크롤 위치 계산
            const headerOffset = 100; 
            const elementPosition = section.getBoundingClientRect().top; //현재 브라우저 화면을 기준으로 한 요소의 위치
            const offsetPosition = elementPosition + window.scrollY - headerOffset; // 스크롤 내린만큼 더해줘야 진짜 절대적 위치
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    
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
                    아이디어가 현실이 되는 <b>탄탄한 기술적 해답</b>을 제시합니다.<br />
                    유연한 사고와 단단한 코드로 프로젝트의 성공을 <b>Enaeble</b> 합니다.
                </p>
                
                <div className="flex justify-center gap-4">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 font-semibold text-white bg-gray-900 rounded-full shadow-lg hover:bg-gray-800"
                    onClick={moveToProjects}
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