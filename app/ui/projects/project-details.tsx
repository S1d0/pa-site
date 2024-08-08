'use client';

import { Image } from '@nextui-org/react';
import UnderlineLink from '@/app/ui/underlined-link';
import { IoArrowRedoSharp } from 'react-icons/io5';
import { Project } from '@/app/lib/project/definitions';
import { useState } from 'react';
import clsx from 'clsx';
import ProjectGallery from './project-gallery';

export default function ProjectDetails({ project }: { project: Project }) {
  const [hideGallery, setHideGallery] = useState(true);
  const workTime = (time: number) => {
    return time === 1 ? time + 'dzień' : time + 'dni';
  };

  return (
    <main>
      <div className="container mx-auto px-2">
        <div className="flex flex-col">
          <section id="main" className={clsx({ hidden: !hideGallery })}>
            <div className="mb:24 mt-8 flex-col gap-2 sm:mb-12 sm:mt-12 sm:flex">
              <h2 className="text-sm uppercase text-zinc-500">
                {project.designer}
              </h2>
              <h1 className="text-xl font-bold tracking-wide text-zinc-800 sm:text-2xl">
                {project.name}. Zrealizowaliśmy go w{' '}
                <span className="text-indigo-500">
                  {workTime(project.workTime)}
                </span>
                .
              </h1>
            </div>
            <div className="relative mt-4 flex flex-col gap-2 sm:flex-row">
              <div className="flex-col sm:sticky sm:top-1/3 sm:flex sm:h-96 sm:w-1/3 sm:items-center sm:justify-center sm:gap-4 sm:px-8">
                <div className="flex flex-col gap-4">
                  <h1 className="hidden text-2xl font-bold sm:block sm:text-4xl">
                    {project.name}
                  </h1>
                  <p className="tracking-wide sm:tracking-wider">
                    {project.description}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Powierzchnia inwestycji:&nbsp;
                    </span>
                    {project.areaInfo}
                  </p>
                  <p className="hidden sm:flex">
                    <span className="font-semibold">
                      Czas realizacji: &nbsp;
                    </span>
                    {workTime(project.workTime)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:w-2/3">
                {project.imgs.map((imgUrl, index) => {
                  return (
                    <div
                      className="courso flex items-center justify-center align-middle"
                      key={index}
                    >
                      <Image
                        removeWrapper
                        alt="Card background"
                        width={740}
                        height={740}
                        className="cursor-pointer items-center rounded-md object-cover hover:shadow-2xl sm:my-2 sm:shadow-xl"
                        src={imgUrl}
                        onClick={() => setHideGallery(!hideGallery)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="group mb-12 mt-4 flex-col items-center gap-2 sm:mb-36 sm:mt-24 sm:flex">
              <h1 className="text-center text-xl font-bold tracking-wide text-zinc-800 sm:text-2xl">
                <UnderlineLink href={'/projects'}>
                  <div className="flex gap-2">
                    <p>
                      Poznaj więcej naszych{' '}
                      <span className="group-hover:text-indigo-500">
                        realizacji
                      </span>
                    </p>
                    <IoArrowRedoSharp />
                  </div>
                </UnderlineLink>
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div>
        <ProjectGallery imgs={project.imgs}></ProjectGallery>
      </div>
    </main>
  );
}
