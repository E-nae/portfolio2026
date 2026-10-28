export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export type ContactStatus = 'idle' | 'loading' | 'success' | 'error';
