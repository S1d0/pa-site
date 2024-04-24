import { ShowcaseDetail } from '@/app/lib/definitions';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import Link from 'next/link';

export default function ShowcaseDetails(detail: ShowcaseDetail) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
      <div className="m-auto flex flex-col gap-4 rounded-lg p-12 sm:col-span-2">
        <p className="text-2xl font-bold">Projekt: {detail.projectInfo}</p>
        <p className="text-xl font-bold">
          Powierzchnia realizacji: {detail.areaInfo}
        </p>
        <p className="text-xl font-bold">Czas realizacji: {detail.workTime}</p>
        <p className="text-lg font-semibold">
          Opis: <br />
          {detail.description}
        </p>
        <Button
          size="lg"
          radius="sm"
          variant="flat"
          className="font-bold shadow-lg hover:bg-zinc-800 hover:text-stone-50"
        >
          Czytaj Dalej
        </Button>
      </div>
      {detail.imgUrls.map((url, i) => {
        return (
          <div
            key={"showcase_"+i}
            className={clsx(
              i % 2 ? 'sm:col-span-2 sm:row-span-2' : 'sm:col-span-2',
            )}
          >
            <img
              className="h-full w-full rounded-lg object-cover"
              src={url}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
