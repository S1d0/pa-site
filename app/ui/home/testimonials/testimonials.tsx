import { Divider } from '@nextui-org/divider';
import SingleTestimony from './single-testimony';
import { testimonials } from '../placeholder';
import clsx from 'clsx';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative m-2 px-2 sm:my-16 sm:px-12">
      <div className="mt-24 flex flex-col items-center gap-4 sm:mt-12 sm:gap-16">
        {/* Testimonial header */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm uppercase text-zinc-500 sm:text-medium">
            poznaj opinie naszych inwestorów
          </h2>
          <Divider className="my-2" />
          <h1 className="text-center text-xl font-semibold text-zinc-800 sm:text-4xl">
            Zrelizowaliśmy projekty dla niesamowitych ludzi
          </h1>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col w-full">
          {/* List */}
          <div className="relative m-auto grid grid-cols-12 gap-8 ">
            {testimonials.map((testimonial, i) => {
              return (
                <div
                key={"testimony_"+i}
                  className={clsx(
                    'relative col-span-12 overflow-hidden px-6 py-12 shadow-2xl sm:col-span-4 sm:py-32 lg:px-8',
                    { ['hidden']: i > 2 },
                  )}
                >
                  <SingleTestimony {...testimonial} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
