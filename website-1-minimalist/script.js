// Smooth scroll on button click
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.querySelector('.philosophy').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

// Intersection Observer for animations
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

// Observe philosophy cards
document.querySelectorAll('.philosophy-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Interactive philosophy cards
document.querySelectorAll('.philosophy-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisuals = document.querySelector('.hero-visuals');
    
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroVisuals.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Mouse move parallax for products
document.addEventListener('mousemove', (e) => {
    const products = document.querySelectorAll('.product-item');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    products.forEach((product, index) => {
        const offsetX = (mouseX - 0.5) * 20 * (index % 2 === 0 ? 1 : -1);
        const offsetY = (mouseY - 0.5) * 20;
        product.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Gallery item interactions
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
