import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  text,
  serial,
  integer,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';
 
// export const projectTable = pgTable(
//   'projects',
//   {
//     id: uuid('id').primaryKey().defaultRandom(),
//     name: text('name').notNull(),
//     email: text('email').notNull(),
//     image: text('image').notNull(),
//     createdAt: timestamp('createdAt').defaultNow().notNull(),
//     areaInfo: text('areaInfo'),
//     description: text('description').notNull(),
//     place: text('place'),
//     designer: text('designer'),
//     tags: text('tags')
//     .array()
//     .notNull()
//     .default(sql`'{}'::text[]`),
//     workTime: smallint('worktime'),
//     projectStartDate: timestamp('projectStartDate'),
//     projectEndDate: timestamp('projectEndDate'),
//     imgs: text('imgs')
//     .array()
//     .notNull()
//     .default(sql`'{}'::text[]`),
//     previewImgs: text('previewImgs')
//     .array()
//     .notNull()
//     .default(sql`'{}'::text[]`),
//     previewDescription: text('previewDescription'),  
// }
// );

// export type InsertUser = typeof projectTable.$inferInsert;
// export type SelectUser = typeof projectTable.$inferSelect;

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
