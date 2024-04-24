import Hero from '../ui/home/hero';
import Navbar from '../ui/navbar/navbar';
import Showcase from '../ui/home/showcase/showcase';
import About from '../ui/home/about/about';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
    </>
  );
}
