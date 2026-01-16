interface FORMDATA {
    email: string;
    message: string;
    captchaToken?: string;
};

export const contactMe = async(formState: FORMDATA) => {
    await new Promise<void>((resolve) => {
        window.grecaptcha.ready(() => resolve());
    });
    
    const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'contact' }
    );
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formState,
                captchaToken: token, // ✅ 여기
            }),
        });

        return res;
    } catch (error) {
        console.error();
    }
}
