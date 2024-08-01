import { pgTable, text, integer, timestamp, uuid } from 'drizzle-orm/pg-core';

export const projectsTable = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  mainImage: text('mainImage`').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  areaInfo: text('areaInfo'),
  description: text('description').notNull(),
  place: text('place'),
  designer: text('designer'),
  tags: text('tags').array().notNull().default(new Array()[0]),
  workTime: integer('worktime'),
  projectStartDate: timestamp('projectStartDate'),
  projectEndDate: timestamp('projectEndDate'),
  imgs: text('imgs').array().notNull().default(new Array()[0]),
  previewImgs: text('previewImgs').array().notNull().default(new Array()[0]), // Updated default value for text array
  previewDescription: text('previewDescription'),
});

export type InsertProject = typeof projectsTable.$inferInsert;
export type SelectProject = typeof projectsTable.$inferSelect;
