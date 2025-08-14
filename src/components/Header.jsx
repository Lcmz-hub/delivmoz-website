import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+258 876 613 277</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contacto@delivmoz.co.mz</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Entregas rápidas e seguras em Moçambique</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="DelivMoz Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Serviços
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              Como Funciona
            </a>
            <a href="#coverage" className="text-gray-700 hover:text-blue-600 transition-colors">
              Cobertura
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre Nós
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/258851516380" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Fazer Pedido
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#coverage"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cobertura
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Fazer Pedido
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

