'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function ContactSuccess({ onReset }: { onReset: () => void }) {
  return (
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
        onClick={onReset}
        className="mt-8 px-8 py-3 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-100"
      >
        다른 메시지 보내기
      </button>
    </motion.div>
  );
}
