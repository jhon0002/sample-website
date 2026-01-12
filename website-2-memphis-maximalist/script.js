// Animate shapes on mouse move
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const offsetX = (mouseX - 0.5) * 50 * (index % 2 === 0 ? 1 : -1);
        const offsetY = (mouseY - 0.5) * 50;
        const currentTransform = shape.style.transform || '';
        const baseTransform = currentTransform.includes('rotate') 
            ? currentTransform.split('translate')[0] 
            : '';
        shape.style.transform = `${baseTransform} translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Interactive feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const color = this.getAttribute('data-color');
        const colorMap = {
            yellow: '#FFE500',
            pink: '#FF00FF',
            blue: '#0066FF',
            green: '#00FFCC'
        };
        this.style.color = colorMap[color] || '#000';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.color = '#000';
    });
});

// Showcase item interactions
document.querySelectorAll('.showcase-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s ease';
        }, 10);
    });
});

// Scroll animations
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

document.querySelectorAll('.feature-card, .showcase-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Button click handler
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.querySelector('.features').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

// Parallax effect for background shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
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
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);
