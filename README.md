# Site DelivMoz - Documentação

## Sobre o Projeto

Este é o site oficial da DelivMoz, empresa de delivery em Nampula, Moçambique. O site foi desenvolvido com tecnologias modernas para oferecer uma experiência profissional e responsiva.

## Informações da Empresa

- **Nome:** DelivMoz
- **Localização:** Nampula, Moçambique
- **Telefones:** +258 876 613 277 / +258 85 151 6380
- **Email:** contacto@delivmoz.co.mz
- **Serviços:** Entrega de comida, documentos, produtos e serviços express

## Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **JavaScript (JSX)** - Linguagem de programação

## Estrutura do Projeto

```
delivmoz-website/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI base
│   │   ├── Header.jsx    # Cabeçalho do site
│   │   ├── Hero.jsx      # Seção principal
│   │   ├── Services.jsx  # Seção de serviços
│   │   ├── HowItWorks.jsx # Como funciona
│   │   ├── Coverage.jsx  # Área de cobertura
│   │   ├── About.jsx     # Sobre a empresa
│   │   ├── Contact.jsx   # Contacto
│   │   └── Footer.jsx    # Rodapé
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── package.json          # Dependências
└── README.md            # Esta documentação
```

## Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (ou npm/yarn)

### Instalação
```bash
# Clonar ou extrair o projeto
cd delivmoz-website

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Os arquivos estarão na pasta 'dist/'
```

## Seções do Site

### 1. Header
- Logo da empresa
- Menu de navegação
- Informações de contacto
- Botão call-to-action

### 2. Hero Section
- Mensagem principal
- Características destacadas
- Estatísticas da empresa
- Botões de ação

### 3. Serviços
- 4 tipos de serviço:
  - Entrega de Comida
  - Entrega de Documentos
  - Entrega de Produtos
  - Entrega Express
- Preços e tempos estimados

### 4. Como Funciona
- Processo em 4 etapas
- Funcionalidades adicionais
- Call-to-action

### 5. Área de Cobertura
- Zonas atendidas em Nampula
- Tipos de serviço (Residencial, Empresarial, Comercial)
- Mapa de cobertura (placeholder)

### 6. Sobre Nós
- História da empresa
- Missão e visão
- Valores
- Estatísticas
- Equipe

### 7. Contacto
- Formulário de contacto
- Informações de contacto
- Links para redes sociais
- FAQ

### 8. Footer
- Links rápidos
- Informações da empresa
- Newsletter
- Copyright

## Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/App.css`:
- Azul: #2563EB
- Laranja: #F97316
- Verde: #10B981

### Conteúdo
Para alterar textos e informações:
1. Edite os componentes em `src/components/`
2. Cada seção tem seu próprio arquivo
3. As informações de contacto estão principalmente em `Header.jsx`, `Contact.jsx` e `Footer.jsx`

### Imagens
- Adicione imagens na pasta `src/assets/`
- Importe e use nos componentes conforme necessário

## Deploy

### Opções de Deploy
1. **Netlify** - Arraste a pasta `dist/` para netlify.com
2. **Vercel** - Conecte o repositório Git
3. **GitHub Pages** - Configure nas configurações do repositório
4. **Servidor próprio** - Faça upload da pasta `dist/`

### Preparação para Deploy
```bash
# 1. Gerar build
pnpm run build

# 2. A pasta 'dist/' contém todos os arquivos necessários
# 3. Faça upload desta pasta para seu servidor
```

## Funcionalidades Futuras

### Recomendações para Implementação
1. **Backend para formulários** - Processar mensagens de contacto
2. **Integração WhatsApp** - Links diretos para WhatsApp Business
3. **Mapa real** - Integração com Google Maps
4. **Sistema de pedidos** - Portal para clientes
5. **Rastreamento** - Sistema de acompanhamento de entregas
6. **Blog** - Seção de notícias e atualizações

## Suporte

Para dúvidas sobre o código ou modificações:
- Consulte a documentação do React: https://react.dev
- Documentação do Tailwind CSS: https://tailwindcss.com
- Componentes shadcn/ui: https://ui.shadcn.com

## Licença

Este projeto foi desenvolvido especificamente para a DelivMoz.

---

**Desenvolvido com ❤️ para a DelivMoz**

