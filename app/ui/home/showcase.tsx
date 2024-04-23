import Link from 'next/link';

export default function Showcase() {
  return (
    <section id="showcase" className="relative m-2 px-2 sm:my-16 sm:px-12">
      <div className="m-auto flex flex-col items-center">
        <div>
          <h1 className="flex py-4 text-2xl font-bold text-stone-800 drop-shadow-2xl sm:flex md:text-5xl">
            Poznaj nasze realizacje
          </h1>
        </div>

        {/* Desktop Section */}
        <div className="mb-4 hidden gap-4 sm:flex">
          <Link
            href="#"
            className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
          >
            Dom
          </Link>
          <div className="p-2 text-stone-800">|</div>
          <Link
            href="#"
            className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
          >
            Mieszkanie
          </Link>
          <div className="p-2 text-stone-800">|</div>
          <Link
            href="#"
            className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
          >
            Salon
          </Link>
          <div className="p-2 text-stone-800">|</div>
          <Link
            href="#"
            className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
          >
            Kuchnia
          </Link>
          <div className="p-2 text-stone-800">|</div>
          <Link
            href="#"
            className="p-2 font-semibold leading-6 text-stone-800 hover:rounded-lg hover:bg-stone-800 hover:text-white"
          >
            Łazienka
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          <div className="group relative overflow-hidden rounded-lg sm:col-span-3 sm:cursor-pointer">
            <img
              className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
              <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
                Dom
              </h2>
              <p
                className="block text-center  text-base font-bold text-stone-200 sm:text-xl
              "
              >
                - projekt arch. Emili Zajkowskiej
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg sm:col-span-3 sm:cursor-pointer">
            <img
              className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
              <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
                Mieszkanie
              </h2>
              <p
                className="block text-center  text-base font-bold text-stone-200 sm:text-xl
              "
              >
                - projekt arch. Patrycji Zajkowskiej
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg sm:col-span-2 sm:cursor-pointer">
            <img
              className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
              <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
                Salon
              </h2>
              <p
                className="block text-center  text-base font-bold text-stone-200 sm:text-xl
              "
              >
                - projekt arch. Anny Zajkowskiej
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg sm:col-span-2 sm:cursor-pointer">
            <img
              className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
              <h2 className="sm:pb-4 text-xl font-bold text-stone-200 first-letter:text-center sm:text-4xl">
                Kuchnia
              </h2>
              <p
                className="block text-center  text-base font-bold text-stone-200 sm:text-xl
              "
              >
                - projekt arch. Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg sm:col-span-2 sm:cursor-pointer">
            <img
              className="easy-in h-96 w-full max-w-full rounded-lg object-cover object-center brightness-50 transition-transform duration-500 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle opacity-50 transition-opacity duration-200 ease-in group-hover:opacity-100">
              <h2 className="text-xl font-bold text-stone-200 first-letter:text-center sm:pb-4 sm:text-4xl">
                Łazienka
              </h2>
              <p
                className="block text-center  text-base font-bold text-stone-200 sm:text-xl
              "
              >
                - projekt arch. Lorem Ipsunm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
