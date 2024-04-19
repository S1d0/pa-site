import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './ui/navlinks';

export default function Page() {
  return (
    <main className="mx-auto flex h-full w-4/6 flex-col bg-zinc-900">
      {/* Main background with easier dark */}
      {/* tu będzie miejsce na logo */}
      <nav className="mb-24 flex w-2/5 justify-center self-center rounded-xl bg-zinc-800">
        <NavLinks />
      </nav>

      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="mb-4 flex gap-2">
          <Image
            src="/Pawel.png"
            width={64}
            height={94}
            className="rounded-lg object-cover ring-white/10"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Firma P & A{' '}
        </h1>
        <h2 className="py-2 text-xl text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          Od 15 lat satysfakcja klienta jest naszym sukcesem{' '}
        </h2>
        {/* Opis firmy */}
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Nasza firma specjalizuje się w realizacji projektów wykończeniowych na
          najwyższym poziomie. Współpraca z architektami jest kluczowa dla
          sukcesu naszych projektów. Dzięki temu,jesteśmy w stanie perfekcyjnie
          zrozumieć i zrealizować wizję naszych klientów. Nasze doświadczenie w
          branży sięga wielu lat i pozwala nam podejmować się nawet najbardziej
          wymagających projektów. Naszym celem jest zapewnienie kompleksowej
          obsługi, która przekracza oczekiwania klientów i sprawia, że cały
          proces jest łatwy i przyjemny.
        </p>

        {/* Social media links */}
        <div className="mt-6 flex gap-4">
          <a
            className="group -m-1 p-1"
            aria-label="Follow on Instagram"
            href="#"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
            >
              <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
              <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
            </svg>
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on Instagram"
            href="#"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
            >
              <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
              <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
            </svg>
          </a>
          <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="#">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              ></path>
            </svg>
          </a>
        </div>

        {/* Wybrane zdjęcia z realizacji */}
        <div className="relative mt-16 h-64 pb-6 sm:mb-24 sm:mt-24">
          <div className="-my-4 flex justify-center gap-5 py-4 sm:absolute sm:inset-x-0 sm:gap-12	">
            <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src="/landing-work-6.png"
                width={384}
                height={576}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src="/landing-work-2.png"
                width={384}
                height={576}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src="/landing-work-3.png"
                width={384}
                height={576}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src="/landing-work-5.png"
                width={384}
                height={576}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src="/landing-work-4.png"
                width={384}
                height={576}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:mb-36 sm:mt-36">
          <h2 className="mb-8 text-2xl text-zinc-900 dark:text-zinc-100 sm:mb-12 sm:text-4xl">
            Nasze najnowsze realizacje
          </h2>
          <div className="mb-24 rounded-lg bg-zinc-800 p-8">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="row-span-3 mx-auto flex">
                <Image
                  src="/last-work-1.png"
                  width={450}
                  height={600}
                  alt="Last work"
                  className="rounded-md object-cover"
                />
              </div>
              <div className="col-span-2 mx-auto">
                <Image
                  src="/landing-work-2.png"
                  width={300}
                  height={300}
                  alt="Last work"
                  className="rounded-md "
                />
              </div>
              <div className="col-span-2 mx-auto items-center">
                <Image
                  src="/last-work-3.png"
                  width={300}
                  height={300}
                  alt="Last work"
                  className="rounded-md object-cover"
                />
              </div>
              <div className="col-span-2 mx-auto items-center">
                <Image
                  src="/last-work-3.png"
                  width={300}
                  height={300}
                  alt="Last work"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
            <div className="bg mt-8 rounded-lg bg-zinc-900 py-8">
              <h3 className="mb-2 px-8 py-4 text-2xl text-zinc-900 dark:text-zinc-100 sm:mb-4 sm:text-4xl">
                Realizacja stylu art-deco łazienki oraz kuchni
              </h3>
              <p className="px-8 text-lg text-zinc-600 dark:text-zinc-400">
                <span className="font-bold">Czas realizacji: </span>5 tygodni
              </p>
              <p className="px-8 text-lg text-zinc-600 dark:text-zinc-400">
                <span className="font-bold">Powierzchnia inwestycji: </span>120
                m2
              </p>
              <p className="px-8 text-lg text-zinc-600 dark:text-zinc-400">
                <span className="font-bold">Opis:</span>
                <p>
                  Realizacja wykończenia łazienki i kuchni w stylu art-deco
                  rozpoczęła się od współpracy z doświadczonym biurem
                  architektów wnętrz. Po pierwszym spotkaniu omawiającym
                  preferencje estetyczne oraz funkcjonalne wymagania,
                  przystąpiono do projektowania.
                </p>
                <p className='mt-2'>
                  W łazience zdecydowano się na zastosowanie geometrycznych
                  wzorów płytek, które harmonizowały z eleganckimi dodatkami.
                  Blaty i podłogi zostały wyłożone marmurem, nadając
                  pomieszczeniu luksusowy wygląd. Współgrające z tymi elementami
                  złote akcenty dodawały wnętrzu subtelnej ekstrawagancji.
                </p>
                <p className='mt-2'>Kuchnia została zaprojektowana w duchu art-deco, łącząc
                funkcjonalność z estetyką. Blat z granitu o głębokim, ciemnym
                odcieniu kontrastował z mosiężnymi akcentami. Geometryczne wzory
                płytek na ścianach nadawały pomieszczeniu charakteru, a
                eleganckie lampy sufitowe o geometrycznych kształtach dopełniały
                całości.</p>
                
                <p className='mt-2'>
                Podczas realizacji obu projektów biuro architektów
                wnętrz aktywnie współpracowało z wykonawcami, dbając o każdy
                detal i zapewniając, że efekt końcowy był zgodny z oczekiwaniami
                klienta oraz idealnie odzwierciedlał unikalny styl art-deco.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
