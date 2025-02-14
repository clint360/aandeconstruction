import emailjs from 'emailjs-com';

interface FormData {
    sender_name: string;
    sender_email: string;
    message: string;
    [key: string]: string;
}

export function getAndSendEmail(event: Event): void {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData: FormData = {
        sender_name: (form.elements.namedItem('sender_name') as HTMLInputElement).value,
        sender_email: (form.elements.namedItem('sender_email') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    emailjs.send(
        '_SERVICE_ID', 
        '_TEMPLATE_ID', 
        formData as Record<string, unknown>, 
        'Y_USER_ID'
    )
    .then(response => {
        console.log('Email sent successfully!', response);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Try again later.');
    });
}