'use client';

import { Divider } from '@nextui-org/divider';
import { useState } from 'react';
import ContactForm from './contact-form';
import clsx from 'clsx';
import SuccessMsgBox from './success-msg';
import { IToggle } from '@/app/lib/definitions';
import SectionHeader from "@/app/ui/section-header";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const setShowSuccessBox: IToggle<boolean> = (key: boolean) => {
    setShowSuccess(key);
  };
  const title = "Napisz nam o Twoim projekcie remontu"
  const desc = "zrealizujmy Twoje marzenia"
  return (
    <section id="contact" className="relative m-2 px-2">
      <div className="mt-2 flex flex-col items-center gap-4 sm:mt-12 sm:gap-16">
        <SectionHeader title={title} description={desc} />
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
