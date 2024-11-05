// Typing Effect
const text = "Hello! I'm a student in universitas pertamina and learning web developer, I have experience in HTML, CSS, JavaScript, and various modern web technologies.";
const typingEffect = document.getElementById('typing-effect');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingEffect.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.addEventListener('load', typeWriter);

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// Theme Toggle with Local Storage
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }
});

// Fade-in Effect for Sections
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));

// Click Effect for Hobby Cards
document.querySelectorAll('.hobby-card').forEach(card => {
    card.addEventListener('click', function () {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

const formData = [
    { label: "Name", id: "name", errorMessage: "Please fill out your name!" },
    { label: "Email", id: "email", errorMessage: "Please enter your email!" },
    { label: "Phone Number", id: "phone", errorMessage: "Please check your number!" },
    { label: "Message", id: "message", errorMessage: "Don't forget to write a message!" }
];

formData.forEach(field => {
    const input = document.getElementById(field.id);
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.setAttribute("id", `${field.id}Error`);
    errorMessage.textContent = field.errorMessage;
    errorMessage.style.display = "none";
    
    input.insertAdjacentElement('afterend', errorMessage);
});

const validateForm = () => {
    let formIsValid = true;
    formData.forEach(field => {
        const input = document.getElementById(field.id);
        const errorMessage = document.getElementById(`${field.id}Error`);

        if (input.value.trim() === "") {
            errorMessage.style.display = "block";
            formIsValid = false;
        } else {
            errorMessage.style.display = "none";
        }
    });
    return formIsValid;
};

function submitForm() {
    if (validateForm()) {
        alert("Form submitted successfully!");
        formData.forEach(field => document.getElementById(field.id).value = "");
    }
}



