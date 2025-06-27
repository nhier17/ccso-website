import axios from "axios";

interface SendEmailProps {
    firstName: string;
    amount: number;
    frequency: string;
    email: string;
}

export const sendEmail = async({ firstName, amount, frequency, email }: SendEmailProps) => {
    try {
        const response = await axios.post('/api/send', {
            firstName,
            amount,
            frequency,
            email,
          });
          const data = response.data;
          console.log('Email sent successfully:', data);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

