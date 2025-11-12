# Portfólio Audiovisual - Marcos Moraes

Site portfólio profissional para exibição de trabalhos em edição de vídeo, correção de cor e narrativa visual.

## 🚀 Características

- Design moderno e responsivo
- Seções: Início, Sobre, Trabalhos e Contato
- Filtros de portfólio por categoria
- Compatível com GitHub Pages
- Utiliza Babel Standalone para compatibilidade de JavaScript

## 📋 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e animações)
- JavaScript (ES6+ com Babel Standalone)
- Google Fonts (Inter)

## 🛠️ Como Usar

### Configuração Local

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no navegador
3. Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

### Publicação no GitHub Pages

1. Faça upload dos arquivos para um repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Selecione a branch principal (geralmente `main` ou `master`)
4. Clique em **Save**
5. Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio/`

## ✏️ Personalização

### Adicionar Trabalhos ao Portfólio

Edite o array `portfolioData` no arquivo `script.js`:

```javascript
const portfolioData = [
    {
        id: 1,
        title: 'Título do Projeto',
        description: 'Descrição do projeto',
        category: 'danca', // ou 'institucional', 'redes-sociais', 'cursos'
        thumbnail: 'url-da-imagem.jpg', // URL da imagem de capa
        link: 'https://link-para-o-video.com' // Link para o trabalho
    },
    // Adicione mais projetos aqui...
];
```

### Categorias Disponíveis

- `danca` - Dança
- `institucional` - Institucional
- `redes-sociais` - Redes Sociais
- `cursos` - Cursos Online

### Personalizar Cores

Edite as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    /* ... outras variáveis ... */
}
```

### Configurar Formulário de Contato

O formulário de contato atualmente mostra um alerta. Para integrar com um serviço real:

1. **EmailJS** (gratuito): https://www.emailjs.com/
2. **Formspree** (gratuito): https://formspree.io/
3. **Backend próprio**: Crie uma API para processar os formulários

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:
- Desktop
- Tablet
- Mobile

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio.

## 👤 Autor

**Marcos Moraes**
- E-mail: contato.marcosmoraes2@gmail.com
- LinkedIn: [linkedin.com/in/marcos-moraes](https://www.linkedin.com/in/marcos-moraes)
- itch.io: [marcos-moraes.itch.io](https://marcos-moraes.itch.io/)

