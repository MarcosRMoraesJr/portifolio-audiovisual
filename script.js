// Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = [];

// Sample portfolio data - você pode substituir com seus próprios trabalhos
// Para adicionar vídeos do YouTube, use o campo 'youtubeId' com o ID do vídeo
// Exemplo: URL do YouTube: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// O ID é: dQw4w9WgXcQ
const portfolioData = [
    {
        id: 1,
        title: 'Festival "Contos, Lendas e Divindades Que Marcaram O Mundo"',
        description: 'Gravação, edição e correção de cor do festival, com foco em movimento e expressão corporal.',
        category: 'danca',
        youtubeId: '1q9vVxDW_X8', // Cole o ID do vídeo do YouTube aqui (ex: 'dQw4w9WgXcQ')
        thumbnail: null, // Ou adicione URL da imagem de capa aqui
        link: 'https://youtu.be/1q9vVxDW_X8' // Link para o vídeo completo (opcional)
    },
    {
        id: 2,
        title: 'Gameplay de Minecraft - "Esse Sou Eu"',
        description: 'Gameplay feita pelo pedido do cliente, onde foi feito a decupagem de 2 horas de gameplay e colocado excesso de piadas e memes.',
        category: 'gameplay',
        youtubeId: 'DNSII3u8_PE',
        thumbnail: null,
        link: 'https://youtu.be/DNSII3u8_PE'
    },
    {
        id: 3,
        title: 'Sarau Hana Hassani',
        description: 'Festival de dança feito dentro do estúdio Hana Hassani, onde foi feito somente correção de cor e som do material bruto.',
        category: 'danca',
        youtubeId: null,
        thumbnail: '6IuIh9s9rGI',
        link: 'https://youtu.be/6IuIh9s9rGI'
    },
    {
        id: 4,
        title: 'Vídeo aula de medicina',
        description: 'Edição de vídeo e correção de cor para plataforma de ensino voltado a medicina.',
        category: 'cursos',
        youtubeId: '6ozAGjBTbGc',
        thumbnail: null,
        link: 'https://youtu.be/6ozAGjBTbGc'
    },
    {
        id: 5,
        title: 'Corte de vídeo 20 fãs de Naruto contra 1 fã de One Piece',
        description: 'Cortes e edições para rede social do debate da Netflix.',
        category: 'redes-sociais',
        instagramUrl: 'https://www.instagram.com/p/DOlMbYtCEHC/', // Cole a URL do Reel do Instagram aqui (ex: 'https://www.instagram.com/reel/ABC123/')
        thumbnail: null,
        link: 'https://www.instagram.com/p/DOlMbYtCEHC/'
    },
    {
        id: 6,
        title: 'Stand Up Comedy',
        description: 'Corte e correção de cor de stand up comedy para rede social.',
        category: 'redes-sociais',
        instagramUrl: 'https://www.instagram.com/p/DEqMPT7Se4L/', // Cole a URL do Reel do Instagram aqui (ex: 'https://www.instagram.com/reel/XYZ789/')
        thumbnail: null,
        link: 'https://www.instagram.com/p/DEqMPT7Se4L/'
    },
    {
        id: 7,
        title: 'Análise sobre Heartstopper',
        description: 'Vídeo feito para o cliente Taislan Alvarenga, onde foi feito a decupagem, edição e correção de cor.',
        category: 'cursos',
        youtubeId: 'PvWORFKm4kE',
        thumbnail: null,
        link: 'https://youtu.be/PvWORFKm4kE'
    }
];

