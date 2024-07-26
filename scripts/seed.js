const { db } = require('@vercel/postgres');
const {
  projects,
} = require('../app/lib/placeholder-data.js');

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
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
        imgs: TEXT[] NOT NULL;
        previewImgs: NOT NULL;
        previewDescription: TEXT NOT NULL;
      );
    `;

    console.log(`Created "projects" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      projects.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} projects`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedInvoices(client);
  await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
