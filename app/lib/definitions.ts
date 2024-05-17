// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type ContactForm = {
    name: string;
    email: string;
    phone: string;
    projectDesc: string;
};


// Wszystko powyżej do usunięcia

export type ImageDesc = {
    title: string;
    desc: string;
    href: string;
}

export type ShowcaseDetail = {
    projectInfo: string;
    // Powierzchnia rezalizacji
    areaInfo: string;
    description: string;
    // Czas realizacji
    workTime: string;
    imgUrls: string[];
    href: string;
}

export interface IToggle<keyType> {
    (key: keyType): void;
}

export type TestimonyInfo = {
    description: string,
    author: string,
    authorDesc: string
    avatarHref: string
}

export type UnderlineLinkProp = {
    name: string,
    href: string,
}


export interface IButtonAction<argType> {
    (key: argType): void;
}

export type UnderlineButtonProp<actionArgType> = {
    name: string,
    id: string,
    action: IButtonAction<actionArgType>
}

export type SectionHeader = {
    title: string,
    description: string
}

export type Project = {
    id: string,
    name: string,
    areaInfo: string,
    description: string,
    designer: string,
    workTime: string,
    imgUrls: string[]
}