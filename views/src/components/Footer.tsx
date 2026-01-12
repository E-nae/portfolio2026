import { Github, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container flex flex-col items-center justify-between px-8 mx-auto md:flex-row">
            <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500">© 2026 Enae(Lim InHye). All rights reserved.</p>
            </div>
            <div className="flex gap-6">
                <a href="https://github.com/E-nae" className="text-gray-400 hover:text-gray-900"><Github size={20} /></a>
                <a href="/contact" className="text-gray-400 hover:text-gray-900"><Mail size={20} /></a>
            </div>
            </div>
        </footer>
    )
}