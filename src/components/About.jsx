import { Button } from '@/components/ui/button'
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  MapPin,
  Clock,
  Shield,
  Truck
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Clock,
      title: 'Rapidez',
      description: 'Comprometemo-nos com entregas rápidas e pontuais'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Seus pedidos são tratados com máximo cuidado e segurança'
    },
    {
      icon: Heart,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros com nossos clientes'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Excelência em cada entrega que realizamos'
    }
  ]

  const stats = [
    {
      number: '500+',
      label: 'Entregas Realizadas',
      icon: Truck
    },
    {
      number: '50+',
      label: 'Parceiros Comerciais',
      icon: Users
    },
    {
      number: '98%',
      label: 'Taxa de Satisfação',
      icon: Award
    },
    {
      number: '24/7',
      label: 'Suporte Disponível',
      icon: Clock
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a DelivMoz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectando pessoas e negócios através de entregas rápidas e seguras em Moçambique
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa História
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A DelivMoz nasceu da necessidade de conectar pessoas e negócios em Nampula 
                através de um serviço de entrega confiável e eficiente. Começamos como uma 
                pequena empresa local e hoje somos referência em entregas na região.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe é formada por profissionais dedicados que entendem a importância 
                de cada entrega. Seja um documento importante, uma refeição especial ou um 
                produto único, tratamos cada pedido com o mesmo cuidado e atenção.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Facilitar a vida das pessoas e o crescimento dos negócios através de 
                soluções de entrega inovadoras, rápidas e seguras, contribuindo para 
                o desenvolvimento econômico de Moçambique.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal plataforma de entregas em Moçambique, reconhecida pela 
                excelência no atendimento, inovação tecnológica e contribuição para o 
                desenvolvimento das comunidades que servimos.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="bg-white/20 rounded-full p-6 inline-block mb-4">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Nampula, Moçambique</h4>
                <p className="opacity-90">Nossa base de operações</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm opacity-90">Ano de Fundação</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Funcionários</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm opacity-90">Zonas Atendidas</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm opacity-90">Funcionamento</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Números
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Profissionais dedicados e experientes, comprometidos em oferecer 
            o melhor serviço de entrega em Moçambique
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Entregadores Qualificados</h4>
                <p className="opacity-90">Treinados para garantir entregas seguras</p>
              </div>
              <div>
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Atendimento Especializado</h4>
                <p className="opacity-90">Equipe focada na satisfação do cliente</p>
              </div>
              <div>
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Gestão Experiente</h4>
                <p className="opacity-90">Liderança com visão de crescimento</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer fazer parte da nossa história?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contacto connosco e descubra como podemos ajudar você ou seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Fazer Pedido Agora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Falar Connosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

