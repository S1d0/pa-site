import { TestimonyInfo } from '@/app/lib/definitions';
import { User } from '@nextui-org/react';

export default function SingleTestimony({ ...info }: TestimonyInfo) {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[100%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="m-auto flex max-w-2xl lg:max-w-4xl">
        <figure className="mt-10 h-48">
          <blockquote className="text-center text-xl font-semibold leading-8 text-zinc-800 sm:text-lg sm:leading-9">
            <p className="line-clamp-3 hover:line-clamp-none">
              {info.description}
            </p>
          </blockquote>
          <div>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <User
                  name={info.author}
                  description={info.authorDesc}
                  avatarProps={{
                    src: info.avatarHref,
                  }}
                />
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
