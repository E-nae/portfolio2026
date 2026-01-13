interface FORMDATA {
    email: string,
    message: string
};

export const contactMe = async(formState: FORMDATA) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        return res;
    } catch (error) {
        console.error();
    }
}
