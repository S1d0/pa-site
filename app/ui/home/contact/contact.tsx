'use client';

import { sendEmail } from '@/app/lib/actions';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/react';
import { useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { GiPartyPopper } from 'react-icons/gi';

const initialState = {
  message: '',
};

export interface SubmitBtnStateAction {
  (key: boolean): void;
}

interface SubmitBtnProps {
  stateAction: SubmitBtnStateAction;
}

function SubmitButton({ stateAction }: SubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={() => {
        stateAction(false);
        console.log('Click!');
      }}
      className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Wyślij
    </Button>
  );
}

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, initialState);
  const [showSubmitBtn, setShowSubmitBtn] = useState(true);

  const submitBtnStateAction = (state: boolean) => {
    setShowSubmitBtn(state);
  };

  return (
    <section id="contact" className="relative m-2 px-2 sm:my-16 sm:px-12">
      <div className="mt-8 flex flex-col items-center gap-12 sm:mt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm uppercase text-zinc-500 sm:text-medium">
            zrealizujmy Twoje marzenia
          </h2>
          <Divider className="my-2" />
          <h1 className="text-xl font-semibold text-zinc-800 sm:text-4xl">
            Napisz do nas o swoim projekcie remontu
          </h1>
        </div>
        {/* Form */}
        <div className="relative flex justify-center sm:w-2/5">
          {!showSubmitBtn && (
            <div className="flex w-full flex-col items-center gap-6">
              <GiPartyPopper className="text-center text-6xl text-indigo-600" />
              <h1 className="text-center text-xl font-bold text-zinc-800">
                Gratulujemy w zrobieniu pierwszego w realizacji swoich marzeń!
              </h1>
              <h2 className="text-center text-sm font-medium text-zinc-800">
                Wiadomość wysłana
              </h2>
              <Button
                onClick={() => {
                  submitBtnStateAction(true);
                }}
                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Wyślij kolejną wiadomość
              </Button>
            </div>
          )}
          {showSubmitBtn && (
            <form
              ref={ref}
              action={async (formData) => {
                formAction(formData);
                ref.current?.reset();
              }}
            >
              <p className="text-sm leading-6 text-gray-600">
                Krótki opis Twoich planow pozwoli nam zrozumieć zakres prac oraz
                możliwe terminy realizacji, nasz pracownik odzwoni do Ciebe by
                omówić dalszy proces realizacji.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Twoje imię
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Adres email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Numer telefonu
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      minLength={9}
                      maxLength={12}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="col-span-6 sm:col-span-full">
                  <label
                    htmlFor="projectDesc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Opisz swój projekt
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="projectDesc"
                      name="projectDesc"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Opisz nam chciałbyś zrealizować, gdzie znajduje się
                    inwestycja, jaki jest metraż, o jakich terminach myślisz.
                  </p>
                </div>
              </div>
              {!state && <div>Wiadomość Wysłana</div>}
              <div className="mt-6 flex w-full gap-x-6">
                <SubmitButton stateAction={submitBtnStateAction} />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
