const audio = document.getElementById("radioStream");
const playBtn = document.getElementById("playBtn");
const icon = playBtn.querySelector("i");
const player = document.getElementById("radioPlayer");
const toggleIcon = document.getElementById("toggleIcon");
let isPlaying = false;

const headerIcon = document.getElementById("headerPlayIcon");
const themeIcon = document.getElementById("themeIcon");

function toggleRadio() {
  if (isPlaying) {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    if(headerIcon) {
        headerIcon.classList.remove("fa-pause");
        headerIcon.classList.add("fa-play");
    }
    isPlaying = false;
  } else {
    audio.play().catch((e) => console.log("Erro ao reproduzir:", e));
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    if(headerIcon) {
        headerIcon.classList.remove("fa-play");
        headerIcon.classList.add("fa-pause");
    }
    isPlaying = true;
  }
}



function toggleTheme() {
    const body = document.body;
    const isLight = body.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        body.removeAttribute('data-theme');
        // No icon swap needed for custom image
    } else {
        body.setAttribute('data-theme', 'light');
    }
}

function setVolume(val) {
  audio.volume = val;
}

function requestSong() {
  alert(
    "Sistema de pedidos em desenvolvimento! Em breve você poderá pedir suas músicas favoritas."
  );
}

function togglePlayerView() {
  player.classList.toggle("minimized");
  if (player.classList.contains("minimized")) {
    toggleIcon.classList.remove("fa-chevron-down");
    toggleIcon.classList.add("fa-radio");
  } else {
    toggleIcon.classList.remove("fa-radio");
    toggleIcon.classList.add("fa-chevron-down");
  }
}

function vote(type) {
  // Placeholder for vote logic
  const btns = document.querySelectorAll(".vote-btn");
  btns.forEach((b) => {
    b.classList.remove("liked", "disliked");
  });

  if (type === "like") {
    event.target.closest(".vote-btn").classList.add("liked");
    console.log("Curtiu o locutor!");
  } else {
    event.target.closest(".vote-btn").classList.add("disliked");
    console.log("Descurtiu o locutor!");
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    navLinks.classList.toggle('nav-active');
    
    // Change icon based on state
    if (navLinks.classList.contains('nav-active')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn i');
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });
});

// -- Reverted Mobile Menu (Function removed) --

// Fetch Habbo News
async function fetchLatestNews() {
    const newsGrid = document.getElementById('newsGrid');
    // Using a proxy or direct fetch? Habbo API often has CORS. 
    // Trying direct fetch first. If it fails, I'll need a fallback or CORS proxy.
    // NOTE: Direct browser fetch to 'www.habbo.com.br' often blocked by CORS.
    // For this prototype, I will try to fetch. If error, I will show mock data to ensure UI works for the user.
    const apiUrl = 'https://www.habbo.com.br/api/public/news';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        
        // Filter/slice to 5 items
        const latestNews = data.slice(0, 5);
        renderNews(latestNews);

    } catch (error) {
        console.warn('CORS/API Error fetching news, using fallback data:', error);
        // Fallback Mock Data so the user sees the layout
        const LOGO_URL = "https://raw.githubusercontent.com/RZSISTEMAs/one-habbo/refs/heads/master/img/logo_transparente-removebg-preview.png";
        
        const mockNews = [
            { title: "Bem-vindos ao One Habbo!", summary: "O melhor fã-site chegou.", image: LOGO_URL, date: new Date().toISOString() },
            { title: "Evento de Inauguração", summary: "Venha participar da nossa festa.", image: LOGO_URL, date: new Date().toISOString() },
            { title: "Entrevista com DJ_Richard", summary: "Conheça a lenda.", image: LOGO_URL, date: new Date().toISOString() },
            { title: "Novos Emblemas Disponíveis", summary: "Saiba como pegar.", image: LOGO_URL, date: new Date().toISOString() },
            { title: "Manutenção Programada", summary: "Melhorias no servidor.", image: LOGO_URL, date: new Date().toISOString() }
        ];
        renderNews(mockNews);
    }
}

function renderNews(newsList) {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = ''; // Clear loading
    const LOGO_URL = "https://raw.githubusercontent.com/RZSISTEMAs/one-habbo/refs/heads/master/img/logo_transparente-removebg-preview.png";

    newsList.forEach(item => {
        // Habbo API structure might vary, adapting standard keys or mock keys
        // If API returns 'images', 'title', 'summary', 'published'
        const title = item.title || "Sem título";
        const summary = item.summary || item.description || "Clique para ler mais.";
        // Habbo sometimes returns images as lists or distinct fields. Adjusting...
        // For mock/simple usage:
        const image = item.image || item.images?.[0]?.url || LOGO_URL; 
        const link = item.path ? `https://habbo.com.br${item.path}` : '#';
        const date = new Date(item.date || item.published || Date.now()).toLocaleDateString('pt-BR');

        const card = document.createElement('a');
        card.className = 'news-card';
        card.href = link;
        card.target = '_blank'; // Open in new tab if external
        
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="news-image" onerror="this.src='${LOGO_URL}'">
            <div class="news-content">
                <div class="news-title">${title}</div>
                <div class="news-date"><i class="far fa-clock"></i> ${date}</div>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    fetchLatestNews();
});
