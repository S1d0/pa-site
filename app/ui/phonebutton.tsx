import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';

const phone = process.env.CONTACT_PHONE;

export default function PhoneButton() {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className="w-full rounded-lg bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-400">
          Zadzwoń do nas
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col items-center justify-center px-4 py-2 ">
          <div className="text-medium font-bold">
            Porozmawiajmy o Twoich planach
          </div>
          <div className="text-small">
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
