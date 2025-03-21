export const config = {
    env: {
        stripe: {
            publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
            secretKey: process.env.STRIPE_SECRET_KEY!,
        },
        emailjs: {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }

    }
}