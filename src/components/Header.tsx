import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            MAHESH BOOSA
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/MAHESHBOOSA" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/boosa-mahesh-796358296/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="mailto:maheshboosam@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;