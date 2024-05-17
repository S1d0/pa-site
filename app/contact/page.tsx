import Contact from '../ui/home/contact/contact';
import { Divider } from '@nextui-org/react';
import { FaPhoneAlt } from 'react-icons/fa';
import PhoneButton from '../ui/phonebutton';

const phone = process.env.CONTACT_PHONE;

export default function ContactPage() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 sm:gap-8">
          {/*  */}
          <div className="mt-8 hidden flex-col gap-2 sm:my-8 sm:flex">
            <h2 className="text-center text-sm uppercase tracking-wide text-zinc-500 sm:text-medium	">
              Masz już pomysł?
            </h2>
            <h1 className="text-center text-2xl font-semibold tracking-wide text-zinc-800 sm:text-6xl">
              Zaplanuj z nami swój{' '}
              <span className="text-indigo-500">następny</span> projekt
            </h1>
          </div>
          <div className="flex">
            <div className="hidden w-1/3 flex-col items-center justify-center gap-8 py-2 sm:flex">
              <div className="flex-col items-center justify-center gap-4 sm:flex">
                <p className="px-4 py-4  text-lg leading-9 tracking-wide">
                  Planujesz wykończenie mieszkania? Zastanawiasz się ile będzie
                  kosztował Cię remont?
                </p>
                <p className="px-4  text-lg leading-9 tracking-wide">
                  Daj nam znać co planujesz a my zajmiemy się kalkulacją
                  budżetu. Sprawdź ile będzie kosztowało wykończenie twojego
                  wnętrza obejmujące projekt, produkty oraz realizację.
                </p>
              </div>
              <div className="hidden flex-col items-center gap-4 sm:flex mb:24">
                <h2 className="text-2xl">ZADZWOŃ DO NAS</h2>
                <div className="flex items-center align-middle gap-2">
                  <span>
                    <FaPhoneAlt className="text-2xl text-indigo-500" />
                  </span>
                  <p className="text-lg font-medium">{phone}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center sm:w-2/3">
              <Contact />
              <div className="flex w-full flex-col items-center justify-center sm:hidden">
                <Divider className="my-2" />
                <h2>LUB</h2>
                <Divider className="my-4" />
                <div className="w-full  px-4 ">
                  <PhoneButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
