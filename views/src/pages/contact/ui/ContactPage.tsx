'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/features/contact-form';
import { ContactInfo } from './ContactInfo';

export function ContactPage() {
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
                Let&apos;s <br />
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
              <ContactInfo />
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
