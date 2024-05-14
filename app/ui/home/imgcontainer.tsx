import { ImageDesc } from '@/app/lib/definitions';
import {Image} from "@nextui-org/react";

export default function ImageContainer(desc: ImageDesc) {
  return (
    <div className="group rounded-lg cursor-pointer">
      <Image
        className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
        src={desc.href}
        alt="gallery-photo"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
        <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
          {desc.title}
        </h2>
        <p
          className="block text-center  text-base font-bold text-stone-200 sm:text-xl
        "
        >
        {desc.desc}
        </p>
      </div>
    </div>
  );
}
