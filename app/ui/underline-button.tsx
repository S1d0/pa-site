'use client';

import { UnderlineButtonProp } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function UnderlineButton(
  buttonProp: UnderlineButtonProp<string>,
) {

  return (
    <button
      key={buttonProp.name}
      onClick={() => {
        buttonProp.action(buttonProp.actionArg);
      }}
      className='group transition-all duration-300 ease-in-out rounded-lg'>
      <span className="bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat py-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]">
        {buttonProp.name}
      </span>
    </button>
  );
}
