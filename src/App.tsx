import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import ThisWeek from './components/ThisWeek';
import Verse from './components/Verse';
import Activities from './components/Activities';
import Birthdays from './components/Birthdays';
import Structure from './components/Structure';
import Market from './components/Market';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <ThisWeek />
        <Verse />
        <Activities />
        <Birthdays />
        <Structure />
        <Market />
      </main>
      <Footer />
    </div>
  );
}
