'use strict';

/* ===== i18n ===== */
const I18N = {
    en: {
        nav_about: 'About', nav_projects: 'Projects', nav_micro: 'Micro', nav_games: 'Games', nav_faq: 'Q&A', nav_contact: 'Contact',
        hero_eyebrow: '(web designer & developer)',

        sec_about: 'About me',
        about_text: "I'm a designer and developer with 3+ years of turning messy ideas into clean, usable things. I build client websites, small web tools and a whole shelf of games, always chasing the one interaction that makes you smile.",
        about_years: 'years of practice', about_projects: 'projects shipped', about_games: 'games released',
        hero_line1: 'Design,', hero_line2: 'experiments', hero_line3: '& games.',
        hero_lead: 'A collection of client work, small web toys and playable projects, all in one place.',
        hero_scroll: 'Scroll to enter ↓',

        screen_label: '▶ selected_work.exe', screen_title: 'Step inside', screen_hint: 'keep scrolling →',

        sec_projects: 'Selected work', drag_hint: 'scroll →',
        p1_title: 'Demolition works site', p1_meta: 'Web · 2024',
        p1_desc: 'Landing page for a demolition company: a punchy hero, clear services and a request form that converts.',
        p2_title: 'Marketplace Cards', p2_meta: 'Design · 2024',
        p2_desc: 'A set of product cards for marketplaces, bright, readable and built to sell at thumbnail size.',
        p3_title: 'Article Design', p3_meta: 'Editorial · 2023',
        p3_desc: 'Long-read layout with a clear reading rhythm, strong hierarchy and comfortable measure.',
        p4_title: 'Portfolio', p4_meta: 'Web · 2023',
        p4_desc: 'A personal portfolio concept built around a 3D background and a calm, focused layout.',
        p5_title: 'Ad for Academy', p5_meta: 'Ads · 2023',
        p5_desc: 'Advertising creatives for an educational academy, a consistent, eye-catching visual set.',
        p6_title: 'Presentation for Alpha Bank', p6_meta: 'Brand · 2022',
        p6_desc: 'A business presentation with a consistent visual system, clean charts and confident typography.',
        p1_time: '2-3 weeks', p1_price: '45,000 ₽',
        p2_time: '8 hours', p2_price: '1,000 ₽/pc',
        p3_time: '3-5 days', p3_price: '10,000 ₽',
        p4_time: '2-3 weeks', p4_price: 'Priceless',
        p5_time: '2-3 days', p5_price: '5,000 ₽',
        p6_time: '2 days', p6_price: '20,000 ₽',
        label_time: 'Time', label_price: 'Budget',
        open_case: 'Open case ↗', visit_project: 'Visit project ↗',
        cursor_open: 'View ↗', cursor_play: 'Play ↗',

        sec_micro: 'Micro-projects', sec_micro_sub: 'Small self-contained web toys & experiments.',
        kind_tool: 'tool', kind_toy: 'toy',
        m1_desc: 'A minimal browser notepad that saves locally.',
        m2_desc: 'Random game concepts against creative block.',
        open_link: 'Open ↗',

        sec_faq: 'Q&A', sec_faq_sub: 'A few things people usually ask.',
        q1: 'What exactly do you do?',
        a1: 'I design and build websites, small web tools and games, from the first concept to the working product.',
        q2: 'Are you available for freelance?',
        a2: 'Yes. I take on freelance and collaboration, reach out through the contact section below.',
        q3: 'What tools do you use?',
        a3: 'Figma for design, HTML / CSS / JavaScript for the web, and Godot for games.',
        q4: 'Do you really make games too?',
        a4: 'I do, several are published on itch.io, including game-jam entries. See the Games section above.',
        q5: 'How long does a project take?',
        a5: "It depends on scope: a landing page takes days, a full product takes weeks. I'll give you an honest estimate up front.",
        q6: 'Are you a real human?',
        a6: 'Last time I checked, yes. I also fail CAPTCHAs occasionally, which feels reassuringly human.',
        q8: 'Will you work for “exposure”?',
        a8: "Exposure is lovely, but it doesn't pay the bills. Real budgets only, please.",
        q9: 'Can you make it “pop” a little more?',
        a9: 'Always. There is a secret slider labelled “pop” and I am not afraid to use it.',
        q10: "What's your favorite thing to build?",
        a10: 'Weird little interactions nobody asked for, the ones that make you go “oh, nice” for half a second.',

        sec_games: 'Games', sec_games_sub: 'Playable projects published on itch.io.',
        stat_views: 'views', stat_rating: 'rating',
        visit_itch: 'All games on itch.io ↗',

        sec_contact: "Let's make<br>something.",
        email_me: 'Email me', telegram: 'Telegram',
        footer_note: 'Made with care.'
    },
    ru: {
        nav_about: 'Обо мне', nav_projects: 'Проекты', nav_micro: 'Микро', nav_games: 'Игры', nav_faq: 'Вопросы', nav_contact: 'Контакты',
        hero_eyebrow: '(веб-дизайнер и разработчик)',

        sec_about: 'Обо мне',
        about_text: 'Я дизайнер и разработчик. Уже больше трёх лет превращаю сырые задумки в понятные и удобные вещи: делаю сайты для клиентов, маленькие веб-инструменты и целую полку своих игр.',
        about_years: 'года в деле', about_projects: 'проектов за плечами', about_games: 'игр выпущено',
        hero_line1: 'Дизайн,', hero_line2: 'эксперименты', hero_line3: 'и игры.',
        hero_lead: 'Клиентские работы, небольшие веб-игрушки и играбельные проекты. Всё собрано в одном месте.',
        hero_scroll: 'Листай, чтобы войти ↓',

        screen_label: '▶ избранное.exe', screen_title: 'Загляни внутрь', screen_hint: 'листай дальше →',

        sec_projects: 'Избранные работы', drag_hint: 'листай →',
        p1_title: 'Сайт по демонтажным работам', p1_meta: 'Веб · 2024',
        p1_desc: 'Лендинг для компании по демонтажу: цепляющий первый экран, понятные услуги и форма заявки, которая реально приводит клиентов.',
        p2_title: 'Карточки для маркетплейсов', p2_meta: 'Дизайн · 2024',
        p2_desc: 'Карточки товаров для маркетплейсов: яркие, читаемые и продающие даже в крошечном размере.',
        p3_title: 'Дизайн статьи', p3_meta: 'Лонгрид · 2023',
        p3_desc: 'Вёрстка лонгрида с удобным ритмом чтения: понятная иерархия и комфортная длина строки.',
        p4_title: 'Портфолио', p4_meta: 'Веб · 2023',
        p4_desc: 'Концепт личного портфолио с трёхмерным фоном и спокойной, сфокусированной раскладкой.',
        p5_title: 'Реклама для академии', p5_meta: 'Реклама · 2023',
        p5_desc: 'Рекламные креативы для образовательной академии: цельный и цепляющий визуальный набор.',
        p6_title: 'Презентация для Альфа-Банка', p6_meta: 'Бренд · 2022',
        p6_desc: 'Деловая презентация с единым визуальным стилем, аккуратными графиками и уверенной типографикой.',
        p1_time: '2-3 недели', p1_price: '45 000 ₽',
        p2_time: '8 часов', p2_price: '1 000 ₽/шт',
        p3_time: '3-5 дней', p3_price: '10 000 ₽',
        p4_time: '2-3 недели', p4_price: 'Бесценно',
        p5_time: '2-3 дня', p5_price: '5 000 ₽',
        p6_time: '2 дня', p6_price: '20 000 ₽',
        label_time: 'Срок', label_price: 'Стоимость',
        open_case: 'Открыть кейс ↗', visit_project: 'Перейти к проекту ↗',
        cursor_open: 'Смотреть ↗', cursor_play: 'Играть ↗',

        sec_micro: 'Микро-проекты', sec_micro_sub: 'Маленькие самостоятельные веб-игрушки и эксперименты.',
        kind_tool: 'инструмент', kind_toy: 'игрушка',
        m1_desc: 'Минималистичный блокнот прямо в браузере, сохраняет текст на вашем устройстве.',
        m2_desc: 'Подкидывает случайные идеи для игр, когда фантазия встала.',
        open_link: 'Открыть ↗',

        sec_faq: 'Вопросы и ответы', sec_faq_sub: 'То, что обычно спрашивают.',
        q1: 'Чем ты вообще занимаешься?',
        a1: 'Придумываю и собираю сайты, небольшие веб-инструменты и игры, от первой идеи до готового результата.',
        q2: 'Ты берёшь заказы на фрилансе?',
        a2: 'Да, открыт к заказам и совместным проектам. Напиши мне в разделе с контактами ниже.',
        q3: 'В чём ты работаешь?',
        a3: 'Дизайн в Figma, сайты на HTML, CSS и JavaScript, игры в Godot.',
        q4: 'Ты правда делаешь ещё и игры?',
        a4: 'Ага. Несколько лежат на itch.io, в том числе с геймджемов. Загляни в раздел «Игры» выше.',
        q5: 'Сколько времени занимает проект?',
        a5: 'Смотря по объёму: небольшой лендинг делается за пару дней, а полноценный продукт за несколько недель. Честные сроки назову сразу.',
        q6: 'Ты вообще живой человек?',
        a6: 'В последний раз проверял, вроде да. Иногда даже не прохожу капчу, и это как-то по-человечески успокаивает.',
        q8: 'Поработаешь за «опыт и охваты»?',
        a8: 'Охваты это здорово, но счета ими не оплатишь. Так что давай за реальный бюджет.',
        q9: 'А можешь сделать «поярче, чтобы вау»?',
        a9: 'Всегда. У меня для этого есть секретный ползунок «вау», и я не стесняюсь его крутить.',
        q10: 'Что тебе нравится делать больше всего?',
        a10: 'Странные маленькие детали, о которых никто не просил. Те самые, от которых на секунду думаешь «о, как приятно».',

        sec_games: 'Игры', sec_games_sub: 'Играбельные проекты, выложенные на itch.io.',
        stat_views: 'просмотров', stat_rating: 'рейтинг',
        visit_itch: 'Все игры на itch.io ↗',

        sec_contact: 'Сделаем<br>что-нибудь.',
        email_me: 'Написать', telegram: 'Telegram',
        footer_note: 'Сделано с душой.'
    }
};

