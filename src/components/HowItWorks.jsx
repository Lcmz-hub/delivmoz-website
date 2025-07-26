import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  MapPin, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Faça seu Pedido',
      description: 'Entre em contacto connosco via WhatsApp, telefone ou formulário online',
      details: [
        'Descreva o que precisa entregar',
        'Informe endereços de origem e destino',
        'Escolha o tipo de serviço'
      ],
      color: 'bg-blue-600'
    },
    {
      icon: MapPin,
      title: 'Confirmamos os Detalhes',
      description: 'Nossa equipe confirma todas as informações e calcula o preço',
      details: [
        'Verificamos endereços',
        'Calculamos tempo e preço',
        'Confirmamos disponibilidade'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: Truck,
      title: 'Entregador a Caminho',
      description: 'Um entregador qualificado coleta e entrega seu pedido',
      details: [
        'Entregador vai ao local de origem',
        'Coleta o item com segurança',
        'Segue para o destino'
      ],
      color: 'bg-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Entrega Concluída',
      description: 'Receba seu pedido e confirme a entrega com total segurança',
      details: [
        'Entrega no endereço correto',
        'Confirmação de recebimento',
        'Pagamento processado'
      ],
      color: 'bg-purple-600'
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e transparente para garantir que seu pedido chegue com segurança
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16"></div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-gradient-to-r from-blue-200 to-orange-200 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Details */}
                    <ul className="space-y-2 text-sm text-gray-500">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Rastreamento em Tempo Real</h3>
            <p className="text-gray-600 text-sm">
              Acompanhe seu pedido desde a coleta até a entrega
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <CheckCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Garantia de Entrega</h3>
            <p className="text-gray-600 text-sm">
              Compromisso com prazos e segurança do seu pedido
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Suporte 24/7</h3>
            <p className="text-gray-600 text-sm">
              Nossa equipe está sempre disponível para ajudar
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para fazer seu primeiro pedido?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contacto connosco agora e experimente nosso serviço
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/258862996574" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Fazer Pedido Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>

              <a href="https://wa.me/258862996574" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Falar no WhatsApp
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

