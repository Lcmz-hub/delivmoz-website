"use client";

import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  Clock,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl inline-block mb-4">
                DelivMoz
              </div>
              <p className="text-gray-300 leading-relaxed">
                Conectando pessoas e negócios através de entregas rápidas e seguras em Moçambique.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#coverage" className="text-gray-300 hover:text-white transition-colors">Cobertura</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Entrega de Comida</li>
              <li className="text-gray-300">Entrega de Documentos</li>
              <li className="text-gray-300">Entrega de Produtos</li>
              <li className="text-gray-300">Entrega Express</li>
              <li className="text-gray-300">Pesquisa de Preço</li>
              <li className="text-gray-300">Compra de Produtos</li>
              <li className="text-gray-300">Serviços Personalizados</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+258 876 613 277</p>
                  <p className="text-gray-300">+258 85 151 6380</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">contacto@delivmoz.co.mz</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Nampula, Moçambique</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24 horas por dia</p>
                  <p className="text-gray-300">7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DelivMoz. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
