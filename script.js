// ==================== Data Configuration ====================
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
            tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://demo-ecommerce.com",
            icon: "🛒"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
            tech: ["Vue.js", "Laravel", "Firebase", "Tailwind CSS"],
            github: "https://github.com/yourusername/task-manager",
            demo: "https://demo-taskapp.com",
            icon: "📋"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with geolocation, 7-day forecasts, and beautiful data visualizations.",
            tech: ["React", "Chart.js", "OpenWeather API"],
            github: "https://github.com/yourusername/weather-dashboard",
            demo: "https://demo-weather.com",
            icon: "🌤️"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Analytics platform for tracking social media performance with AI-powered insights and recommendations.",
            tech: ["Next.js", "Laravel API", "PostgreSQL"],
            github: "https://github.com/yourusername/social-analytics",
            demo: "https://demo-analytics.com",
            icon: "📊"
        },
        {
            id: 5,
            title: "Portfolio Builder",
            description: "Drag-and-drop portfolio builder with custom themes, SEO optimization, and one-click deployment.",
            tech: ["React", "Laravel", "AWS", "Docker"],
            github: "https://github.com/yourusername/portfolio-builder",
            demo: "https://demo-portfolio.com",
            icon: "🎨"
        },
        {
            id: 6,
            title: "Real-Time Chat App",
            description: "Secure messaging application with end-to-end encryption, file sharing, and video calls.",
            tech: ["Socket.io", "Laravel", "Redis", "JWT"],
            github: "https://github.com/yourusername/chat-app",
            demo: "https://demo-chat.com",
            icon: "💬"
        }
    ],
    techStack: {
        frontend: [
            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
        ],
        backend: [
            { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ],
        tools: [
            { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
            { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
        ]
    }
};

// ==================== DOM Elements ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projectsGrid');
const frontendTech = document.getElementById('frontendTech');
const backendTech = document.getElementById('backendTech');
const toolsTech = document.getElementById('toolsTech');

// ==================== Mobile Navigation ====================
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== Smooth Scrolling ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Active Navigation Link ====================
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ==================== Navbar Scroll Effect ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==================== Render Projects ====================
function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link" title="Live Demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ==================== Render Tech Stack ====================
function renderTechStack() {
    if (frontendTech) {
        frontendTech.innerHTML = portfolioData.techStack.frontend
            .map(tech => `
                <div class="tech-item">
                    <img src="${tech.logo}" alt="${tech.name}" class="tech-logo" onerror="this.style.display='none'">
                    <span class="tech-name">${tech.name}</span>
                </div>
            `).join('');
    }
    
    if (backendTech) {
        backendTech.innerHTML = portfolioData.techStack.backend
            .map(tech => `
                <div class="tech-item">
                    <img src="${tech.logo}" alt="${tech.name}" class="tech-logo" onerror="this.style.display='none'">
                    <span class="tech-name">${tech.name}</span>
                </div>
            `).join('');
    }
    
    if (toolsTech) {
        toolsTech.innerHTML = portfolioData.techStack.tools
            .map(tech => `
                <div class="tech-item">
                    <img src="${tech.logo}" alt="${tech.name}" class="tech-logo" onerror="this.style.display='none'">
                    <span class="tech-name">${tech.name}</span>
                </div>
            `).join('');
    }
}

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ==================== Initialize ====================
function init() {
    renderProjects();
    renderTechStack();
    
    // Observe project cards for animation
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
        
        // Observe tech items
        const techItems = document.querySelectorAll('.tech-item');
        techItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }, 100);
}

// ==================== Load Event ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==================== Scroll to Top Button ====================
let scrollTopBtn = null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        if (!scrollTopBtn) {
            scrollTopBtn = document.createElement('button');
            scrollTopBtn.className = 'scroll-top';
            scrollTopBtn.innerHTML = '↑';
            scrollTopBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                cursor: pointer;
                font-size: 20px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 999;
                opacity: 0;
                animation: fadeIn 0.3s ease-out forwards;
            `;
            
            // Add keyframe animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
            
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            scrollTopBtn.addEventListener('mouseenter', () => {
                scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
            });
            
            scrollTopBtn.addEventListener('mouseleave', () => {
                scrollTopBtn.style.transform = 'translateY(0) scale(1)';
            });
            
            document.body.appendChild(scrollTopBtn);
        }
    } else {
        if (scrollTopBtn) {
            scrollTopBtn.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                if (scrollTopBtn && scrollTopBtn.parentNode) {
                    scrollTopBtn.parentNode.removeChild(scrollTopBtn);
                    scrollTopBtn = null;
                }
            }, 300);
        }
    }
});

// ==================== Typing Effect for Hero Title ====================
function createTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typing = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Activate typing effect after page load
setTimeout(createTypingEffect, 500);

// ==================== Console Message ====================
console.log('%c👋 Hello, Developer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #764ba2; font-size: 14px;');
console.log('%c🚀 Built with HTML, CSS, JavaScript', 'color: #10b981; font-size: 12px;');
