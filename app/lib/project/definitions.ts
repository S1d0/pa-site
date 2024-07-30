export type Project = {
    id: string;
    createdAt: Date;
    name: string;
    mainImage: string;
    areaInfo: string;
    description: string;
    place: string;
    designer: string;
    tags: string[];
    workTime: number;
    projectStartDate: Date;
    projectEndDate: Date;
    imgs: string[];
    previewImgs: string[];
    previewDescription: string;
  };