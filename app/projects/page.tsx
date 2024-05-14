'use client';

import { useState } from 'react';
import UnderlineButton from '../ui/underline-button';
import clsx from 'clsx';
import { Card, CardBody, Image } from '@nextui-org/react';
import { Tooltip, Button } from '@nextui-org/react';

enum PortfolioTag {
  HOME = 'dom',
  FLAT = 'mieszkanie',
  BATHROOM = 'łazienka',
  KITCHEN = 'kuchnia',
  SALOON = 'salon',
  ALL = 'all',
}

const categories = [
  {
    name: 'dom',
    actionArg: 'house',
  },
  {
    name: 'mieszkanie',
    actionArg: 'flat',
  },
  {
    name: 'łazienka',
    actionArg: 'bathroom',
  },
  {
    name: 'kuchnia',
    actionArg: 'kitchen',
  },
  {
    name: 'wszystkie',
    actionArg: 'all',
  },
];

const projectPreviews = [
  {
    name: 'Dom 1',
    tag: 'house',
    shortDesc: '150 m2 - Warszawa',
    imgHref: '/portfolio/house/house1.jpg',
  },
  {
    name: 'Kuchnia 2',
    tag: 'kitchen',
    shortDesc: '15 m2 - Sokoły',
    imgHref: '/portfolio/kitchen/kitchen2.jpg',
  },
  {
    name: 'Dom 3',
    tag: 'house',
    shortDesc: '200 m2 - Ząbki',
    imgHref: '/portfolio/house/house3.jpg',
  },
  {
    name: 'Mieszkanie 1',
    tag: 'flat',
    shortDesc: '100 m2 - Białystok',
    imgHref: '/portfolio/flat/ap1.jpg',
  },
  {
    name: 'Mieszkanie 2',
    tag: 'flat',
    shortDesc: '80 m2 - Nieporęt',
    imgHref: '/portfolio/flat/ap2.jpg',
  },
  {
    name: 'Kuchnia 1',
    tag: 'kitchen',
    shortDesc: '20 m2 - Warszawa',
    imgHref: '/portfolio/kitchen/kitchen1.jpg',
  },

  {
    name: 'Łazienka 1',
    tag: 'bathroom',
    shortDesc: '15 m2 - Radomsk',
    imgHref: '/portfolio/bathroom/bathroom1.jpg',
  },
  {
    name: 'Dom 2',
    tag: 'house',
    shortDesc: '200 m2 - Ząbki',
    imgHref: '/portfolio/house/house6.jpg',
  },
];

export default function ProjectsPage() {
  const [tagSelected, setTagSelected] = useState("all");

  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 sm:gap-8">
          {/* Header  */}
          <div className="hidden flex-col gap-2 sm:mt-24 sm:flex">
            <h2 className="text-sm uppercase text-zinc-500">
              Poznaj nasze realizacje
            </h2>
            <h1 className="text-2xl font-bold tracking-wide text-zinc-800 sm:text-3xl">
              Projekt dopasowany do Ciebie. Dla nas{' '}
              <span className="text-indigo-500">szczegóły</span> mają znaczenie
            </h1>
          </div>

          {/* Category select*/}
          <div className="mt-4 flex flex-col gap-2 sm:mt-12">
            <h2 className="text-sm uppercase text-zinc-500">
              Wybierz kategorię
            </h2>
            <div className="flex gap-8">
              {categories.map((category) => {
                return (
                  <div
                    key={category.actionArg}
                    className={clsx('group text-sm font-medium', {
                      ['font-semibold text-indigo-500']:
                        tagSelected === category.actionArg,
                    })}
                  >
                    <UnderlineButton
                      action={setTagSelected}
                      actionArg={category.actionArg}
                      name={category.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preview */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 md:grid-cols-12">
            {projectPreviews.map((preview) => {
              return (
                <Card
                    key={preview.name}
                  className={clsx('transition-all duration-500 group col-span-12 h-[300px] cursor-pointer justify-center sm:col-span-4',
                      (tagSelected === PortfolioTag.ALL || tagSelected === preview.tag) ? "flex" : "hidden"
                  )}
                >
                  <CardBody className="absolute z-10 items-center">
                    <p className="text-tiny font-bold text-white/60">
                      {preview.shortDesc}
                    </p>
                    <h4 className="text-xl font-medium text-white">
                      {preview.name}
                    </h4>
                  </CardBody>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110  group-hover:brightness-50"
                    src={preview.imgHref}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
