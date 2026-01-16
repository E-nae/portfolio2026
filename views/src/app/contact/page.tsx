"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ArrowLeft, Send, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { contactMe } from '@/api/contact';

export default function Contact() {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await contactMe(formState);

      if (!res?.ok) throw new Error('Failed');

      setTimeout(() => setStatus('success'), 1000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000); // 3초 후 다시 입력 가능하도록
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      {/* Navigation (Simple Back) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
          <ArrowLeft size={18} />
          Home으로 가기
        </Link>
      </nav>

      <section className="flex flex-col justify-center min-h-screen px-8 pt-20">
        <div className="mx-auto w-full max-w-5xl">
          
          {/* Header Section */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 md:text-8xl mb-6">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
                  Connect.
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                전달할 말씀이 있으신가요?<br />
                간단한 인사도 좋습니다. 편하게 이야기해 주세요.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
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
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
             {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-20 text-center bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="mb-6 text-green-500">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">메시지가 전송되었습니다!</h3>
                <p className="text-gray-500 text-lg">
                  빠른 시일 내에 확인하고 연락드리겠습니다.<br/>
                  오늘도 <b>Enaeble</b>한 하루 되세요.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-8 py-3 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-100"
                >
                  다른 메시지 보내기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="group">
                    <label className="block mb-2 text-sm font-bold text-gray-900 ml-1">Your Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-6 text-lg bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                      placeholder="hello@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="group">
                    <label className="block mb-2 text-sm font-bold text-gray-900 ml-1">Subject (Optional)</label>
                     <input
                      type="text"
                      className="w-full p-6 text-lg bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                      placeholder="문의 제목"
                    />
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <label className="block mb-2 text-sm font-bold text-gray-900 ml-1">Message</label>
                  <textarea
                    required
                    className="flex-1 w-full p-6 text-lg bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-400 resize-none min-h-[150px]"
                    placeholder="전달하실 내용을 적어주세요."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gray-900 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}