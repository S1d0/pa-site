import { db } from '@vercel/postgres';
import { projects,  } from '../lib/placeholder-data';

const client = await db.connect();

async function seedProjects() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT NOT NULL,
        created DATE NOT NULL,
        areaInfo TEXT NOT NULL;
        description TEXT NOT NULL;
        place TEXT NOT NULL;
        designer TEXT NOT NULL;
        tags TEXT[];
        workTime INT NOT NULL;
        projectStartDate DATE NOT NULL;
        projectEndDate DATE NOT NULL;
        imgs TEXT[] NOT NULL;
        previewImgs NOT NULL;
        previewDescription: TEXT NOT NULL;
      );
    `;

  const insertedProjects = await Promise.all(
    projects.map(async (project) => {
        // Convert arrays to Postgres array literal format
        const tagsArray = `{${project.tags.join(',')}}`;
        const imgsArray = `{${project.imgs.join(',')}}`;
        const previewImgsArray = `{${project.previewImgs.join(',')}}`;

      return client.sql`
        INSERT INTO projects (
            id,
            name,
            created,
            areaInfo,
            description,
            place,
            designer,
            tags,
            workTime,
            projectStartDate,
            projectEndDate,
            imgs,
            previewImgs,
            previewDescription
        ) VALUES (
            ${project.id},
            ${project.name},
            ${project.created},
            ${project.areaInfo},
            ${project.description},
            ${project.place},
            ${project.designer},
            ${tagsArray},
            ${project.workTime},
            ${project.projectStartDate},
            ${project.projectEndDate},
            ${imgsArray},
            ${client.sql.array(project.tags)},
            ${project.previewDescription }
        ON CONFLICT (id) DO NOTHING;
      `;
    })
);

  return insertedProjects;
}


export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedProjects();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }