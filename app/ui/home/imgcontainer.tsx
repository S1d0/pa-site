import { ImageDesc } from '@/app/lib/definitions';
import {Card, CardBody, Image} from "@nextui-org/react";
import clsx from "clsx";

export default function ImageContainer(desc: ImageDesc) {
  return (
      <Card
          key={desc.title}
          className={clsx('transition-all duration-500 group col-span-12 h-[300px] cursor-pointer justify-center sm:col-span-4',
          )}
      >
          <CardBody className="absolute z-10 items-center">
              <p className="text-tiny font-bold text-white/60 invisible group-hover:visible">
                  {desc.desc}
              </p>
              <h4 className="text-xl sm:text-2xl font-medium text-white">
                  {desc.title}
              </h4>
          </CardBody>
          <Image
              removeWrapper
              alt="Card background"
              className="z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110  group-hover:brightness-50 brightness-75"
              src={desc.href}
          />
      </Card>
  );
}
