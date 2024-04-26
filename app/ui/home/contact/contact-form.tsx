import { sendEmail } from '@/app/lib/actions';
import { IToggle } from '@/app/lib/definitions';
import { Button } from '@nextui-org/react';
import { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import clsx from 'clsx';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={clsx(
        "flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        pending ? "bg-indigo-300 text-zinc-800" : "hover:bg-indigo-500"
      )}
    >
      {pending ? 'Wysyłanie...':'Wyślij'}
    </Button>

  );
}
interface ContactFormProps {
  toggleSuccessBox: IToggle<boolean>;
}

export default function ContactForm({toggleSuccessBox}: ContactFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, initialState);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        toggleSuccessBox(true)
        formAction(formData);
        ref.current?.reset();
      }}
    >
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
            Napisz w kilku słowach co chciałbyś zrealizować, gdzie znajduje się inwestycja, jaki
            jest metraż, o jakich terminach myślisz.
          </p>
        </div>
      </div>
      <div className="mt-6 flex w-full gap-x-6">
        <SubmitButton />
      </div>
    </form>
  );
}
