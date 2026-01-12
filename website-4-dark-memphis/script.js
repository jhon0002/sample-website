// Bowl interactions
const bowl = document.getElementById('bowl');
let rotation = 0;

bowl.addEventListener('click', function() {
    rotation += 360;
    this.style.transform = `translateX(-50%) rotateY(${rotation}deg)`;
});

// Reaction card interactions
document.querySelectorAll('.reaction-card').forEach(card => {
    card.addEventListener('click', function() {
        const reaction = this.getAttribute('data-reaction');
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Change bowl colors based on reaction
        if (reaction === 'love') {
            document.querySelector('.bowl-top').style.background = 
                'linear-gradient(135deg, #FF0000 0%, #FF69B4 50%, #FFD700 100%)';
        } else if (reaction === 'hate') {
            document.querySelector('.bowl-top').style.background = 
                'linear-gradient(135deg, #000000 0%, #333333 50%, #666666 100%)';
        } else {
            document.querySelector('.bowl-top').style.background = 
                'linear-gradient(135deg, #8B00FF 0%, #00CED1 50%, #FFD700 100%)';
        }
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

document.querySelectorAll('.reaction-card, .philosophy-text, .philosophy-visual').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Parallax effect for background shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgShapes = document.querySelectorAll('.bg-shape');
    
    bgShapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mouse move effect for bowl
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const offsetX = (mouseX - 0.5) * 30;
    const offsetY = (mouseY - 0.5) * 30;
    
    bowl.style.transform = `translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px)`;
});

// Spotlight animation enhancement
const spotlights = document.querySelectorAll('.spotlight');
setInterval(() => {
    spotlights.forEach((spotlight, index) => {
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        spotlight.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}, 3000);

// Pattern animation on bowl
const patterns = document.querySelectorAll('.bowl-pattern');
patterns.forEach((pattern, index) => {
    setInterval(() => {
        const rotation = Math.random() * 360;
        pattern.style.transform = `rotate(${rotation}deg)`;
    }, 2000 + (index * 500));
});