// Initialize portfolio grid
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) {
        return;
    }

    portfolioGrid.innerHTML = '';

    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.category = item.category;

        const thumbnail = document.createElement('div');
        thumbnail.className = 'portfolio-thumbnail';
        
        // Se houver YouTube ID, usar thumbnail do YouTube
        if (item.youtubeId) {
            const img = document.createElement('img');
            // URL da thumbnail do YouTube em alta qualidade
            img.src = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;
            img.alt = item.title;
            img.onerror = function() {
                // Se maxresdefault não existir, usar hqdefault
                this.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
            };
            thumbnail.appendChild(img);
            
            // Adicionar overlay com botão de play
            const playOverlay = document.createElement('div');
            playOverlay.className = 'play-overlay';
            const playButton = document.createElement('div');
            playButton.className = 'play-button';
            playOverlay.appendChild(playButton);
            thumbnail.appendChild(playOverlay);
            
            // Ao clicar, abrir vídeo no YouTube
            thumbnail.style.cursor = 'pointer';
            thumbnail.addEventListener('click', () => {
                window.open(`https://www.youtube.com/watch?v=${item.youtubeId}`, '_blank');
            });
        }
        // Se houver Instagram URL, criar card do Instagram
        else if (item.instagramUrl) {
            // Criar container para o Instagram
            const instagramContainer = document.createElement('div');
            instagramContainer.style.width = '100%';
            instagramContainer.style.height = '100%';
            instagramContainer.style.display = 'flex';
            instagramContainer.style.flexDirection = 'column';
            instagramContainer.style.alignItems = 'center';
            instagramContainer.style.justifyContent = 'center';
            instagramContainer.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
            instagramContainer.style.position = 'relative';
            
            // Ícone do Instagram
            const instagramIcon = document.createElement('div');
            instagramIcon.innerHTML = `
                <svg width="60" height="60" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="white" stroke-width="2" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
            `;
            instagramContainer.appendChild(instagramIcon);
            
            // Texto
            const instagramText = document.createElement('div');
            instagramText.textContent = 'Ver no Instagram';
            instagramText.style.color = 'white';
            instagramText.style.marginTop = '10px';
            instagramText.style.fontWeight = '600';
            instagramText.style.fontSize = '0.9rem';
            instagramContainer.appendChild(instagramText);
            
            thumbnail.appendChild(instagramContainer);
            
            // Adicionar overlay com botão de play
            const playOverlay = document.createElement('div');
            playOverlay.className = 'play-overlay';
            const playButton = document.createElement('div');
            playButton.className = 'play-button';
            playOverlay.appendChild(playButton);
            thumbnail.appendChild(playOverlay);
            
            // Ao clicar, abrir Reel no Instagram
            thumbnail.style.cursor = 'pointer';
            thumbnail.addEventListener('click', () => {
                window.open(item.instagramUrl, '_blank');
            });
        }
        // Se houver thumbnail customizada, usar ela
        else if (item.thumbnail) {
            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt = item.title;
            thumbnail.appendChild(img);
        }
        // Se não houver nem YouTube ID nem thumbnail, mostrar placeholder
        else {
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'var(--text-gray)';
            placeholder.textContent = 'Sem preview';
            thumbnail.appendChild(placeholder);
        }

        const info = document.createElement('div');
        info.className = 'portfolio-info';

        const tag = document.createElement('span');
        tag.className = 'portfolio-tag';
        tag.textContent = getCategoryLabel(item.category);

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const link = document.createElement('a');
        // Se houver YouTube ID, link aponta para o YouTube
        if (item.youtubeId) {
            link.href = `https://www.youtube.com/watch?v=${item.youtubeId}`;
        }
        // Se houver Instagram URL, link aponta para o Instagram
        else if (item.instagramUrl) {
            link.href = item.instagramUrl;
        } else {
            link.href = item.link;
        }
        link.className = 'portfolio-link';
        link.textContent = 'Ver Projeto →';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        info.appendChild(tag);
        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(link);

        portfolioItem.appendChild(thumbnail);
        portfolioItem.appendChild(info);

        portfolioGrid.appendChild(portfolioItem);
        portfolioItems.push(portfolioItem);
    });
}

// Get category label in Portuguese
function getCategoryLabel(category) {
    const labels = {
        'danca': 'Dança',
        'redes-sociais': 'Redes Sociais',
        'cursos': 'Cursos Online',
        'gameplay': 'Gameplay',
        'all': 'Todos'
    };
    return labels[category] || category;
}

// Filter portfolio items
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter portfolio
        const category = button.dataset.filter;
        filterPortfolio(category);
    });
});

// Contact section doesn't have a form anymore, just email and social links

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items and skill cards
function initializePage() {
    initPortfolio();
    
    // Add fade-in animation to elements
    const animatedElements = document.querySelectorAll('.portfolio-item, .about-image, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Try multiple ways to ensure initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // DOM already loaded
    initializePage();
}