let LANG = 'en';

function applyLang(lang) {
    LANG = I18N[lang] ? lang : 'en';
    const dict = I18N[LANG];
    document.documentElement.lang = LANG;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = dict[el.getAttribute('data-i18n')];
        if (val == null) return;
        if (val.indexOf('<br') !== -1) el.innerHTML = val;
        else el.textContent = val;
    });
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('is-active', b.dataset.lang === LANG);
    });
    try { localStorage.setItem('lang', LANG); } catch (e) { }
}

/* ===== Scroll-driven sections (zoom + horizontal) ===== */
function clamp(v, a, b) { return Math.min(Math.max(v, a), b); }

function initScrollScenes() {
    const enabled = window.matchMedia('(min-width: 821px)').matches
        && window.matchMedia('(hover: hover)').matches
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!enabled) return;

    const zoom = document.querySelector('.zoom-pin');
    const screen = zoom && zoom.querySelector('.screen');
    const hpin = document.querySelector('.h-pin');
    const hsticky = hpin && hpin.querySelector('.h-sticky');
    const htrack = hpin && hpin.querySelector('.h-track');

    function layout() {
        if (hpin && htrack) {
            const dist = Math.max(0, htrack.scrollWidth - window.innerWidth);
            hpin.style.height = (window.innerHeight + dist) + 'px';
        }
    }

    let ticking = false;
    function update() {
        ticking = false;
        const vh = window.innerHeight;

        if (zoom && screen) {
            const r = zoom.getBoundingClientRect();
            const p = clamp(-r.top / (zoom.offsetHeight - vh), 0, 1);
            // ease-in: slow at first, then accelerates into the screen
            const eased = Math.pow(p, 2.4);
            screen.style.setProperty('--p', eased.toFixed(4));
        }
        if (hpin && htrack) {
            const r = hpin.getBoundingClientRect();
            const dist = Math.max(0, htrack.scrollWidth - window.innerWidth);
            const p = clamp(-r.top / (hpin.offsetHeight - vh), 0, 1);
            htrack.style.transform = 'translate3d(' + (-p * dist).toFixed(1) + 'px,0,0)';
        }
    }
    function onScroll() {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    layout();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { layout(); update(); });
    window.addEventListener('load', () => { layout(); update(); });
}

