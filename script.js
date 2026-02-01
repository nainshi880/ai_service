const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const btnSubmit = document.querySelector('.btn-submit');
const btnLoader = document.getElementById('btnLoader');

function validateName(name) {
    const nameError = document.getElementById('nameError');
    if (name.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name can only contain letters and spaces';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail(email) {
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateMessage(message) {
    const messageError = document.getElementById('messageError');
    if (message.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        return false;
    }
    messageError.textContent = '';
    return true;
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput.addEventListener('blur', () => {
    validateName(nameInput.value);
});

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) {
        validateName(nameInput.value);
    } else {
        document.getElementById('nameError').textContent = '';
    }
});

emailInput.addEventListener('blur', () => {
    validateEmail(emailInput.value);
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim().length > 0) {
        validateEmail(emailInput.value);
    } else {
        document.getElementById('emailError').textContent = '';
    }
});

messageInput.addEventListener('blur', () => {
    validateMessage(messageInput.value);
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length > 0) {
        validateMessage(messageInput.value);
    } else {
        document.getElementById('messageError').textContent = '';
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const company = document.getElementById('company').value.trim();
    const service = document.getElementById('service').value;
    const message = messageInput.value.trim();
    
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        showFormMessage('Please fix the errors in the form', 'error');
        return;
    }
    
    btnSubmit.classList.add('loading');
    btnSubmit.disabled = true;
    formMessage.style.display = 'none';
    
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const formData = {
            name,
            email,
            company: company || 'N/A',
            service: service || 'N/A',
            message,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form submitted:', formData);
        
        showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        
        contactForm.reset();
        
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
    } finally {
        btnSubmit.classList.remove('loading');
        btnSubmit.disabled = false;
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            statNumber.textContent = '0' + (text.includes('%') ? '%' : '+');
            setTimeout(() => {
                animateCounter(statNumber, number, 2000);
            }, 100);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

console.log('AI Service page loaded successfully!');
