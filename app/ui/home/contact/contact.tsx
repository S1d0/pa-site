'use client';

import { Divider } from '@nextui-org/divider';
import { useState } from 'react';
import ContactForm from './contact-form';
import clsx from 'clsx';
import SuccessMsgBox from './success-msg';
import { IToggle } from '@/app/lib/definitions';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const setShowSuccessBox: IToggle<boolean> = (key: boolean) => {
    setShowSuccess(key);
  };

  return (
    <section id="contact" className="relative m-2 px-2">
      <div className="mt-2 flex flex-col items-center gap-4 sm:mt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm uppercase text-zinc-500 sm:text-medium">
            zrealizujmy Twoje marzenia
          </h2>
          <Divider className="my-2" />
          <h1 className="text-xl font-semibold text-zinc-800 sm:text-4xl">
            Napisz nam o Twoim projekcie remontu
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={clsx(
              showSuccess
                ? 'flex w-full flex-col  items-center gap-4'
                : 'hidden',
            )}
          >
            <SuccessMsgBox toggleSuccessBox={setShowSuccessBox} />
          </div>
          <div className={clsx(showSuccess ? 'hidden' : 'flex')}>
            <ContactForm toggleSuccessBox={setShowSuccessBox} />
          </div>
        </div>
      </div>
    </section>
  );
}
