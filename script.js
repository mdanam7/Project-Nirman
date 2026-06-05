// ============================================
// Nirman — Spatial Architecture Platform
// Complex multi-layer interactive engine
// ============================================

'use strict';

// ============================================
// DATA LAYER
// ============================================

const heritageData = [
    {
        id: 'somapura',
        era: '8th Century',
        title: 'Somapura Mahavihara',
        desc: 'One of the largest Buddhist monasteries in the Indian subcontinent. A UNESCO World Heritage site showcasing terracotta art and symmetric architecture.',
        location: 'Naogaon, Rajshahi',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop',
        icon: 'fas fa-gopuram',
        coordinates: { x: 100, y: 140 }
    },
    {
        id: 'lalbagh',
        era: '17th Century',
        title: 'Lalbagh Fort',
        desc: 'An incomplete 17th-century Mughal fort complex in Dhaka. Features intricate carvings, a mosque, and the tomb of Pari Bibi.',
        location: 'Dhaka',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
        icon: 'fas fa-fort-awesome',
        coordinates: { x: 180, y: 80 }
    },
    {
        id: 'sixty-dome',
        era: '15th Century',
        title: 'Sixty Dome Mosque',
        desc: 'The largest mosque from the Sultanate period, with 60 pillars and 77 low domes. A masterpiece of medieval Bengali architecture.',
        location: 'Bagerhat, Khulna',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
        icon: 'fas fa-mosque',
        coordinates: { x: 150, y: 200 }
    },
    {
        id: 'mahasthangarh',
        era: '3rd Century BCE',
        title: 'Mahasthangarh',
        desc: 'The earliest urban archaeological site in Bangladesh. Continuously inhabited for over 2,500 years with layers of civilization.',
        location: 'Bogra, Rajshahi',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
        icon: 'fas fa-monument',
        coordinates: { x: 120, y: 280 }
    },
    {
        id: 'kantanagar',
        era: '18th Century',
        title: 'Kantanagar Temple',
        desc: 'A stunning Hindu temple in Rangpur with intricate terracotta panels depicting scenes from the Ramayana and Mahabharata.',
        location: 'Rangpur',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
        icon: 'fas fa-place-of-worship',
        coordinates: { x: 120, y: 280 }
    },
    {
        id: 'ahsan-manzil',
        era: '19th Century',
        title: 'Ahsan Manzil',
        desc: 'The pink palace on the Buriganga River. Former residence of the Nawabs of Dhaka, now a museum showcasing aristocratic life.',
        location: 'Dhaka',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
        icon: 'fas fa-landmark',
        coordinates: { x: 180, y: 80 }
    }
];

const artisans = [
    {
        name: 'Abdul Karim',
        craft: 'Terracotta Sculpture',
        location: 'Bagerhat',
        rating: 4.9,
        projects: 47,
        tags: ['Terracotta', 'Restoration', 'Traditional'],
        avatar: '👨‍🎨'
    },
    {
        name: 'Rahima Begum',
        craft: 'Nakshi Katha Embroidery',
        location: 'Jamalpur',
        rating: 4.8,
        projects: 32,
        tags: ['Textile', 'Heritage', 'Handloom'],
        avatar: '👩‍🎨'
    },
    {
        name: 'Mohammad Ali',
        craft: 'Brass Metalwork',
        location: 'Dhamrai',
        rating: 4.7,
        projects: 56,
        tags: ['Metalwork', 'Brass', 'Traditional'],
        avatar: '👨‍🏭'
    },
    {
        name: 'Shahana Akter',
        craft: 'Bamboo Architecture',
        location: 'Chittagong Hill Tracts',
        rating: 4.9,
        projects: 23,
        tags: ['Bamboo', 'Sustainable', 'Indigenous'],
        avatar: '👩‍🌾'
    },
    {
        name: 'Kamal Hossain',
        craft: 'Stone Carving',
        location: 'Sylhet',
        rating: 4.6,
        projects: 38,
        tags: ['Stone', 'Sculpture', 'Monument'],
        avatar: '👨‍🎨'
    },
    {
        name: 'Fatema Khatun',
        craft: 'Mud House Construction',
        location: 'Rajshahi',
        rating: 4.8,
        projects: 19,
        tags: ['Adobe', 'Eco-friendly', 'Rural'],
        avatar: '👩‍🎨'
    }
];

