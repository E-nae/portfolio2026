'use client';

import { Send, Loader2 } from 'lucide-react';
import { useContactForm } from '../model/useContactForm';
import { ContactSuccess } from './ContactSuccess';

export function ContactForm() {
  const { formState, status, handleSubmit, updateField, reset } = useContactForm();

  if (status === 'success') {
    return <ContactSuccess onReset={reset} />;
  }

  return (
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
            onChange={(e) => updateField('email', e.target.value)}
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
          onChange={(e) => updateField('message', e.target.value)}
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
  );
}
