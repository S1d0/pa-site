import { ImageDesc } from '@/app/lib/definitions';

// const images: ImageDesc = [
//   {
//     title: 'Dom 150 m2 - Hrubieszów',
//     desc: 'projekt arch. Emili Zajkowskie',
//     href: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
//   },
//   {
//     title: 'Mieszkanie 100 m2 - Hrubieszów',
//     desc: 'projekt arch. Emili Zajkowskie',
//     href: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
//   },
//   {
//     title: 'Salon - Hrubieszów',
//     desc: 'projekt arch. Emili Zajkowskie',
//     href: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
//   },
//   {
//     title: 'Kuchnia - Hrubieszów',
//     desc: 'projekt arch. Emili Zajkowskie',
//     href: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
//   },
//   {
//     title: 'Łazienka - Hrubieszów',
//     desc: 'projekt arch. Emili Zajkowskie',
//     href: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
//   },
// ];

export default function ImageContainer(desc: ImageDesc) {
  return (
    <div className="group rounded-lg cursor-pointer">
      <img
        className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
        src={desc.href}
        alt="gallery-photo"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
        <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
          {desc.title}
        </h2>
        <p
          className="block text-center  text-base font-bold text-stone-200 sm:text-xl
        "
        >
        {desc.desc}
        </p>
      </div>
    </div>
  );
}
