CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"mainImage`" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"areaInfo" text,
	"description" text NOT NULL,
	"place" text,
	"designer" text,
	"tags" text[] NOT NULL,
	"worktime" integer,
	"projectStartDate" timestamp,
	"projectEndDate" timestamp,
	"imgs" text[] NOT NULL,
	"previewImgs" text[] NOT NULL,
	"previewDescription" text
);