/* ===== Active section → header blend already handles color; also swap body bg ===== */
function initThemeWatch() {
    const sections = document.querySelectorAll('.theme');
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && e.intersectionRatio > 0.5) {
                const name = e.target.getAttribute('data-theme-name');
                document.body.setAttribute('data-theme', name);
                const bg = getComputedStyle(e.target).backgroundColor;
                document.body.style.backgroundColor = bg;
            }
        });
    }, { threshold: [0.5] });
    sections.forEach(s => io.observe(s));
}

/* ===== Project modal ===== */
function initModal() {
    const modal = document.getElementById('modal');
    if (!modal) return;
    const img = document.getElementById('modalImg');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const link = document.getElementById('modalLink');
    const timeEl = document.getElementById('modalTime');
    const priceEl = document.getElementById('modalPrice');
    let lastFocus = null;

    function open(panel) {
        const titleEl = panel.querySelector('.hpanel__title');
        title.textContent = titleEl ? titleEl.textContent : '';
        img.src = panel.getAttribute('data-img') || '';
        img.alt = title.textContent;
        const dk = panel.getAttribute('data-desckey');
        desc.textContent = (dk && I18N[LANG][dk]) || '';
        const prefix = dk ? dk.replace('_desc', '') : '';
        if (timeEl) timeEl.textContent = I18N[LANG][prefix + '_time'] || '';
        if (priceEl) priceEl.textContent = I18N[LANG][prefix + '_price'] || '';
        const href = panel.getAttribute('data-link') || '#';
        link.href = href;
        link.style.display = (href && href !== '#') ? '' : 'none';
        lastFocus = document.activeElement;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        modal.querySelector('.modal__close').focus();
    }
    function close() {
        modal.hidden = true;
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll('.hpanel').forEach(p => {
        p.addEventListener('click', () => open(p));
    });
    modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) close();
    });
}

