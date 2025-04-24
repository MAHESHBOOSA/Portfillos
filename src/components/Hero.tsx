import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">MAHESH BOOSA</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A passionate Python Full-Stack Developer crafting beautiful and functional web experiences
        </p>
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
        >
          View My Work
          <ArrowDown className="ml-2" size={20} />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;