const marketData = [
    { supplier: 'Shah Cement Ltd', material: 'Portland Composite Cement', category: 'cement', price: 520, unit: 'per bag (50kg)', rating: 4.8, stock: 'In Stock' },
    { supplier: 'Bangladesh Steel', material: '60 Grade Deformed Bar', category: 'steel', price: 78000, unit: 'per ton', rating: 4.7, stock: 'In Stock' },
    { supplier: 'Mir Ceramic', material: 'Premium Wall Tiles 12x18', category: 'tiles', price: 45, unit: 'per piece', rating: 4.6, stock: 'Limited' },
    { supplier: 'Rahim Auto Bricks', material: 'Machine-Made Red Brick', category: 'brick', price: 12, unit: 'per piece', rating: 4.5, stock: 'In Stock' },
    { supplier: 'Padma Sand Suppliers', material: 'Sylhet Sand (Medium)', category: 'sand', price: 2800, unit: 'per CFT', rating: 4.4, stock: 'In Stock' },
    { supplier: 'Teak Garden BD', material: 'Burma Teak Wood', category: 'wood', price: 4500, unit: 'per CFT', rating: 4.9, stock: 'Limited' },
    { supplier: 'Seven Rings Cement', material: 'OPC Cement', category: 'cement', price: 495, unit: 'per bag (50kg)', rating: 4.6, stock: 'In Stock' },
    { supplier: 'KSRM Steel', material: '500W Deformed Bar', category: 'steel', price: 82000, unit: 'per ton', rating: 4.8, stock: 'In Stock' },
    { supplier: 'DBL Ceramics', material: 'Floor Tiles 24x24', category: 'tiles', price: 120, unit: 'per piece', rating: 4.5, stock: 'In Stock' },
    { supplier: 'Auto Brick Co.', material: 'Auto Bricks (Perforated)', category: 'brick', price: 15, unit: 'per piece', rating: 4.7, stock: 'In Stock' },
    { supplier: 'Meghna Sand', material: 'Coarse Sand', category: 'sand', price: 2500, unit: 'per CFT', rating: 4.3, stock: 'In Stock' },
    { supplier: 'Tropical Timber', material: 'Gamari Wood', category: 'wood', price: 2200, unit: 'per CFT', rating: 4.5, stock: 'In Stock' }
];

const districtMultipliers = {
    dhaka: { name: 'Dhaka Division', multiplier: 1.0, index: 100 },
    chittagong: { name: 'Chittagong Division', multiplier: 1.05, index: 105 },
    sylhet: { name: 'Sylhet Division', multiplier: 0.95, index: 95 },
    rajshahi: { name: 'Rajshahi Division', multiplier: 0.88, index: 88 },
    khulna: { name: 'Khulna Division', multiplier: 0.90, index: 90 },
    barisal: { name: 'Barisal Division', multiplier: 0.85, index: 85 },
    rangpur: { name: 'Rangpur Division', multiplier: 0.82, index: 82 },
    mymensingh: { name: 'Mymensingh Division', multiplier: 0.87, index: 87 }
};

// Cost breakdown data
const costBreakdown = [
    { label: 'Foundation', percent: 15, color: '#06b6d4' },
    { label: 'Structure', percent: 25, color: '#8b5cf6' },
    { label: 'Walls & Roofing', percent: 20, color: '#f59e0b' },
    { label: 'Finishing', percent: 18, color: '#10b981' },
    { label: 'Electrical', percent: 8, color: '#ef4444' },
    { label: 'Plumbing', percent: 7, color: '#ec4899' },
    { label: 'Misc', percent: 7, color: '#64748b' }
];

