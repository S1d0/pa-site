import {Project} from "@/app/lib/definitions";

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


export class InMemoryDatabase {
    private projects: Project[] = [];

    // Add a new project to the database
    addProject(project: Project): void {
        this.projects.push(project);
    }

    // Get all projects from the database
    getAllProjects(): Project[] {
        return this.projects;
    }

    // Get a project by its ID
    getProjectById(id: string): Project | undefined {
        return this.projects.find(project => project.id === id);
    }

    // Update an existing project
    updateProject(id: string, updatedProject: Partial<Project>): Project | undefined {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects[index] = { ...this.projects[index], ...updatedProject };
            return this.projects[index];
        }
        return undefined;
    }

    // Delete a project by its ID
    deleteProject(id: string): boolean {
        const initialLength = this.projects.length;
        this.projects = this.projects.filter(project => project.id !== id);
        return this.projects.length !== initialLength;
    }
}

export const database = new InMemoryDatabase();

database.addProject({
    id: "dom1",
    name: "Dom w Jerzmanowicach",
    areaInfo: '150 m2',
    description: "W tej aranżacji w stylu rustykalnym w industrialnej oprawie postawiliśmy na prostotę i bezpretensjonalność: skromne drewniane meble oraz naturalne kolory.\n" +
        "\n" +
        "Aby uzyskać lepszy efekt dodaliśmy kilka akcentów: kolorowe krzesła oraz wygodne duże fotele mocnego koloru.",
    designer: "Projekt biura arch. Emilia Zajkowska & Friends",
    workTime: '4 miesiące',
    imgUrls: [
        'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
});