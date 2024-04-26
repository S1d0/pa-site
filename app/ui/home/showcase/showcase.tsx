'use client';

import ImageContainer from '../imgcontainer';
import { useState } from 'react';
import clsx from 'clsx';
import ShowcaseDetails from './showcase-details';
import { IToggle } from '@/app/lib/definitions';
import ShowcaseMenuNav from './showcase-nav';
import { homeShowcaseDetails, flatShowcaseDetails, saloonShowcaseDetails, bathShowcaseDetails, kitchenShowcaseDetails } from '../placeholder';

export default function Showcase() {
  const [selected, setSelected] = useState('');

  const toggleSelected: IToggle<string> = (key: string) => {
    selected != key ? setSelected(key) : setSelected('');
  };

  return (
    <section id="showcase" className="relative m-2 px-2 sm:my-16 sm:px-12">
      <div className="flex flex-col">
        {/* Header and Navigation */}
        <div className="flex flex-col items-center">
          <h1 className="flex py-4 text-2xl font-bold text-stone-800 drop-shadow-2xl sm:flex md:text-5xl">
            Poznaj nasze realizacje
          </h1>
          <ShowcaseMenuNav navItems={[]} toggleSelected={toggleSelected}/>
        </div>

        {/* Gallery preview */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {/* Home */}
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'home' ? 'col-span-full' : 'sm:col-span-3',
              selected !== 'home' && selected !== '' && 'hidden',
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg"
              onClick={() => toggleSelected('home')}
            >
              <ImageContainer
                desc="- projekt arch. Emili Zajkowskiej"
                title="Dom"
                href="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            {/* Container for showcase details */}
            <div className={clsx(selected === 'home' ? 'flex' : 'hidden')}>
              <ShowcaseDetails {...homeShowcaseDetails} />
            </div>
          </div>

          {/* Flat */}
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'flat' ? 'col-span-full' : 'sm:col-span-3',
              selected !== 'flat' && selected !== '' && 'hidden',
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg"
              onClick={() => toggleSelected('flat')}
            >
              <ImageContainer
                desc="- projekt arch. Patrycji Zajkowskiej"
                title="Mieszkanie"
                href="https://images.pexels.com/photos/7015153/pexels-photo-7015153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className={clsx(selected === 'flat' ? 'flex' : 'hidden')}>
              <ShowcaseDetails {...flatShowcaseDetails} />
            </div>
          </div>

          {/* Saloon */}
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'saloon' ? 'col-span-full' : 'sm:col-span-2',
              selected !== 'saloon' && selected !== '' && 'hidden',
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg"
              onClick={() => toggleSelected('saloon')}
            >
              <ImageContainer
                title="Salon"
                desc="- projekt arch. Emili Zajkowskiej"
                href="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className={clsx(selected === 'saloon' ? 'flex' : 'hidden')}>
              <ShowcaseDetails {...saloonShowcaseDetails} />
            </div>
          </div>

          {/* Kitchen */}
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'kitchen' ? 'col-span-full' : 'sm:col-span-2',
              selected !== 'kitchen' && selected !== '' && 'hidden',
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg"
              onClick={() => toggleSelected('kitchen')}
            >
              <ImageContainer
                title="Kuchnia"
                desc="- projekt arch. Emili Zajkowskiej"
                href="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className={clsx(selected === 'kitchen' ? 'flex' : 'hidden')}>
              <ShowcaseDetails {...kitchenShowcaseDetails} />
            </div>
          </div>

          {/* Bath */}
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'bath' ? 'col-span-full' : 'sm:col-span-2',
              selected !== 'bath' && selected !== '' && 'hidden',
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg"
              onClick={() => toggleSelected('bath')}
            >
              <ImageContainer
                title="Łazienka"
                desc="- projekt arch. Emili Zajkowskiej"
                href="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className={clsx(selected === 'bath' ? 'flex' : 'hidden')}>
              <ShowcaseDetails {...bathShowcaseDetails} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
