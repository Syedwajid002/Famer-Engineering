import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center px-6">
      <h1 className="font-bold text-3xl md:text-4xl text-white mb-4">
        Welcome to <span className="text-indigo-400">OutStanding Dimensions</span>
      </h1>
      <h2 className="font-medium text-xl md:text-2xl text-gray-300 mb-8">
        Website Under Construction 🚧
      </h2>

      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
        <p className="text-gray-300 mb-4">Meanwhile, feel free to contact us:</p>
        <p className="text-white font-medium">
          📧 Email:
          <a href="mailto:faisaljameel@odc5.com" className="text-indigo-400 hover:underline ml-1">
            faisaljameel@odc5.com
          </a>
        </p>
        <p className="text-white font-medium mt-2">
          📞 Phone:
          <a href="tel:+966538209690" className="text-indigo-400 hover:underline ml-1">
            +966 53 820 9690
          </a>
        </p>
      </div>


      {/* <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer /> */}

    </div>
  );
}

export default App;