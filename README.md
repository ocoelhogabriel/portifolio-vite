# Gabriel Coelho | Portfólio

Portfólio pessoal moderno desenvolvido com Nuxt 3, Nuxt UI, TailwindCSS e componentes responsivos.

## 🚀 Tecnologias

- **Nuxt 3** - Framework Vue.js full-stack
- **Nuxt UI** - Biblioteca de componentes moderna
- **TailwindCSS** - Framework de CSS utilitário
- **@nuxt/content** - Sistema de gerenciamento de conteúdo
- **@nuxt/image** - Otimização de imagens
- **TypeScript** - Tipagem estática

## 📦 Scripts

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build para produção  
npm run generate   # Gera site estático
npm run preview    # Preview do build
```

## 🎯 Features

- ✅ Layout responsivo e moderno
- ✅ Modo escuro/claro automático
- ✅ Componentes acessíveis (Nuxt UI)
- ✅ SEO otimizado com meta tags
- ✅ Performance otimizada
- ✅ Navegação mobile-friendly
- ✅ Integração preparada para GitHub API
- ✅ Sistema de notificações/toasts
- ✅ Páginas estruturadas (Home, Projetos, Experiência, Habilidades, Contato, Currículo)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Configure a variável de ambiente `GITHUB_TOKEN` (opcional)
4. Deploy automático a cada push

### Configuração de Ambiente

```bash
# .env
GITHUB_TOKEN=seu_token_github_aqui
```

## 📁 Estrutura do Projeto

```
portfolio/
├── assets/css/          # Estilos globais
├── components/          # Componentes Vue reutilizáveis  
├── composables/         # Composables do Vue
├── content/            # Conteúdo markdown/yaml
├── layouts/            # Layouts das páginas
├── pages/              # Páginas do site
├── public/             # Arquivos estáticos
└── nuxt.config.ts      # Configuração do Nuxt
```

## 🎨 Personalização

Para personalizar o portfólio para suas informações:

1. **Dados pessoais**: Edite os dados mockados nas páginas
2. **Estilos**: Personalize cores no TailwindCSS
3. **Conteúdo**: Adicione seus projetos reais e informações
4. **GitHub**: Configure o token para buscar repositórios reais

Desenvolvido com ❤️ por Gabriel Coelho
