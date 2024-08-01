import {ProjectDetail, ProjectPreview} from "@/app/lib/project/definitions";

export enum PortfolioTag {
    HOME = 'dom',
    FLAT = 'mieszkanie',
    BATHROOM = 'łazienka',
    KITCHEN = 'kuchnia',
    SALOON = 'salon',
    ALL = 'all',
}

export const categories = [
    {
        name: 'dom',
        actionArg: 'house',
    },
    {
        name: 'mieszkanie',
        actionArg: 'flat',
    },
    {
        name: 'łazienka',
        actionArg: 'bathroom',
    },
    {
        name: 'kuchnia',
        actionArg: 'kitchen',
    },
    {
        name: 'wszystkie',
        actionArg: 'all',
    },
];

export const projectPreviews = [
    {
        id: "dom1",
        name: 'Dom 1',
        tag: 'house',
        shortDesc: '150 m2 - Warszawa',
        imgHref: '/portfolio/house/house1.jpg',
    },
    {
        id: "kuchnia2",
        name: 'Kuchnia 2',
        tag: 'kitchen',
        shortDesc: '15 m2 - Sokoły',
        imgHref: '/portfolio/kitchen/kitchen2.jpg',
    },
    {
        id: "dom3",
        name: 'Dom 3',
        tag: 'house',
        shortDesc: '200 m2 - Ząbki',
        imgHref: '/portfolio/house/house3.jpg',
    },
    {
        id: "m1",
        name: 'Mieszkanie 1',
        tag: 'flat',
        shortDesc: '100 m2 - Białystok',
        imgHref: '/portfolio/flat/ap1.jpg',
    },
    {
        id: "m2",
        name: 'Mieszkanie 2',
        tag: 'flat',
        shortDesc: '80 m2 - Nieporęt',
        imgHref: '/portfolio/flat/ap2.jpg',
    },
    {
        id: "kuchnia1",
        name: 'Kuchnia 1',
        tag: 'kitchen',
        shortDesc: '20 m2 - Warszawa',
        imgHref: '/portfolio/kitchen/kitchen1.jpg',
    },

    {
        id: "bath1",
        name: 'Łazienka 1',
        tag: 'bathroom',
        shortDesc: '15 m2 - Radomsk',
        imgHref: '/portfolio/bathroom/bathroom1.jpg',
    },
    {
        id: "dom2",
        name: 'Dom 2',
        tag: 'house',
        shortDesc: '200 m2 - Ząbki',
        imgHref: '/portfolio/house/house6.jpg',
    },
];