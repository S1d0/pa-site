export type Project = {
    id: string;
    created: Date;
    name: string;
    areaInfo: string;
    description: string;
    place: string;
    designer: string;
    tags: string[];
    workTime: string;
    projectStartDate: string;
    projectEndDate: string;
    imgs: string[];
    previewImgs: string[]
    previewDescription: string
};