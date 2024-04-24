import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

export default function Page() {
  const imageUrl = '/hero-desktop1.png';
  const title = 'AAAAAAAAAA';
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-2 px-8">
      <Card
        className="relative col-span-12 h-auto cursor-pointer sm:col-span-6"
        isBlurred
      >
        <CardBody className="absolute z-10">
          <div className="flex flex-col items-center justify-center h-96">
            <p className="text-tiny font-bold uppercase text-white/60">
              What to watch
            </p>
            <h4 className="text-large font-medium text-white">
              Stream the Acme event
            </h4>
          </div>
        </CardBody>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full scale-100 transform object-cover brightness-50 transition-transform duration-300 hover:scale-110"
          src="/hero-desktop1.png"
        />
      </Card>
    </div>
  );
}
