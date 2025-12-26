// Affirmations Database
const affirmations = {
    confidence: [
        "I am confident in my abilities and trust my decisions.",
        "I radiate confidence, self-respect, and inner harmony.",
        "I believe in myself and my power to succeed.",
        "Every challenge I face is an opportunity to grow and improve.",
        "I am worthy of my dreams and I have the power to achieve them.",
        "My confidence grows when I step outside of my comfort zone.",
        "I trust my intuition and make wise decisions.",
        "I am becoming a better version of myself every single day."
    ],
    gratitude: [
        "I am grateful for all the abundance in my life.",
        "Every day, I find new reasons to be thankful.",
        "I appreciate the simple joys that surround me.",
        "Gratitude fills my heart and shapes my reality.",
        "I am thankful for my journey and all its lessons.",
        "The more grateful I am, the more reasons I find to be grateful.",
        "I appreciate myself and all that I do.",
        "Today, I choose to see the beauty in everything around me."
    ],
    strength: [
        "I am strong, resilient, and brave.",
        "I have overcome challenges before, and I can do it again.",
        "My strength comes from within, and it is limitless.",
        "I am powerful beyond measure.",
        "Every obstacle I face makes me stronger and wiser.",
        "I have the courage to create positive change in my life.",
        "I am resilient, and I bounce back from setbacks quickly.",
        "My inner strength guides me through difficult times."
    ],
    love: [
        "I love and accept myself exactly as I am.",
        "I deserve love, kindness, and compassion.",
        "I am worthy of deep, unconditional love.",
        "I treat myself with kindness and respect.",
        "My self-love is a powerful force in my life.",
        "I am enough, just as I am, right now.",
        "I honor my feelings and give myself permission to feel.",
        "I embrace my imperfections as part of my unique beauty."
    ],
    success: [
        "Success flows to me easily and effortlessly.",
        "I am capable of achieving anything I set my mind to.",
        "Every day brings me closer to my goals.",
        "I attract opportunities that align with my purpose.",
        "My potential is unlimited, and I am ready to embrace it.",
        "I celebrate every step forward on my journey.",
        "I am worthy of success and prosperity.",
        "My hard work and dedication are paying off."
    ]
};

// State Management
let currentCategory = 'all';
let currentAffirmation = null;
let dailyCount = 0;
let favorites = [];
let streak = 1;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    updateStats();
    setupEventListeners();
    setupConfetti();
});

// Load data from localStorage
function loadFromStorage() {
    const saved = localStorage.getItem('iAppreciateYou');
    if (saved) {
        const data = JSON.parse(saved);
        favorites = data.favorites || [];
        streak = data.streak || 1;
        
        // Check if it's a new day
        const lastDate = data.lastDate;
        const today = new Date().toDateString();
        
        if (lastDate === today) {
            dailyCount = data.dailyCount || 0;
        } else {
            dailyCount = 0;
            // Update streak
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastDate === yesterday.toDateString()) {
                streak++;
            } else if (lastDate !== today) {
                streak = 1;
            }
        }
    }
    updateFavoritesList();
}

// Save data to localStorage
function saveToStorage() {
    const data = {
        favorites,
        dailyCount,
        streak,
        lastDate: new Date().toDateString()
    };
    localStorage.setItem('iAppreciateYou', JSON.stringify(data));
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('new-affirmation-btn').addEventListener('click', showNewAffirmation);
    document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);
    document.getElementById('share-btn').addEventListener('click', shareAffirmation);
    
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            showNewAffirmation();
        });
    });
}

// Get random affirmation
function getRandomAffirmation() {
    let pool = [];
    
    if (currentCategory === 'all') {
        // Combine all affirmations
        Object.values(affirmations).forEach(arr => {
            pool = pool.concat(arr.map((text, index) => ({
                text,
                category: Object.keys(affirmations).find(key => affirmations[key] === arr)
            })));
        });
    } else {
        pool = affirmations[currentCategory].map(text => ({
            text,
            category: currentCategory
        }));
    }
    
    return pool[Math.floor(Math.random() * pool.length)];
}

