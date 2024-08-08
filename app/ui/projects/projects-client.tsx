'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import UnderlineButton from '@/app/ui/underline-button';
import { categories } from '@/app/ui/home/showcase/placeholders';
import { ProjectPreview } from '@/app/lib/project/definitions';
import { PortfolioTag } from '@/app/ui/home/showcase/placeholders';
import ImageContainer from '@/app/ui/home/imgcontainer';
import Link from 'next/link';

export default function ProjectsClient({
  initialProjects,
  initialTag,
}: {
  initialProjects: ProjectPreview[];
  initialTag: string;
}) {
  const [projects] = useState(initialProjects);
  const [tagSelected, setTagSelected] = useState(initialTag);
  const router = useRouter();

  const handleTagSelection = (tag: string) => {
    setTagSelected(tag);
    router.push(`/projects?tag=${tag}`, { scroll: false });
  };

  return (
    <main>
      <div className="container px-2 sm:mx-auto">
        <div className="flex flex-col gap-2 sm:gap-8">
          {/* Header  */}
          <div className="hidden flex-col gap-2 sm:mt-12 sm:flex">
            <h2 className="text-sm uppercase text-zinc-500">
              Poznaj nasze realizacje
            </h2>
            <h1 className="text-2xl font-bold tracking-wide text-zinc-800 sm:text-3xl">
              Projekt dopasowany do Ciebie. Dla nas{' '}
              <span className="text-indigo-500">szczegóły</span> mają znaczenie
            </h1>
          </div>
          <div className="mt-4 flex flex-col sm:mt-12 sm:gap-2">
            <h2 className="text-center text-sm uppercase text-zinc-500 sm:text-start">
              Wybierz kategorię
            </h2>
            <div className="flex justify-center gap-2 sm:justify-start sm:gap-8">
              {categories.map((category) => (
                <div
                  key={category.actionArg}
                  className={clsx('group text-sm font-medium', {
                    ['font-semibold text-indigo-500']:
                      tagSelected === category.actionArg,
                  })}
                >
                  <UnderlineButton
                    action={() => handleTagSelection(category.actionArg)}
                    name={category.name}
                    id={category.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 md:grid-cols-12">
            {projects.map((preview) => (
              <div
                className={clsx(
                  'group col-span-12 h-[300px] cursor-pointer justify-center transition-all duration-500 sm:col-span-4',
                  tagSelected === PortfolioTag.ALL ||
                    preview.tags.includes(tagSelected)
                    ? 'flex'
                    : 'hidden',
                )}
                key={preview.id}
              >
                <Link href={`/projects/${preview.id}`}>
                  <ImageContainer
                    title={preview.name}
                    desc={preview.description}
                    href={preview.img}
                    key={preview.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
