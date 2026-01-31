const menuBtn = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
});

document.querySelectorAll('.header-content a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'srushti_veer_resume.pdf';
    link.download = 'srushti_veer_resume.pdf';
    link.click();
}
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // stop normal form submit

    const form = e.target;
    const data = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("✅ Thank you! Your message has been sent successfully.");
            form.reset(); // clear form after submission
        } else {
            alert("⚠️ Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("❌ Network error. Please check your internet connection.");
    }
});
const aboutSection = document.querySelector('#About');
const aboutHeading = document.querySelector('.about-heading');
const aboutImage = document.querySelector('.about-image');
const aboutInfo = document.querySelector('.about-info');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class
            aboutHeading.classList.add('animate');
            aboutImage.classList.add('animate');
            aboutInfo.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);
