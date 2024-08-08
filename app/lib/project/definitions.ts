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

export type ProjectPreview = {
  id: string;
  name: string;
  description: string;
  img: string;
  tags: string[]
};

export type DbProjectView = {
  id: string;
  name: string;
  previewDesc: string | null;
  mainImg: string;
  tags: string[] | null;
};
