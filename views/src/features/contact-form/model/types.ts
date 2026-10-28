export interface ContactFormData {
  email: string;
  message: string;
}

export type ContactStatus = 'idle' | 'loading' | 'success' | 'error';
