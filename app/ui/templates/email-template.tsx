// interface EmailTemplateProps {
//   name: string;
//   phone: number;
//   projectDesc: string;
//   email: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   name,
//   phone,
//   projectDesc,
//   email,
// }) => (
//   <div>
//     <h1>Masz wiadomość od {name}!</h1>
//     <p>Telefon do kontaktu: {phone}</p>
//     <p>Email: {email}</p>
//     <p>Opis projektu: {projectDesc}</p>
//   </div>
// );

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);