import { IToggle } from '@/app/lib/definitions';
import { Button, ButtonGroup } from '@nextui-org/react';

export type NavItem = {
  name: string;
  id: string;
};

const navItems: NavItem[] = [
  {
    name: 'Dom',
    id: 'home',
  },
  {
    name: 'Mieszkanie',
    id: 'flat',
  },
  {
    name: 'Salon',
    id: 'saloon',
  },
  {
    name: 'Łazienka',
    id: 'bath',
  },
  {
    name: 'Kuchnia',
    id: 'kitchen',
  },
];

interface ShowcaseMenuNavProps {
  toggleSelected: IToggle<string>;
  navItems: NavItem[];
}

export default function ShowcaseMenuNav({toggleSelected}: ShowcaseMenuNavProps) {
  return (
    <div className="my-4 hidden gap-4 sm:flex">
      {navItems.map((item) => {
        return (
          <Button
          key={item.id}
          radius="sm"
          variant="flat"
          className=" font-bold shadow-lg hover:bg-zinc-800 hover:text-stone-50 w-36"
          onClick={() => toggleSelected(item.id)}
        >
          {item.name}
        </Button>
        );
      })}
    </div>
  );
}
