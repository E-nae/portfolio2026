import { useState } from 'react';
import { sendContact } from '../api/sendContact';
import type { ContactFormData, ContactStatus } from './types';

export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormData>({
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<ContactStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await sendContact(formState);

      if (!res?.ok) throw new Error('Failed');

      setTimeout(() => setStatus('success'), 1000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000); // 3초 후 다시 입력 가능하도록
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) =>
    setFormState((prev) => ({ ...prev, [field]: value }));

  const reset = () => setStatus('idle');

  return { formState, status, handleSubmit, updateField, reset };
};
