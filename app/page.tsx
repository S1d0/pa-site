import About from './ui/home/about/about';
import Contact from './ui/home/contact/contact';
import Hero from './ui/home/hero';
import Showcase from './ui/home/showcase/showcase';
import Testimonials from './ui/home/testimonials/testimonials';
import Navbar from './ui/navbar/navbar';
import { RevenueChartSkeleton } from './ui/skeletons';

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
