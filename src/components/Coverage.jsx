import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Building,
  Home,
  Store
} from 'lucide-react'

const Coverage = () => {
  const areas = [
    {
      name: 'Centro da Cidade',
      neighborhoods: ['Baixa', 'Muhala', 'Central', 'Comercial'],
      deliveryTime: '15-30 min',
      status: 'active'
    },
    {
      name: 'Zona Norte',
      neighborhoods: ['Natikiri', 'Napipine', 'Muhala Expansão', 'Carrupeia'],
      deliveryTime: '20-35 min',
      status: 'active'
    },
    {
      name: 'Zona Sul',
      neighborhoods: ['Marrere', 'Mutauanha', 'Namutequeliua', 'Anchilo'],
      deliveryTime: '25-40 min',
      status: 'active'
    },
    {
      name: 'Zona Oeste',
      neighborhoods: ['Napipine', 'Muhala Compone', 'Namutequeliua', 'Mutauanha'],
      deliveryTime: '30-45 min',
      status: 'active'
    },
    {
      name: 'Zona Industrial',
      neighborhoods: ['Zona Industrial', 'Porto', 'Aeroporto', 'Estação'],
      deliveryTime: '20-35 min',
      status: 'active'
    },
    {
      name: 'Arredores',
      neighborhoods: ['Nacala', 'Ilha de Moçambique', 'Angoche', 'Malema'],
      deliveryTime: '45-90 min',
      status: 'coming-soon'
    }
  ]

  const serviceTypes = [
    {
      icon: Home,
      title: 'Residencial',
      description: 'Entregas para casas e apartamentos',
      color: 'bg-blue-600'
    },
    {
      icon: Building,
      title: 'Empresarial',
      description: 'Serviços para escritórios e empresas',
      color: 'bg-orange-500'
    },
    {
      icon: Store,
      title: 'Comercial',
      description: 'Entregas para lojas e estabelecimentos',
      color: 'bg-green-600'
    }
  ]

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Área de Cobertura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos toda a cidade de Nampula e estamos expandindo para outras regiões
          </p>
        </div>

        {/* Service Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {serviceTypes.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Coverage Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{area.name}</h3>
                  {area.status === 'active' ? (
                    <CheckCircle className="h-5 w-5 text-green-300" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-300" />
                  )}
                </div>
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{area.deliveryTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Bairros Atendidos:</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {area.neighborhoods.map((neighborhood, neighborhoodIndex) => (
                    <div key={neighborhoodIndex} className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-3 w-3 mr-2 text-blue-600" />
                      {neighborhood}
                    </div>
                  ))}
                </div>
                
                {area.status === 'active' ? (
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Disponível Agora
                  </div>
                ) : (
                  <div className="flex items-center text-orange-500 text-sm font-semibold">
                    <Clock className="h-4 w-4 mr-2" />
                    Em Breve
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Mapa de Cobertura</h3>
            <p className="opacity-90">Visualize todas as áreas que atendemos em Nampula</p>
          </div>
          
          {/* Placeholder for map */}
          <div className="h-96 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Mapa Interativo</h4>
              <p className="text-gray-500 mb-4">
                Visualize nossa área de cobertura completa
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Ver Mapa Completo
              </Button>
            </div>
          </div>
        </div>

        {/* Expansion Notice */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Estamos Expandindo!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Em breve estaremos disponíveis em mais cidades de Moçambique. 
            Quer que cheguemos na sua cidade primeiro?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              Solicitar Expansão
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500"
            >
              Receber Notificações
            </Button>
          </div>
        </div>

        {/* Contact for Coverage */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Não encontrou sua área?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Entre em contacto connosco e verificaremos se podemos atender sua localização
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Verificar Disponibilidade
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Coverage

