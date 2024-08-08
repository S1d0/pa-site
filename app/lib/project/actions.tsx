import { db } from '@/database/db';
import {
  DbProjectView,
  Project,
  ProjectPreview,
} from '@/app/lib/project/definitions';
import { SelectProject, projects } from '@/database/schema';
import { eq } from 'drizzle-orm';

function maptoProject(dbProject: SelectProject): Project {
  return {
    id: dbProject.id ?? '',
    name: dbProject.name,
    mainImage: dbProject.mainImage,
    createdAt: new Date(dbProject.createdAt ?? new Date()),
    areaInfo: dbProject.areaInfo ?? 'undefined',
    description: dbProject.description,
    place: dbProject.place ?? 'undefined',
    designer: dbProject.designer ?? 'undefined',
    tags: dbProject.tags ?? [],
    workTime: dbProject.workTime ?? 0,
    previewDescription: dbProject.previewDescription ?? 'undefined',
    projectStartDate: new Date(dbProject.projectStartDate ?? new Date()),
    projectEndDate: new Date(dbProject.projectEndDate ?? new Date()),
    imgs: dbProject.imgs ?? [],
    previewImgs: dbProject.previewImgs ?? [],
  };
}

function mapToPreview(dbView: DbProjectView): ProjectPreview {
  return {
    id: dbView.id,
    name: dbView.name,
    description: dbView.previewDesc ?? '',
    img: dbView.mainImg,
    tags: dbView.tags ?? [],
  };
}

export async function fetchProjects(): Promise<Project[]> {
  return db
    .select()
    .from(projects)
    .then((results) => results.map(maptoProject));
}

export async function fetchProject(id: string): Promise<Project | null> {
  return await db
    .select()
    .from(projects)
    .where(eq(projects.id, id))
    .then((results) => {
      const selectedProject: SelectProject = results[0];
      return selectedProject ? maptoProject(selectedProject) : null;
    });
}

export async function fetchProjectPreviews(): Promise<ProjectPreview[]> {
  return db
    .select({
      id: projects.id,
      name: projects.name,
      previewDesc: projects.previewDescription,
      mainImg: projects.mainImage,
      tags: projects.tags,
    })
    .from(projects)
    .then((results) => results.map(mapToPreview));
}
