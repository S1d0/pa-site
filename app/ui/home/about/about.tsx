import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button, Image, Link } from '@nextui-org/react';
import { LiaPencilRulerSolid } from 'react-icons/lia';
import { GiPaintBucket } from 'react-icons/gi';
import { BsLampFill } from 'react-icons/bs';
import { Divider } from '@nextui-org/react';

export default function About() {
  return (
    <section id="about" className="relative m-2 px-2 sm:my-16 sm:px-12">
      <div className="flex flex-col items-center gap-12 mt-8 sm:mt-12 sm:gap-16">
        {/* Filozofia */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm sm:text-medium uppercase text-zinc-500">
            nasza filozofia realizacji wykończeń
          </h2>
          <Divider className="my-2" />
          <h1 className="text-xl sm:text-4xl font-semibold text-zinc-800">
            Szczegóły mają dla nas znaczenie
          </h1>
        </div>
        <div className="container">
          <div className="m-auto grid grid-cols-12 gap-8">
            <Card className="col-span-12 h-[600px] sm:col-span-4">
              <div className="absolute top-0 z-10 flex-col items-center">
                <CardHeader className="flex flex-col sm:py-12">
                  <LiaPencilRulerSolid
                    size={100}
                    className="mb-4 text-zinc-800/60"
                  />
                  <h4 className="text-2xl font-semibold text-zinc-800">
                    Wizja i Projekt
                  </h4>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center">
                  <div className="w-3/4 py-2">
                    <p className="text-center text-lg font-medium tracking-wider text-zinc-800">
                      W każdym projekcie domu, mieszkania, czy apartamentu
                      staram się dostrzec we wnętrzu jego potencjał, znaleźć w
                      nim coś wyjątkowego. Podczas przygotowywania koncepcji
                      doradzam i proponuje rozwiązania, a czasem namawiam do
                      podjęcia odważnych decyzji projektowych.
                    </p>
                  </div>
                </CardBody>
              </div>

              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover opacity-50"
                src="/about/projekt2.webp"
              />
            </Card>
            <Card className="col-span-12 h-[600px] sm:col-span-4">
              <div className="absolute top-0 z-10 flex-col items-center">
                <CardHeader className="flex flex-col sm:py-12">
                  <GiPaintBucket size={100} className="mb-4 text-zinc-800/60" />
                  <h4 className="text-2xl font-semibold text-zinc-800">
                    Najlepsze Materiały
                  </h4>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center">
                  <div className="w-3/4 py-2">
                    <p className="text-center text-lg font-medium tracking-wider text-zinc-800">
                      W swoich projektach stawiam na ponadczasowe rozwiązania.
                      Jakość użytych materiałów wpływa na wykończenie i finalny
                      obraz realizacji. Materiały takie jak drewno, kamień,
                      szkło czy metal uszlachetniają wnętrze. Nadają mu
                      wyjątkowy charakter, dają poczucie piękna, tworzą
                      przyjazną przestrzeń do życia.
                    </p>
                  </div>
                </CardBody>
              </div>

              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover opacity-50"
                src="/about/projekt2.webp"
              />
            </Card>
            <Card className="col-span-12 h-[600px] sm:col-span-4">
              <div className="absolute top-0 z-10 flex-col items-center">
                <CardHeader className="flex flex-col sm:py-12">
                  <BsLampFill size={100} className="mb-4 text-zinc-800/60" />
                  <h4 className="text-2xl font-semibold text-zinc-800">
                    Meble i Dekoracje
                  </h4>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center">
                  <div className="w-3/4 py-2">
                    <p className="text-center text-lg font-medium tracking-wider text-zinc-800">
                      Bardzo często w swoich realizacjach, tworzę unikatowe
                      meble takie jak regały, szafki, stoły czy konsole. Łącze
                      elementy mebli i dekoracji ze sztuką, grafikami czy piękną
                      fotografią. Dzięki temu nawet proste formy wyglądają
                      ciekawie, a wnętrza stają się niepowtarzalne.
                    </p>
                  </div>
                </CardBody>
              </div>

              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover opacity-50"
                src="/about/projekt2.webp"
              />
            </Card>
          </div>
        </div>

        {/* Współpraca */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="sm:text-medium uppercase text-zinc-500">
            razem możemy więcej
          </h2>
          <Divider className="my-2" />
          <h1 className="text-xl sm:text-4xl font-semibold text-zinc-800">
            Współpracujemy z najlepszymi na rynku
          </h1>
        </div>
        <div className="container">
          <div className="m-auto grid grid-cols-12 gap-8">
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-lg">ARCHITEKT WNĘTRZ</p>
                  <p className="text-medium text-default-500">
                    Emilia Zajkowska
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  We wnętrzach szukam przestrzeni, nadaje jej funkcjonalny i
                  estetyczny wygląd, dopasowany do indywidualnych gustów i
                  potrzeb każdego inwestora.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="tracking-wider"
                >
                  Czytaj więcej
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-lg">Rewitalizacje przestrzeni</p>
                  <p className="text-medium text-default-500">
                    arch. Patrycja Zajkowska
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  We wnętrzach szukam przestrzeni, nadaje jej funkcjonalny i
                  estetyczny wygląd, dopasowany do indywidualnych gustów i
                  potrzeb każdego inwestora.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="tracking-wider"
                >
                  Czytaj więcej
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={50}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={50}
                />
                <div className="flex flex-col">
                  <p className="text-lg">Biuro Projektowe</p>
                  <p className="text-medium text-default-500">Anna Zajkowska</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  We wnętrzach szukam przestrzeni, nadaje jej funkcjonalny i
                  estetyczny wygląd, dopasowany do indywidualnych gustów i
                  potrzeb każdego inwestora.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="tracking-wider"
                >
                  Czytaj więcej
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={80}
                  radius="sm"
                  src="https://cdnmedia.mapei.com/images/librariesprovider24/default-album/logo-desktop-pl.png?sfvrsn=d2754575_0"
                  width={80}
                />
                <div className="flex flex-col">
                  <p className="text-lg">Mapeja</p>
                  <p className="text-medium text-default-500">Marek Andrzej</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  MAPEI jest jednym ze światowych liderów w produkcji
                  profesjonalnej chemii budowlanej. Oferujemy trwałe, wysokiej
                  jakości rozwiązania, przyjazne dla planety i dla ludzi.{' '}
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="tracking-wider"
                >
                  Czytaj więcej
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-lg">Doradztwo projektowe</p>
                  <p className="text-medium text-default-500">Wiesław Idźkowski</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                Możesz wybrać jedną z czterech strategii różniących się poziomem ryzyka i zakładanym czasem inwestycji. Zaproponujemy Ci wyłącznie te z nich, które będą zgodne z Twoim profilem inwestora.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="tracking-wider"
                >
                  Czytaj więcej
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}