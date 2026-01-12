export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md">
            <div className="text-xl font-bold tracking-tighter text-gray-900">
                ENAEBLE<span className="text-blue-500">.</span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-500">
                <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
                <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
                <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
        </nav>
    )
}