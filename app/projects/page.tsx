import ProjectsClient from '@/app/ui/projects/projects-client';
import { fetchProjectPreviews } from '@/app/lib/project/actions';
import { Suspense } from 'react';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  const initialProjects = await fetchProjectPreviews();
  const initialTag = searchParams.tag || 'all';

  return (
    <Suspense fallback="Jeszcze chwilka">
      <ProjectsClient
        initialProjects={initialProjects}
        initialTag={initialTag}
      />
    </Suspense>
  );
}
