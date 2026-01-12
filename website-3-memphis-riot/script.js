// Drawer interactions
document.querySelectorAll('.drawer').forEach(drawer => {
    drawer.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

// Furniture piece interactions
const furniture = document.getElementById('furniture');
let isRotating = false;

furniture.addEventListener('click', function() {
    if (!isRotating) {
        isRotating = true;
        this.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            this.style.transform = '';
            isRotating = false;
        }, 600);
    }
});

// Shelf hover effects
document.querySelectorAll('.shelf').forEach(shelf => {
    shelf.addEventListener('mouseenter', function() {
        this.style.transform += ' translateY(-10px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
    
    shelf.addEventListener('mouseleave', function() {
        this.style.transform = this.style.transform.replace(' translateY(-10px)', '');
        this.style.boxShadow = '';
    });
});

// Interactive items
document.querySelectorAll('.interactive-item').forEach(item => {
    item.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        
        if (action === 'color') {
            const colors = ['#0066FF', '#00FF99', '#FF0000', '#FFE500', '#000000'];
            const currentBg = window.getComputedStyle(this).backgroundColor;
            const currentColor = rgbToHex(currentBg);
            let newColor;
            
            do {
                newColor = colors[Math.floor(Math.random() * colors.length)];
            } while (newColor === currentColor);
            
            this.style.background = newColor;
        }
    });
});

// Philosophy items
document.querySelectorAll('.philosophy-item').forEach(item => {
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

document.querySelectorAll('.philosophy-item, .interactive-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgShapes = document.querySelectorAll('.bg-shape');
    
    bgShapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        const currentTransform = shape.style.transform || '';
        const baseTransform = currentTransform.split('translateY')[0] || '';
        shape.style.transform = `${baseTransform} translateY(${scrolled * speed}px)`;
    });
});

// Mouse move parallax for furniture
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const offsetX = (mouseX - 0.5) * 30;
    const offsetY = (mouseY - 0.5) * 30;
    
    furniture.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateY(${offsetX * 0.5}deg)`;
});

// Helper function
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    if (!result) return '#000000';
    return '#' + result.map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

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
