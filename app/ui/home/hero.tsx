import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const backdrops = ['opaque', 'blur', 'transparent'];
const num = '+48 606 722 821';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/hero-desktop1.png"
        height={1000}
        width={1880}
        quality={100}
        alt="Wykończenie"
        className="absolute left-0 top-0 h-screen w-full overflow-hidden object-cover brightness-50"
      />
      <div className="absolute top-0 flex h-full w-full flex-col justify-center text-stone-200">
        <div className="max-w-6xl p-4 md:left-20">
          <h1 className="hidden py-4 text-2xl font-bold drop-shadow-2xl sm:flex md:text-4xl">
            Satysfakcja klienta moim sukcesem.
          </h1>
          <p className="max-w-xl py-2 text-xl drop-shadow-2xl sm:visible">
            Zajmujemy się realizacją projektów wykończeniowych już 15 lat.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className='flex-1 sm:flex-grow-0'>
              <Popover placement="bottom" showArrow={true} backdrop="blur">
                <PopoverTrigger>
                  <Button className="w-full rounded-lg bg-stone-200/60 px-4 py-2 text-center font-bold text-stone-800 hover:bg-zinc-800/60 hover:text-white sm:w-52">
                    Zadzwoń do nas
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-8 py-4">
                    <div className="text-medium font-bold">
                      Powiedz nam o swoich planach!
                    </div>
                    <p className='hidden sm:flex'>{num}</p>
                    <Link className='sm:hidden font-semibold' href="tel+48606722821">{num}</Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Link
              href="/home#showcase"
              className="block rounded-lg bg-stone-200/60 px-4 py-2 text-center font-bold text-stone-800 hover:bg-zinc-800/60 hover:text-white sm:w-52"
            >
              Nasze realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
