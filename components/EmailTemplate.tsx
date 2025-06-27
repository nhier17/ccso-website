import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  interface ThankYouEmailProps {
    firstName?: string;
    amount?: number;
    frequency?: string;
  }
  
  const baseUrl = "http://localhost:3000";
  
  export const EmailTemplate = ({
    firstName,
    amount,
    frequency = 'once',
  }: ThankYouEmailProps) => {
    const readableFrequency =
      frequency === 'once'
        ? 'one-time'
        : frequency.charAt(0).toUpperCase() + frequency.slice(1);
  
    return (
      <Html>
        <Head />
        <Preview>Thank you for your donation to CCSO 🙏</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={section}>
              <Img
                src={`${baseUrl}/icons/logo.webp`}
                width="60"
                height="60"
                alt="CCSO"
                style={{ margin: '0 auto', borderRadius: '100%' }}
              />
              <Text style={greeting}>Dear {firstName},</Text>
              <Text style={paragraph}>
                Thank you for your generous <strong>{readableFrequency}</strong> donation of{' '}
                <strong>${amount?.toFixed(2)}</strong> to <strong>Christ Compassion Service Organization (CCSO)</strong>.
              </Text>
              <Text style={paragraph}>
                Your support brings hope and healing to vulnerable communities affected by floods, poverty, and conflict.
              </Text>
              <Button style={button} href="https://ccso.org/donate">
                Donate Again
              </Button>
              <Hr />
              <Text style={footer}>
                Christ Compassion Service Organization | Rumbek, Lakes State.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  EmailTemplate.PreviewProps = {
    firstName: 'John Doe',
    amount: 50,
    frequency: 'monthly',
  } as ThankYouEmailProps;
  
  
  // Inline styles mimicking Tailwind
  const main = {
    backgroundColor: '#ffffff',
    color: '#1f2937',
    fontFamily: 'Inter, sans-serif',
  };
  
  const container = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '32px 24px',
  };
  
  const section = {
    padding: '24px',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb',
  };
  
  const greeting = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '1.625',
    margin: '12px 0',
  };
  
  const button = {
    display: 'inline-block',
    fontSize: '14px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    marginTop: '16px',
  };
  
  const footer = {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '32px',
    textAlign: 'center' as const,
  };
  