import * as React from "react";

interface EmailTemplateProps {
  message: string;
  senderEmail: string;
}

interface CreateEmailOptions {
  // Autres propriétés...
  react?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  senderEmail,
}) => (
  <div>
    <h1>Welcome, you have received a mail from {senderEmail}!</h1>
    <p>The message is :</p>
    <p>{message}</p>
  </div>
);
