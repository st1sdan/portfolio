// Process steps accordion functionality
const processSteps = document.querySelectorAll('.process-step');

processSteps.forEach(step => {
    const header = step.querySelector('.process-header');
    
    header.addEventListener('click', () => {
        // Close all other steps
        processSteps.forEach(otherStep => {
            if (otherStep !== step && otherStep.classList.contains('active')) {
                otherStep.classList.remove('active');
            }
        });
        
        // Toggle current step
        step.classList.toggle('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Language switcher
const languageSwitcher = document.querySelector('.language-switcher');
const languageDropdown = document.querySelector('.language-dropdown');
const languageLinks = document.querySelectorAll('.language-dropdown a');

languageSwitcher.addEventListener('click', (e) => {
    e.stopPropagation();
    // Toggle dropdown regardless of current language
    languageDropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    languageDropdown.classList.remove('active');
});

// Translation functionality
const translations = {
    en: {
        title: "Web Designer And Developer",
        subtitle: "I create beautiful, functional websites that help businesses grow",
        contact_btn: "Contact Me",
        home: "#home",
        projects: "#projects",
        project1_title: "Marketplace cards",
        project1_desc: "A modern upgrade for various shops on marketplaces.",
        project3_title: "Portfolio Website",
        project3_desc: "You are here right now.",
        project2_title: "Article design",
        project2_desc: "Science article design in style of social platforms.",
        project4_title: "Ad for academy",
        project4_desc: "Test project for academy.",
        project5_title: "Presentation for Alpha Bank",
        project5_desc: "Idea presentation for Alpha Bank case presentation.",
        view_project: "View project",
        process: "#process",
        brief: "brief",
        brief_text: "This is where we discuss project requirements, goals, and initial ideas with the client to establish a clear direction for the project.",
        analysis: "analysis",
        analysis_text: "Here we conduct market research, competitor analysis, and technical feasibility studies to inform our design decisions.",
        concept: "concept",
        concept_text: "This phase involves creating wireframes, mockups, and prototypes to visualize the final product before development begins.",
        development: "development",
        development_text: "The actual coding and implementation phase where we bring the design to life with clean, efficient code.",
        contacts: "#contacts",
        contacts_text: "I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me."
    },
    ru: {
        title: "Веб-Дизайнер и Разработчик",
        subtitle: "Я создаю красивые, функциональные сайты, которые помогают бизнесу расти",
        contact_btn: "Связаться",
        home: "#главная",
        projects: "#проекты",
        project1_title: "Карточки для маркетплейса",
        project1_desc: "Современное улучшение дизайна для различных магазинов маркетплейса.",
        project3_title: "Портфолио",
        project3_desc: "Вы сейчас здесь.",
        project2_title: "Оформление статьи",
        project2_desc: "Оформление научной статьи в стиле социальных сетей.",
        project4_title: "Реклама для академии",
        project4_desc: "Тестовый проект для рекламы академии боевых пельменей.",
        project5_title: "Презентация для Альфа-Банка",
        project5_desc: "Презентация для демонстрации кейса на выступлении для Альфа банка.",
        view_project: "Посмотреть проект",
        process: "#процесс",
        brief: "Бриф",
        brief_text: "Здесь мы обсуждаем требования к проекту, цели и первоначальные идеи с клиентом, чтобы определить четкое направление проекта.",
        analysis: "Анализ",
        analysis_text: "Здесь мы проводим исследование рынка, анализ конкурентов и технико-экономическое обоснование, чтобы обосновать наши дизайнерские решения.",
        concept: "Концепция",
        concept_text: "На этом этапе создаются каркасы, макеты и прототипы для визуализации конечного продукта перед началом разработки.",
        development: "Разработка",
        development_text: "Фаза непосредственного кодирования и реализации, где мы воплощаем дизайн в жизнь с помощью чистого, эффективного кода.",
        contacts: "#контакты",
        contacts_text: "Я заинтересован в фрилансе. Однако, если у вас есть другие запросы или вопросы, не стесняйтесь связаться со мной."
    }
};

languageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        translatePage(lang);
        languageSwitcher.querySelector('.current-lang').textContent = lang.toUpperCase();
        
        // Update selected language in dropdown
        languageLinks.forEach(l => {
            if (l.getAttribute('data-lang') === lang) {
                l.classList.add('selected');
            } else {
                l.classList.remove('selected');
            }
        });
    });
});

function translatePage(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.querySelector('.sharp')) {
                // Preserve the <span class="sharp">#</span> and only update the text after it
                const textAfterSharp = translations[lang][key].replace(/^#/, '');
                element.innerHTML = `<span class="sharp">#</span>${textAfterSharp}`;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Particles
for (let i = 0; i < 60; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');

// Случайное начальное положение
particle.style.left = `${Math.random() * 100}%`;
particle.style.top = `${Math.random() * 100}%`;

// Случайная задержка анимации
particle.style.animationDelay = `${Math.random() * 5}s`;

// Случайный размер
const size = 2 + Math.random() * 3;
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;

// Случайная прозрачность
particle.style.opacity = 0.3 + Math.random() * 0.7;

document.getElementById('particles').appendChild(particle);
}

// Particles parallax
window.addEventListener('scroll', () => {
    const particles = document.getElementById('particles');
    if (particles) {
        particles.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    }
});

// Theme toggle with ripple effect
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const overlay = document.getElementById('themeOverlay');
const toggleButton = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
if (savedTheme === 'light') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Обновляем цвет overlay на новый (цвет новой темы)
    document.documentElement.setAttribute('data-theme', newTheme);
    const computedStyle = getComputedStyle(document.documentElement);
    const newBg = computedStyle.getPropertyValue('--primary-color').trim();
    overlay.style.background = newBg;
    document.documentElement.setAttribute('data-theme', currentTheme); // возвращаем обратно до смены

    const buttonRect = toggleButton.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;

    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.clipPath = `circle(0% at ${centerX}px ${centerY}px)`;
    overlay.style.opacity = '0.2';
    overlay.style.transition = 'none';

    requestAnimationFrame(() => {
        overlay.style.transition = 'clip-path 0.6s ease-in-out, opacity 0.3s ease 0.9s';
        overlay.style.clipPath = `circle(150% at ${centerX}px ${centerY}px)`;
    });

    setTimeout(() => {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'light') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }, 222);

    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 0);
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');

    if (heroTitle && heroSubtitle) {
        heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroSubtitle.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});


// Fade parallax
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
