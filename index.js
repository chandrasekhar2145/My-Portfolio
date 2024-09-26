const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');

function toggleMenu() {
    menu.classList.toggle('translate-y-0');
    menu.classList.toggle('-translate-y');
}

hamburger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);




const words = ["FRESHER", "FRONT-END DEVELOPER", "WEB DEVELOPER", "FULL STACK DEVELOPER"];
let wordIndex = 0;
let charIndex = 0;

const typedText = document.querySelector(".typed-text");

function typeWords() {
    if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex][charIndex++];
        setTimeout(typeWords, 150);
    } else {
        setTimeout(eraseWords, 1000);
    }
}

function eraseWords() {
    if (charIndex > 0) {
        typedText.textContent = words[wordIndex].substring(0, --charIndex);
        setTimeout(eraseWords, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWords, 500);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWords, 500);
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedTexts = document.querySelectorAll('.animated-text');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        }
    );

    animatedTexts.forEach((text) => observer.observe(text));
});



const text = document.querySelector('.text-animation');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;


    const triggerPoint = windowHeight / 2;

    if (scrollPosition > triggerPoint) {
        // text.style.transform = 'translateY(0)';
    } else {
        // text.style.transform = 'translateY(100px)';
    }
});

const customPointer = document.querySelector('.custom-pointer');

document.addEventListener('mousemove', (e) => {
    // Update the position of the custom pointer
    customPointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});