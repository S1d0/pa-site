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

export type SectionHeaderType = {
    title: string,
    description: string
}

export type ContactForm = {
     name: string,
     email: string,
     phone: string, 
     projectDesc: string 
}