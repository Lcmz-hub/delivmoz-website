import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Shield, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Entregamos com{' '}
                <span className="text-blue-600">rapidez</span> e{' '}
                <span className="text-orange-500">segurança</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A DelivMoz conecta você aos melhores serviços de entrega em Moçambique. 
                Comida, documentos, produtos - tudo na sua porta com apenas alguns cliques.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Entrega Rápida</h3>
                  <p className="text-sm text-gray-600">Em até 60 minutos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">100% Seguro</h3>
                  <p className="text-sm text-gray-600">Entregadores verificados</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cobertura Total</h3>
                  <p className="text-sm text-gray-600">Nampula e arredores</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/258862996574" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Fazer Pedido Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <a href="#como-funciona">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
                >
                Ver Como Funciona
              </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Entregas Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600">Parceiros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 inline-block mb-4">
                    <div className="bg-white rounded-full p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
                        <div className="text-white font-bold text-xl">DM</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Seu pedido, nossa prioridade</h3>
                  <p className="text-blue-100">
                    Conectando Nampula através de entregas rápidas e seguras
                  </p>
                </div>
                
                {/* Mock delivery tracking */}
                <div className="bg-white/10 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pedido #12345</span>
                    <span className="bg-green-500 text-xs px-2 py-1 rounded-full">Em trânsito</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Seu pedido está a caminho!</span>
                  </div>
                  <div className="text-xs text-blue-100">
                    Tempo estimado: 25 minutos
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
              <Clock className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