// ============================================
// STATE
// ============================================

let state = {
    structureType: 'residential',
    dimensions: { length: 40, width: 30, height: 12, floors: 2 },
    material: 'brick',
    selectedDistrict: 'dhaka',
    currentSection: 'visualize',
    previewRotation: 0,
    theme: 'dark'
};

// Material properties for calculations
const materialProps = {
    brick: { density: 1920, costPerSqft: 1042 },
    concrete: { density: 2400, costPerSqft: 1250 },
    bamboo: { density: 600, costPerSqft: 625 },
    steel: { density: 7850, costPerSqft: 2083 },
    mud: { density: 1700, costPerSqft: 417 },
    wood: { density: 700, costPerSqft: 833 }
};

// ============================================
// GENERATIVE CANVAS BACKGROUND
// ============================================

function initGenerativeCanvas() {
    const canvas = document.getElementById('generativeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let connections = [];
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 120;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#06b6d4';
            ctx.globalAlpha = 0.3;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#06b6d4';
                    ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.15;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
}

// ============================================
// HERO ANIMATIONS
// ============================================

function animateCounter(el, target, duration = 2000) {
    const start = performance.now();
    const startVal = 0;

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startVal + (target - startVal) * eased);
        el.textContent = current.toLocaleString();

        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

function initHeroStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(num => {
                    const target = parseInt(num.dataset.count);
                    animateCounter(num, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const stats = document.querySelector('.hero-stats');
    if (stats) observer.observe(stats);
}

// ============================================
// HERITAGE TIMELINE
// ============================================

function renderHeritageTimeline() {
    const timeline = document.getElementById('heritageTimeline');
    if (!timeline) return;

    timeline.innerHTML = heritageData.map((item, i) => `
        <div class="timeline-node" style="animation-delay: ${i * 0.1}s" onclick="openHeritageDetail('${item.id}')">
            <div class="timeline-dot">
                <i class="${item.icon}" style="color: var(--heritage);"></i>
            </div>
            <div class="timeline-era">${item.era}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-desc">${item.desc.substring(0, 100)}...</p>
            <div class="timeline-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
        </div>
    `).join('');
}

function openHeritageDetail(id) {
    const item = heritageData.find(h => h.id === id);
    if (!item) return;

    const panel = document.getElementById('heritageDetail');
    const visual = document.getElementById('detailVisual');
    const info = document.getElementById('detailInfo');

    if (visual) visual.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
    if (info) {
        info.innerHTML = `
            <div class="timeline-era" style="margin-bottom: var(--space-sm);">${item.era}</div>
            <h2 style="font-size: 24px; font-weight: 700; margin-bottom: var(--space-sm);">${item.title}</h2>
            <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: var(--space-md);">${item.desc}</p>
            <div style="display: flex; align-items: center; gap: var(--space-sm); color: var(--text-muted); font-size: 13px;">
                <i class="fas fa-map-marker-alt"></i>
                <span>${item.location}</span>
            </div>
        `;
    }

    if (panel) panel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHeritageDetail() {
    const panel = document.getElementById('heritageDetail');
    if (panel) panel.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// VISUALIZER
// ============================================

function setStructureType(type) {
    state.structureType = type;
    document.querySelectorAll('.viz-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    updatePreview();
}

function setMaterial(material) {
    state.material = material;
    document.querySelectorAll('.material-cell').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.material === material);
    });
    updateCalculations();
}

function updateDimension(key, value) {
    state.dimensions[key] = parseInt(value);
    const displayEl = document.getElementById(`val${key.charAt(0).toUpperCase() + key.slice(1)}`);
    if (displayEl) displayEl.textContent = value;
    updateCalculations();
    updatePreview();
}

function updateCalculations() {
    const { length, width, height, floors } = state.dimensions;
    const area = length * width * floors;
    const volume = length * width * height * floors;
    const props = materialProps[state.material] || materialProps.brick;
    const weight = Math.round((volume * props.density) / 1000);
    const baseCost = Math.round(area * props.costPerSqft);
    const districtMult = districtMultipliers[state.selectedDistrict]?.multiplier || 1;
    const totalCost = Math.round(baseCost * districtMult);

    const areaEl = document.getElementById('readoutArea');
    const volEl = document.getElementById('readoutVolume');
    const weightEl = document.getElementById('readoutWeight');
    const costEl = document.getElementById('readoutCost');

    if (areaEl) areaEl.textContent = `${area.toLocaleString()} sqft`;
    if (volEl) volEl.textContent = `${volume.toLocaleString()} cuft`;
    if (weightEl) weightEl.textContent = `~${weight.toLocaleString()} tons`;
    if (costEl) costEl.textContent = `৳${totalCost.toLocaleString()}`;

    // Update estimate section too
    const estTotal = document.getElementById('estimateTotal');
    if (estTotal) estTotal.textContent = `৳${totalCost.toLocaleString()}`;
}

function updatePreview() {
    const preview = document.getElementById('previewWireframe');
    if (!preview) return;

    const { length, width, height, floors } = state.dimensions;
    const scale = Math.min(200 / Math.max(length, width), 300 / (height * floors));

    let html = '';

    for (let f = 0; f < floors; f++) {
        const yOffset = f * (height * scale * 0.8);
        html += `
            <div class="wireframe-floor" style="
                position: absolute;
                width: ${width * scale}px;
                height: ${length * scale}px;
                border: 2px solid var(--accent);
                opacity: 0.5;
                top: ${yOffset}px;
                left: 50%;
                transform: translateX(-50%) rotateX(60deg) rotateZ(${state.previewRotation}deg);
                transform-style: preserve-3d;
            ">
                <div style="position: absolute; inset: 8px; border: 1px solid var(--accent); opacity: 0.3;"></div>
            </div>
        `;
    }

    // Vertical lines
    html += `
        <div style="
            position: absolute;
            width: 2px;
            height: ${height * floors * scale * 0.8}px;
            background: linear-gradient(180deg, var(--accent) 0%, transparent 100%);
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            opacity: 0.4;
        "></div>
    `;

    preview.innerHTML = html;
    preview.style.transform = `rotateY(${state.previewRotation}deg)`;
}

function rotatePreview(dir) {
    state.previewRotation += dir * 45;
    updatePreview();
}

function resetPreview() {
    state.previewRotation = 0;
    updatePreview();
}

// ============================================
// ESTIMATOR
// ============================================

function selectDistrict(district) {
    state.selectedDistrict = district;

    document.querySelectorAll('.district-node').forEach(node => {
        node.classList.toggle('active', node.dataset.district === district);
    });

    const info = districtMultipliers[district];
    if (!info) return;

    const nameEl = document.getElementById('selectedDistrict');
    const fillEl = document.getElementById('priceIndexFill');
    const valEl = document.getElementById('priceIndexValue');

    if (nameEl) nameEl.textContent = info.name;
    if (fillEl) fillEl.style.width = `${info.index}%`;
    if (valEl) valEl.textContent = info.index === 100 ? 'Base (1.0x)' : `${info.index}% (${info.multiplier}x)`;

    updateCalculations();
}

function renderBreakdownChart() {
    const chart = document.getElementById('breakdownChart');
    const legend = document.getElementById('breakdownLegend');
    if (!chart || !legend) return;

    chart.innerHTML = costBreakdown.map(item => `
        <div class="chart-bar">
            <div class="chart-label">${item.label}</div>
            <div class="chart-track">
                <div class="chart-fill" style="width: ${item.percent}%; background: ${item.color};">
                    <span>${item.percent}%</span>
                </div>
            </div>
        </div>
    `).join('');

    legend.innerHTML = costBreakdown.map(item => `
        <div class="legend-item">
            <div class="legend-dot" style="background: ${item.color};"></div>
            <span>${item.label}</span>
        </div>
    `).join('');
}

// ============================================
// COMMUNITY
// ============================================

function renderCommunity() {
    const grid = document.getElementById('communityGrid');
    if (!grid) return;

    grid.innerHTML = artisans.map((artisan, i) => `
        <div class="artisan-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s forwards; opacity: 0;">
            <div class="artisan-header">
                <div class="artisan-avatar">${artisan.avatar}</div>
                <div class="artisan-meta">
                    <h4>${artisan.name}</h4>
                    <span>${artisan.craft}</span>
                </div>
            </div>
            <div class="artisan-body">
                <div class="artisan-craft">
                    ${artisan.tags.map(tag => `<span class="craft-tag">${tag}</span>`).join('')}
                </div>
                <div class="artisan-location">
                    <i class="fas fa-map-marker-alt" style="font-size: 10px;"></i>
                    <span>${artisan.location}</span>
                </div>
            </div>
            <div class="artisan-footer">
                <div class="artisan-rating">
                    <i class="fas fa-star" style="font-size: 11px;"></i>
                    <span>${artisan.rating}</span>
                </div>
                <div class="artisan-projects">${artisan.projects} projects</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// MARKET
// ============================================

function renderMarket(filter = 'all') {
    const grid = document.getElementById('marketGrid');
    if (!grid) return;

    const filtered = filter === 'all' ? marketData : marketData.filter(m => m.category === filter);

    grid.innerHTML = filtered.map((item, i) => `
        <div class="market-card" style="animation: fadeInUp 0.4s ease ${i * 0.05}s forwards; opacity: 0;">
            <div class="market-supplier">
                <div class="supplier-badge"><i class="fas fa-industry" style="font-size: 11px;"></i></div>
                <span class="supplier-name">${item.supplier}</span>
            </div>
            <div class="market-material">${item.material}</div>
            <div class="market-price">৳${item.price.toLocaleString()}</div>
            <div class="market-unit">${item.unit}</div>
            <div class="market-meta">
                <div class="market-rating">
                    <i class="fas fa-star" style="font-size: 10px;"></i>
                    <span>${item.rating}</span>
                </div>
                <div class="market-stock">${item.stock}</div>
            </div>
        </div>
    `).join('');
}

function filterMarket(category, btn) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderMarket(category);
}

// ============================================
// NAVIGATION & UI
// ============================================

function activateSection(section) {
    state.currentSection = section;
    document.querySelectorAll('.prism-face').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === section);
    });
    scrollToSection(section);
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleSpatialMenu() {
    const menu = document.getElementById('spatialMenu');
    if (menu) {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);

    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.innerHTML = state.theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
}

// Header scroll effect
function handleScroll() {
    const header = document.getElementById('mainHeader');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 20);
    }

    // Parallax for hero planes
    const scrolled = window.scrollY;
    document.querySelectorAll('.hero-plane').forEach(plane => {
        const speed = parseFloat(plane.dataset.speed) || 0;
        plane.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// ============================================
// LOADING SCREEN
// ============================================

function initLoading() {
    const loader = document.getElementById('loadingScreen');
    const fill = document.getElementById('loadingFill');
    if (!loader || !fill) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 400);
        }
        fill.style.width = `${progress}%`;
    }, 150);
}

// ============================================
// INIT
// ============================================

function debounce(fn, ms) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), ms);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initLoading();
    initGenerativeCanvas();
    initHeroStats();
    renderHeritageTimeline();
    renderCommunity();
    renderMarket();
    renderBreakdownChart();
    updateCalculations();
    updatePreview();
    selectDistrict('dhaka');

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => {
            // Filter products if we had a product grid
            console.log('Search:', searchInput.value);
        }, 300));
    }

    // Scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeHeritageDetail();
            const menu = document.getElementById('spatialMenu');
            if (menu && menu.classList.contains('active')) toggleSpatialMenu();
        }
    });
});

// Add fadeInUp keyframe via JS since it's used dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);