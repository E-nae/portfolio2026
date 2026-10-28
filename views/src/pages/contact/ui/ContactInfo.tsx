import { Mail, Github } from 'lucide-react';

export function ContactInfo() {
  return (
    <>
      <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
            <Mail size={24} />
          </div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</span>
        </div>
        <p className="text-2xl font-bold text-gray-900 pl-16">shesrainbow2@gmail.com</p>
      </div>

      <a href="https://github.com/E-nae" target="_blank" className="p-5 bg-gray-50 rounded-3xl border border-gray-100 hover:border-gray-300 transition-colors group">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-white rounded-full shadow-sm text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
            <Github size={24} />
          </div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">GitHub</span>
        </div>
        <p className="text-2xl font-bold text-gray-900 pl-16 flex items-center gap-2">
          github.com/E-nae
        </p>
      </a>
    </>
  );
}
