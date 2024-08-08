import { db } from '@/database/db';
import { Project, ProjectPreview } from '@/app/lib/project/definitions';
import { InsertProject, projects } from '@/database/schema';

function toProject(results: InsertProject[]): Project[] {
  return results.map((result) => ({
    id: result.id ?? '',
    name: result.name,
    mainImage: result.mainImage,
    createdAt: new Date(result.createdAt ?? new Date()),
    areaInfo: result.areaInfo ?? 'undefined',
    description: result.description,
    place: result.place ?? 'undefined',
    designer: result.designer ?? 'undefined',
    tags: result.tags ?? [],
    workTime: result.workTime ?? 0,
    previewDescription: result.previewDescription ?? 'undefined',
    projectStartDate: new Date(result.projectStartDate ?? new Date()),
    projectEndDate: new Date(result.projectEndDate ?? new Date()),
    imgs: result.imgs ?? [],
    previewImgs: result.previewImgs ?? [],
  }));
}

export async function fetchProjects(): Promise<Project[]> {
  return db
    .select()
    .from(projects)
    .then((it) => toProject(it));
}

  export async function fetchProjectPreviews(): Promise<ProjectPreview[]> {
    const result = await db
      .select({
        id: projects.id,
        name: projects.name,
        previewDesc: projects.previewDescription,
        mainImg: projects.mainImage,
        tags: projects.tags,
      })
      .from(projects)
      .execute();
  
    return result.map(project => ({
      id: project.id,
      name: project.name,
      description: project.previewDesc ?? '',
      img: project.mainImg,
      tags: project.tags ?? [],
    }));
  }
  