// Show new affirmation
function showNewAffirmation() {
    currentAffirmation = getRandomAffirmation();
    
    const textElement = document.getElementById('affirmation-text');
    const badgeElement = document.getElementById('category-badge');
    const card = document.querySelector('.affirmation-card');
    
    // Add animation
    card.classList.add('bounce');
    setTimeout(() => card.classList.remove('bounce'), 600);
    
    // Update text with fade animation
    textElement.style.opacity = '0';
    setTimeout(() => {
        textElement.textContent = currentAffirmation.text;
        textElement.style.opacity = '1';
    }, 200);
    
    // Update badge
    badgeElement.textContent = currentCategory === 'all' 
        ? currentAffirmation.category.charAt(0).toUpperCase() + currentAffirmation.category.slice(1)
        : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    
    // Update favorite button
    updateFavoriteButton();
    
    // Update stats
    dailyCount++;
    updateStats();
    saveToStorage();
    
    // Trigger confetti
    triggerConfetti();
}

// Toggle favorite
function toggleFavorite() {
    if (!currentAffirmation) return;
    
    const index = favorites.findIndex(f => f.text === currentAffirmation.text);
    const btn = document.getElementById('favorite-btn');
    
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        btn.classList.add('shake');
        setTimeout(() => btn.classList.remove('shake'), 500);
    } else {
        favorites.push(currentAffirmation);
        btn.classList.add('active');
        btn.classList.add('bounce');
        setTimeout(() => btn.classList.remove('bounce'), 600);
        triggerConfetti();
    }
    
    updateStats();
    updateFavoritesList();
    saveToStorage();
}

// Update favorite button state
function updateFavoriteButton() {
    if (!currentAffirmation) return;
    
    const btn = document.getElementById('favorite-btn');
    const isFavorite = favorites.some(f => f.text === currentAffirmation.text);
    
    if (isFavorite) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

// Update stats display
function updateStats() {
    document.getElementById('daily-count').textContent = dailyCount;
    document.getElementById('favorite-count').textContent = favorites.length;
    document.getElementById('streak-count').textContent = streak;
}

// Update favorites list
function updateFavoritesList() {
    const listElement = document.getElementById('favorites-list');
    
    if (favorites.length === 0) {
        listElement.innerHTML = '<p class="empty-state">You haven\'t saved any favorites yet. Click the heart to save affirmations you love!</p>';
        return;
    }
    
    listElement.innerHTML = favorites.map((fav, index) => `
        <div class="favorite-item">
            <span class="favorite-text">${fav.text}</span>
            <button class="remove-favorite-btn" onclick="removeFavorite(${index})" aria-label="Remove favorite">✕</button>
        </div>
    `).join('');
}

// Remove favorite
function removeFavorite(index) {
    favorites.splice(index, 1);
    updateStats();
    updateFavoritesList();
    updateFavoriteButton();
    saveToStorage();
}

// Share affirmation
function shareAffirmation() {
    const text = currentAffirmation 
        ? `${currentAffirmation.text}\n\n- Shared from iAppreciateYou 💖`
        : "Check out iAppreciateYou for daily positive affirmations! 💖";
    
    if (navigator.share) {
        navigator.share({
            title: 'iAppreciateYou',
            text: text
        }).catch(() => {
            copyToClipboard(text);
        });
    } else {
        copyToClipboard(text);
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Show feedback
    const btn = document.getElementById('share-btn');
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// Confetti System
let confettiCanvas, confettiCtx, confettiParticles = [];

function setupConfetti() {
    confettiCanvas = document.getElementById('confetti-canvas');
    confettiCtx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    });
    
    animateConfetti();
}

function triggerConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#fa709a', '#fee140'];
    
    for (let i = 0; i < 50; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: -10,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles = confettiParticles.filter(particle => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;
        
        confettiCtx.save();
        confettiCtx.translate(particle.x, particle.y);
        confettiCtx.rotate(particle.rotation * Math.PI / 180);
        confettiCtx.fillStyle = particle.color;
        confettiCtx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        confettiCtx.restore();
        
        return particle.y < confettiCanvas.height;
    });
    
    requestAnimationFrame(animateConfetti);
}
