import Hero from '../ui/home/hero';
import Navbar from '../ui/navbar/navbar';
import Showcase from '../ui/home/showcase/showcase';
import About from '../ui/home/about/about';
import Recensions from '../ui/home/testimonials/testimonials';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Recensions />
    </>
  );
} 
