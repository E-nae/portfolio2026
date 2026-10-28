import { useState } from 'react';
import { sendContact } from '../api/sendContact';
import type { ContactFormData, ContactStatus } from './types';

const emptyForm: ContactFormData = { email: '', subject: '', message: '' };

export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormData>(emptyForm);
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContact(formState);
      setFormState(emptyForm);
      setStatus('success');
    } catch (error) {
      // 실패해도 입력값은 남겨두고 이유만 보여줌
      setErrorMessage(error instanceof Error ? error.message : '');
      setStatus('error');
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) =>
    setFormState((prev) => ({ ...prev, [field]: value }));

  const reset = () => setStatus('idle');

  return { formState, status, errorMessage, handleSubmit, updateField, reset };
};
