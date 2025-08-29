import axios from "axios";

interface SendEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async({ name, email, subject, message }: SendEmailProps) => {
    try {
        const response = await axios.post('/api/send', {
            name,
            email,
            subject,
            message,
          });
          const data = response.data;
          return data;
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

