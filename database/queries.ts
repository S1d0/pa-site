import { Project } from '@/app/lib/project/definitions';
import { db } from './db';
import { InsertProject, projects } from './schema';

/**
 * TODO:
 * This file should be removed, 
 * All methods needs to be moved @/app/lib/projects/actions.tsx, since it's project domain 
 * 
 */

function toProject(results: InsertProject[]): Project[] {
  return results.map((result) => ({
    id: result.id ?? '', // Ensure default values if necessary
    name: result.name,
    mainImage: result.mainImage,
    createdAt: new Date(result.createdAt ?? new Date()),
    areaInfo: result.areaInfo ?? 'undefined',
    description: result.description,
    place: result.place ?? 'undefined',
    designer: result.designer ?? 'undefined',
    tags: result.tags ?? [], // Default to empty array if undefined
    workTime: result.workTime ?? 0,
    previewDescription: result.previewDescription ?? 'undefined',
    projectStartDate: new Date(result.projectStartDate ?? new Date()), // Assuming these are required
    projectEndDate: new Date(result.projectEndDate ?? new Date()),
    imgs: result.imgs ?? [], // Ensure these properties are included
    previewImgs: result.previewImgs ?? [],
  }));
}

export async function createProject(data: InsertProject): Promise<Project[]> {
  return db
    .insert(projects)
    .values(data)
    .onConflictDoNothing()
    .returning()
    .then((it) => toProject(it));
}

export async function createManyProjects(data: InsertProject[]): Promise<Project[]> {
    return db
      .insert(projects)
      .values(data)
      .onConflictDoNothing()
      .returning()
      .then((it) => toProject(it));
  }
  

export async function deleteAll() {
  try {
    await db.delete(projects);
    console.log('All records deleted');
  } catch (error) {
    console.error('Error deleting records:', error);
  }
}
