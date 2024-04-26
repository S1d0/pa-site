import { Body, Container, Head, Hr, Html, Preview, Section, Tailwind, Text } from "@react-email/components";

type ContactEmailProps = {
    name: string,
    phone: string,
    email: string,
    description: string
}

export default function ContactEmail({
    name,
    phone,
    email,
    description
}: ContactEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>P&A nowe zapytanie od {name}</Preview>
        <Tailwind>
            <Body className="bg-gray-100 my-10 px-8">
                <Container>
                    <Section>
                        <Text className="text-lg font-bold">Masz nową wiadomość od {name}</Text>
                        <Text>Telefon: {phone}</Text>
                        <Text>Email: {email}</Text>
                        <Hr />
                        <Text className="text-lg font-bold">Opis projektu klienta</Text>
                        <Text>{description}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  );
}