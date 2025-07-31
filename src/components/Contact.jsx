import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+258 876 613 277', '+258 85 151 6380'],
      color: 'bg-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contacto@delivmoz.co.mz'],
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: ['Nampula, Moçambique'],
      color: 'bg-green-600'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['24 horas por dia', '7 dias por semana'],
      color: 'bg-purple-600'
    }
  ]

  const services = [
    'Entrega de Comida',
    'Entrega de Documentos',
    'Entrega de Produtos',
    'Entrega Express',
    'Pesquisa de Preço',
    'Compra de Produtos',
    'Serviço Personalizado'
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contacto connosco através dos canais abaixo
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+258 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Descreva seu pedido ou dúvida..."
                  required
                ></textarea>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Quick Contact & Map */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contacto Rápido
              </h3>
              
              <div className="space-y-4">
                <a href="https://wa.me/258876613277" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                  size="lg"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp: +258 876 613 277
                </Button>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start"
                  size="lg"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Ligar: +258 85 151 6380
                </Button>
                
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start"
                  size="lg"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Email: contacto@delivmoz.co.mz
                </Button>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-4 text-white">
                <h3 className="text-xl font-bold">Nossa Localização</h3>
              </div>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-600 mb-2">Nampula, Moçambique</h4>
                  <p className="text-sm text-gray-500">
                    Atendemos toda a cidade e arredores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Como faço um pedido?</h4>
              <p className="text-gray-600">
                Entre em contacto connosco via WhatsApp, telefone ou formulário. 
                Nossa equipe processará seu pedido rapidamente.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Quais são os preços?</h4>
              <p className="text-gray-600">
                Os preços variam conforme o tipo de serviço e distância. 
                Entre em contacto para um orçamento personalizado.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Qual o tempo de entrega?</h4>
              <p className="text-gray-600">
                Dependendo da localização e tipo de serviço, entre 15 a 60 minutos. 
                Serviços express são mais rápidos.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Posso rastrear meu pedido?</h4>
              <p className="text-gray-600">
                Sim! Fornecemos atualizações em tempo real sobre o status 
                da sua entrega via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

