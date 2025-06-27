export const config = {
    env: {
        stripe: {
            publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
            secretKey: process.env.STRIPE_SECRET_KEY!,
            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
        },
        emailjs: {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
        supabase: {
            supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
            supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
        resend: {
            apiKey: process.env.RESEND_API_KEY!,
        }

    }
}