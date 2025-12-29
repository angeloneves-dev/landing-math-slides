import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Samples } from './components/Samples';
import { Curriculum } from './components/Curriculum';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow">
        <Hero />
        <Features />
        <Samples />
        <Curriculum />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;