/* ===== Scroll progress bar ===== */
function initProgress() {
    const bar = document.getElementById('progress');
    if (!bar) return;
    let ticking = false;
    function update() {
        ticking = false;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
}

/* ===== Q&A accordion ===== */
function initFaq() {
    document.querySelectorAll('.qa').forEach(item => {
        const btn = item.querySelector('.qa__q');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const open = item.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            Sound.beep(open ? 520 : 400, 0.05);
        });
    });
}

/* ===== Reveal on scroll ===== */
function initReveal() {
    const items = document.querySelectorAll('.about-grid, .section__head, .scatter, .games-feat, .games-rest, .qa-list, .hero__foot');
    items.forEach(el => el.classList.add('reveal'));
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
}

/* ===== Hero: split into masked letters, reveal on cue ===== */
function buildHero() {
    const title = document.querySelector('.hero__title');
    if (!title) return;
    title.classList.remove('is-in');
    title.querySelectorAll('[data-i18n]').forEach(line => {
        const text = line.textContent;
        line.classList.add('line');
        line.textContent = '';
        for (const chr of text) {
            const s = document.createElement('span');
            s.className = 'ch' + (chr === ' ' ? ' sp' : '');
            if (chr !== ' ') s.textContent = chr;
            line.appendChild(s);
        }
    });
    let i = 0;
    title.querySelectorAll('.ch').forEach(ch => {
        ch.style.transitionDelay = (i * 0.028).toFixed(3) + 's';
        i++;
    });
}
function revealHero() {
    const title = document.querySelector('.hero__title');
    if (title) requestAnimationFrame(() => title.classList.add('is-in'));
}

/* ===== Sound (tiny retro beeps + mute) ===== */
const Sound = {
    ctx: null, muted: false,
    init() {
        try { this.muted = localStorage.getItem('muted') === '1'; } catch (e) { }
        const btn = document.getElementById('soundBtn');
        if (!btn) return;
        btn.classList.toggle('is-muted', this.muted);
        btn.setAttribute('aria-pressed', this.muted ? 'true' : 'false');
        btn.addEventListener('click', () => {
            this.muted = !this.muted;
            btn.classList.toggle('is-muted', this.muted);
            btn.setAttribute('aria-pressed', this.muted ? 'true' : 'false');
            try { localStorage.setItem('muted', this.muted ? '1' : '0'); } catch (e) { }
            if (!this.muted) this.beep(660, 0.05);
        });
    },
    beep(freq, dur) {
        if (this.muted) return;
        try {
            if (!this.ctx) {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return;
                this.ctx = new AC();
            }
            const c = this.ctx;
            if (c.state === 'suspended') c.resume();
            const o = c.createOscillator(), g = c.createGain();
            o.type = 'square';
            o.frequency.value = freq || 600;
            const t = c.currentTime;
            g.gain.setValueAtTime(0.05, t);
            g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.06));
            o.connect(g); g.connect(c.destination);
            o.start(t); o.stop(t + (dur || 0.06) + 0.02);
        } catch (e) { }
    }
};
function initSound() {
    Sound.init();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.cart').forEach(c => {
        c.addEventListener('click', () => {
            Sound.beep(720, 0.05);
            if (reduce) return;
            c.classList.remove('inserting');
            void c.offsetWidth;                 // restart the animation
            c.classList.add('inserting');
            setTimeout(() => c.classList.remove('inserting'), 440);
        });
    });
}

