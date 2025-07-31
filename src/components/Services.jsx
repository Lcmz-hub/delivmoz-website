import { Button } from '@/components/ui/button'
import { 
  UtensilsCrossed, 
  FileText, 
  Package, 
  Zap, 
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Entrega de Comida',
      description: 'Dos melhores restaurantes de Nampula directo para sua casa',
      features: ['Comida quente', 'Restaurantes verificados', 'Cardápio variado'],
      price: 'A partir de 120MT',
      time: '30-45 min',
      color: 'bg-orange-500'
    },
    {
      icon: FileText,
      title: 'Entrega de Documentos',
      description: 'Serviços corporativos e pessoais com máxima segurança',
      features: ['Documentos seguros', 'Entrega expressa', 'Comprovante digital'],
      price: 'A partir de 130MT',
      time: '15-30 min',
      color: 'bg-blue-600'
    },
    {
      icon: Package,
      title: 'Entrega de Produtos',
      description: 'Vestuário, bijuterias e outros produtos com cuidado especial',
      features: ['Embalagem segura', 'Rastreamento', 'Seguro incluído'],
      price: 'A partir de 120MT',
      time: '45-60 min',
      color: 'bg-green-600'
    },
    {
      icon: Zap,
      title: 'Entrega Express',
      description: 'Para quando você precisa de velocidade máxima',
      features: ['Prioridade máxima', 'Entregador dedicado', 'Sem paradas'],
      price: 'A partir de 350MT',
      time: '15-25 min',
      color: 'bg-purple-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de entrega para atender todas as suas necessidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Header */}
                <div className={`${service.color} p-6 text-white`}>
                  <IconComponent className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and Time */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{service.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    size="sm"
                  >
                    Solicitar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de um serviço personalizado?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Entre em contacto connosco para soluções sob medida para o seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

