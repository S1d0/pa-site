import About from './ui/home/about/about';
import Contact from './ui/home/contact/contact';
import Hero from './ui/home/hero';
import Showcase from './ui/home/showcase/showcase';
import Testimonials from './ui/home/testimonials/testimonials';
import SiteNavbar from '@/app/ui/navbar/navbar';

export default function Page() {
  return (
    <>
      <div className='relative'>
        <Hero />
        <Showcase />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
