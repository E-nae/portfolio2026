import { Navbar } from '@/widgets/navbar';
import { ContactForm } from '@/features/contact-form';
import { RecaptchaScript } from '@/shared/lib/recaptcha';
import { ContactInfo } from './ContactInfo';

export function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-10 px-5 pb-16 pt-10 sm:px-10 md:gap-[clamp(40px,6vw,96px)] lg:px-16 lg:pb-30 lg:pt-24">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <p className="text-[clamp(28px,3.4vw,44px)] font-light leading-[1.3] tracking-[-0.02em] text-question">
            물어봐도 될까요?
          </p>
          <h1 className="text-[clamp(56px,7vw,104px)] font-bold leading-none tracking-[-0.05em]">됩니다.</h1>
          <p className="mt-2 max-w-[26em] text-lg text-ink-soft">
            채용, 협업 제안, 간단한 인사 모두 좋아요. 편하게 이야기해 주세요.
          </p>
          <ContactInfo />
        </div>

        <div className="min-w-0 flex-[1_1_520px]">
          <ContactForm />
        </div>
      </main>
      {/* reCAPTCHA는 폼 있는 이 페이지에서만 로드함 */}
      <RecaptchaScript />
    </>
  );
}
