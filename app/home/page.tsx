import Image from 'next/image';
import Hero from '../ui/home/hero';
import Navbar from '../ui/navbar/navbar';
import Showcase from '../ui/home/showcase';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
    </>
  );
}
