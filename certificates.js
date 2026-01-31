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

const certificates = [
  {
    image: "images/certificate-1.png",
    name: "Python for Data Science , AI & Development - IBM",
    description: "Learned Python, data science basics, and AI development with IBM."
  },
  {
    image: "images/certificate-2.png",
    name: "Data Analytics Job Simulation - Deloitte Australia",
    description: "Hands-on experience in cleaning, analyzing, and interpreting data."
  },
  {
    image: "images/certificate-3.png",
    name: "Data Visualisation - Tata Group",
    description: "Built skills in data visualization and storytelling for business insights."
  },
  {
    image: "images/certificate-4.png",
    name: "Graphic Design Essentials - Canva",
    description: "Covered design basics like color, typography, and layouts using Canva."
  },
  {
    image: "images/certificate-5.png",
    name: "Introduction to Prompt Engineering for Generative AI - LinkedIn",
    description: "Learned prompt engineering techniques to work effectively with AI."
  },
  {
    image: "images/certificate-6.png",
    name: "Power BI for Beginners - Simplilearn",
    description: "Created interactive dashboards and reports with Microsoft Power BI."
  }
];

const container = document.getElementById("certificates-container");

certificates.forEach(cert => {
  const certDiv = document.createElement("div");
  certDiv.className = "certificate";
  certDiv.innerHTML = `
    <img src="${cert.image}" alt="${cert.name}" class="certificate-image">
    <p class="certificate-name">${cert.name}</p>
    <p class="certificate-description">${cert.description}</p>
  `;
  container.appendChild(certDiv);
});

