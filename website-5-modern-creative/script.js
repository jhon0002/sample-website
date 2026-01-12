// Smooth scroll
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.querySelector('.services').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById('contactBtn').addEventListener('click', () => {
    document.querySelector('.footer').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe feature items
document.querySelectorAll('.feature-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(item);
});

// Counter animation for stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Floating cards interaction
document.querySelectorAll('.floating-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
    
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s ease';
        }, 10);
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgCircles = document.querySelectorAll('.bg-circle');
    
    bgCircles.forEach((circle, index) => {
        const speed = 0.1 + (index * 0.05);
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mouse move parallax for floating cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const offsetX = (mouseX - 0.5) * 30 * (index % 2 === 0 ? 1 : -1);
        const offsetY = (mouseY - 0.5) * 30;
        const currentTransform = card.style.transform || '';
        const baseTransform = currentTransform.split('translate')[0] || '';
        card.style.transform = `${baseTransform} translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Service card interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);
