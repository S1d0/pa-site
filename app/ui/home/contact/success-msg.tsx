import { GiPartyPopper } from 'react-icons/gi';
import { FiPhoneCall } from 'react-icons/fi';
import { Button} from '@nextui-org/react';
import { IToggle } from '@/app/lib/definitions';

interface SuccessMsgBoxProps {
    toggleSuccessBox: IToggle<boolean>;
}

export default function SuccessMsgBox({toggleSuccessBox}: SuccessMsgBoxProps) {
  return (
    <>
      <GiPartyPopper className="text-center text-6xl text-indigo-600" />
      <h1 className="text-center text-xl font-bold text-zinc-800">
        Gratulujemy w zrobieniu pierwszego w realizacji swoich marzeń!
      </h1>
      <div className="flex items-center justify-center gap-2">
        <p className="text-sm leading-6 text-gray-800">
          Zadzwonimy do Ciebie w ciągu 24hs by omówić dalszy proces realizacji
        </p>
        <FiPhoneCall className="text-lg text-indigo-600 " />
      </div>
      <Button
        className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => toggleSuccessBox(false)}
      >
        Wyślij następną wiadomośc
      </Button>
    </>
  );
}