/* ===== Custom cursor (dot + ring, grows on clickables, label on projects) ===== */
function initCursor() {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cur = document.getElementById('cursor');
    const label = document.getElementById('cursorLabel');
    if (!cur || !fine || reduce) return;
    document.body.classList.add('has-cursor');

    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    (function loop() {
        x += (tx - x) * 0.4;
        y += (ty - y) * 0.4;
        cur.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
        requestAnimationFrame(loop);
    })();
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

    const clickable = 'a, button, .hpanel, .cart, .chip, .qa__q, .lang-btn, .sound-btn';
    document.addEventListener('mouseover', e => {
        // elements that get a big ring + text label
        const labelled = e.target.closest('.hpanel, .cart, .chip');
        const hov = e.target.closest(clickable);
        document.body.classList.toggle('cursor-open', !!labelled);
        document.body.classList.toggle('cursor-hover', !!hov && !labelled);
        if (labelled && label) {
            let key = 'cursor_open';
            if (labelled.classList.contains('cart')) key = 'cursor_play';
            else if (labelled.classList.contains('chip')) key = 'open_link';
            label.textContent = I18N[LANG][key] || 'Open ↗';
        }
    });
}

/* ===== Magnetic buttons ===== */
function initMagnetic() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'transform .12s ease-out';   // tight while following
        });
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const mx = e.clientX - (r.left + r.width / 2);
            const my = e.clientY - (r.top + r.height / 2);
            btn.style.transform = 'translate(' + (mx * 0.3).toFixed(1) + 'px,' + (my * 0.4).toFixed(1) + 'px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transition = 'transform .6s cubic-bezier(.22,.61,.36,1)';   // slow, springy return
            btn.style.transform = '';
        });
    });
}

/* ===== Cartridge 3D tilt toward cursor ===== */
function initTilt() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.cart').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = 'perspective(700px) rotateX(' + (-py * 8).toFixed(2) +
                'deg) rotateY(' + (px * 8).toFixed(2) + 'deg) translateY(-8px)';
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

/* ===== Smooth inertial scroll (keeps native scroll position, sticky-safe) ===== */
function initSmoothScroll() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // our per-frame scrollTo must be instant, otherwise CSS smooth fights it
    document.documentElement.style.scrollBehavior = 'auto';

    let target = window.scrollY, cur = target, animating = false, factor = 0.18;
    const maxY = () => document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener('wheel', e => {
        if (e.ctrlKey) return;                                   // let pinch-zoom pass
        if (document.body.style.overflow === 'hidden') return;   // modal open
        e.preventDefault();
        const d = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
        factor = 0.11;                                          // gentle, smooth glide
        target = clamp(target + d * 1.05, 0, maxY());
        animating = true;
    }, { passive: false });

    // route in-page anchor links through the same engine (gentle, controlled speed)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href').slice(1);
            if (!id) return;
            const el = document.getElementById(id);
            if (!el) return;
            e.preventDefault();
            factor = 0.075;                                     // slow, smooth glide
            target = clamp(el.getBoundingClientRect().top + window.scrollY - 8, 0, maxY());
            animating = true;
        });
    });

    (function loop() {
        if (animating) {
            cur += (target - cur) * factor;
            if (Math.abs(target - cur) < 0.5) { cur = target; animating = false; }
            window.scrollTo(0, cur);
        } else {
            cur = window.scrollY;
            target = cur;
        }
        requestAnimationFrame(loop);
    })();
}

/* ===== Preloader (0 -> 100, then reveal hero) ===== */
function initPreloader(done) {
    const pre = document.getElementById('preloader');
    const num = document.getElementById('preloaderNum');
    if (!pre) { if (done) done(); return; }
    document.body.classList.add('loading');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pre.style.display = 'none';
        document.body.classList.remove('loading');
        if (done) done();
        return;
    }

    let n = 0;
    const iv = setInterval(() => {
        n += Math.max(1, Math.round((100 - n) * 0.12));
        if (n >= 100) { n = 100; clearInterval(iv); finish(); }
        if (num) num.textContent = n;
    }, 60);

    function finish() {
        setTimeout(() => {
            pre.classList.add('is-done');
            document.body.classList.remove('loading');
            setTimeout(() => { pre.style.display = 'none'; }, 850);
            if (done) done();
        }, 250);
    }
}

/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', () => {
    let saved = 'en';
    try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
    applyLang(saved);
    buildHero();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.lang === LANG) return;
            document.body.classList.add('lang-swapping');
            setTimeout(() => {
                applyLang(btn.dataset.lang);
                buildHero();
                const t = document.querySelector('.hero__title');
                if (t) t.classList.add('is-in');
                document.body.classList.remove('lang-swapping');
            }, 190);
        });
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initSmoothScroll();
    initProgress();
    initScrollScenes();
    initThemeWatch();
    initModal();
    initFaq();
    initReveal();
    initCursor();
    initMagnetic();
    initTilt();
    initSound();

    initPreloader(() => revealHero());
});
