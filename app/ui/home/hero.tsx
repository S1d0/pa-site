import Image from 'next/image';
import NavLinks from '../navlinks';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen w-full relative">
     <Image
        src="/hero-desktop1.png"
        height={1000}
        width={1880}
        quality={100}
        alt="Wykończenie"
        className="absolute left-0 top-0 h-screen w-full overflow-hidden object-cover brightness-50"
      />
      <div className="absolute top-0 flex flex-col h-full w-full justify-center text-white">
        <div className="max-w-6xl p-4 md:left-20">
          <h1 className='hidden sm:flex text-2xl md:text-5xl font-bold drop-shadow-2xl py-4'>P & A wykończenia na wysokim standardzie</h1>
          <p className='sm:visible max-w-xl drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            cumque possimus at ex perferendis. Sequi fugit ducimus eaque tempora
            rerum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <button className="block sm:w-52 rounded-lg bg-stone-200/60 font-bold px-4 py-2 text-stone-800 hover:bg-zinc-800/60 hover:text-white">
              Zadzwoń do nas
            </button>
            <Link href="/home#showcase" className="text-center block sm:w-52 rounded-lg bg-stone-200/60 font-bold px-4 py-2 text-stone-800 hover:bg-zinc-800/60 hover:text-white">
              Nasze realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
