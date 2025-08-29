export const config = {
    env: {
        stripe: {
            publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
            secretKey: process.env.STRIPE_SECRET_KEY!,
            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
        },
        supabase: {
            supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!,
            supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
        resend: {
            apiKey: process.env.RESEND_API_KEY!,
        },
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,

    }
}