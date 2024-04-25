import Hero from '../ui/home/hero';
import Navbar from '../ui/navbar/navbar';
import Showcase from '../ui/home/showcase/showcase';
import About from '../ui/home/about/about';
import Testimonials from '../ui/home/testimonials/testimonials';
import Contact from '../ui/home/contact/contact';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
} 
