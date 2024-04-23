'use client';

import Link from 'next/link';
import ImageContainer from './ImgContainer';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import ShowcaseDetails from './showcase-details';
import { ShowcaseDetail } from '@/app/lib/definitions';

// Do zastąpienia
const homeShowcaseDetails: ShowcaseDetail = {
  projectInfo: "Projekt biura arch. Emilia Zajkowska & Friends",
  areaInfo: "150 m2",
  workTime: "4 miesiące",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, aliquam ad enim dolores labore iusto esse totam explicabo delectus incidunt, eos distinctio, obcaecati sapiente vitae rem placeat error animi repudiandae nihil voluptatem facilis blanditiis at ullam. Provident, mollitia ipsum corrupti, fuga tempore, perferendis nisi eaque sequi voluptate reiciendis ad.",
  href: "/home",
  imgUrls: [
    "https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
}

export default function Showcase() {
  const [selected, setSelected] = useState('');

  const toggleSelected = (key: string) => {
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
          <div className="mb-4 hidden gap-4 sm:flex">
            <Link
              href="#"
              className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
            >
              Dom
            </Link>
            <div className="p-2 text-stone-800">|</div>
            <Link
              href="#"
              className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
            >
              Mieszkanie
            </Link>
            <div className="p-2 text-stone-800">|</div>
            <Link
              href="#"
              className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
            >
              Salon
            </Link>
            <div className="p-2 text-stone-800">|</div>
            <Link
              href="#"
              className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
            >
              Kuchnia
            </Link>
            <div className="p-2 text-stone-800">|</div>
            <Link
              href="#"
              className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
            >
              Łazienka
            </Link>
          </div>
        </div>

        {/* Gallery preview */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          <div
            className={clsx(
              'flex flex-col gap-2',
              selected === 'home' ? 'col-span-full' : 'sm:col-span-3',
              selected !== 'home' && selected !== '' && 'hidden',
            )}
          >
            <div
              className={clsx('relative overflow-hidden rounded-lg')}
              onClick={() => toggleSelected('home')}
            >
              <ImageContainer
                desc="- projekt arch. Emili Zajkowskiej"
                title="Dom"
                href="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            {/* Container for showcase details */}
            <div className={clsx(
                            selected === 'home' ? 'flex' : 'hidden',
            )}>
              <ShowcaseDetails {...homeShowcaseDetails} />
            </div>
          </div>

          <div
            className={clsx(
              selected === 'flat'
                ? 'relative overflow-hidden sm:col-span-6'
                : 'relative overflow-hidden sm:col-span-3',
              selected !== 'flat' && selected !== '' && 'hidden',
            )}
            onClick={() => toggleSelected('flat')}
          >
            <ImageContainer
              desc="- projekt arch. Patrycji Zajkowskiej"
              title="Mieszkanie"
              href="https://images.pexels.com/photos/7015153/pexels-photo-7015153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div
            className={clsx(
              selected === 'saloon'
                ? 'relative overflow-hidden sm:col-span-6'
                : 'relative overflow-hidden sm:col-span-2',
              selected !== 'saloon' && selected !== '' && 'hidden',
            )}
            onClick={() => toggleSelected('saloon')}
          >
            <ImageContainer
              title="Salon"
              desc="- projekt arch. Emili Zajkowskiej"
              href="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div
            className={clsx(
              selected === 'kitchen'
                ? 'relative overflow-hidden sm:col-span-6'
                : 'relative overflow-hidden sm:col-span-2',
              selected !== 'kitchen' && selected !== '' && 'hidden',
            )}
            onClick={() => toggleSelected('kitchen')}
          >
            <ImageContainer
              title="Kuchnia"
              desc="- projekt arch. Emili Zajkowskiej"
              href="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div
            className={clsx(
              selected === 'bath'
                ? 'relative overflow-hidden sm:col-span-6'
                : 'relative overflow-hidden sm:col-span-2',
              selected !== 'bath' && selected !== '' && 'hidden',
            )}
            onClick={() => toggleSelected('bath')}
          >
            <ImageContainer
              title="Łazienka"
              desc="- projekt arch. Emili Zajkowskiej"
              href="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
