import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { createManyProjects, deleteAll } from '@/database/queries';
import { InsertProject } from '@/database/schema';
import path from 'path';

const readJsonFromFile = (): InsertProject[] => {
  try {
    const filePath = path.join(process.cwd(), 'scripts/projects.json');
    const fileContent = readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent).map((item: any) => ({
        ...item,
        projectStartDate: new Date(item.projectStartDate),
        projectEndDate: new Date(item.projectEndDate),
    }));
  } catch (error) {
    console.error('Error reading from file:', error);
    throw new Error('Failed to read or parse JSON file');
  }
};

export async function POST() {
  console.log("==============================   MIGRATION BEGINS   ==============================")   
  const newProjects: InsertProject[] = readJsonFromFile();
  try {
    await deleteAll();
    const result = await createManyProjects(newProjects);
    console.log("Created projects: ", result)
    console.log("==============================   MIGRATION ENDS   ==============================")
    return NextResponse.json(
      { message: 'Migration successful!', project: result },
      { status: 200 },
    );
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { error: 'Migration failed', details: error.message },
      { status: 500 },
    );
  }
}
