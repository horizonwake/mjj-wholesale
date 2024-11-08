import { priceTable } from "./scripts/pricelist.js";
import { downloadPDF } from "./scripts/pricelist.js";

document.addEventListener('DOMContentLoaded', function () {
    priceTable();

    const images = [
        './assets/images/hero/hero2.jpg',
        './assets/images/hero/hero1.jpg',
        './assets/images/hero/hero.jpg',
        // './assets/images/hero/hero4.jpg',
        // './assets/images/hero/hero3.jpg'
    ];
    let currentIndex = 0;

    const heroSection = document.querySelector('.hero');
    const overlay = document.querySelector('.hero-overlay');

    function changeBackground() {
        overlay.style.backgroundImage = `url('${images[currentIndex]}')`;
        overlay.style.opacity = 1;

        setTimeout(() => {
            heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
            overlay.style.opacity = 0;
            currentIndex = (currentIndex + 1) % images.length;
        }, 2000); // Matches the CSS transition duration
    }

    setInterval(changeBackground, 5000);

    // Initial background set
    changeBackground();

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const descriptionDiv = item.nextElementSibling;
            const isActive = descriptionDiv.classList.contains('active');

            // hide all other descriptions
            document.querySelectorAll('.portfolio-description').forEach(desc => {
                if (desc !== descriptionDiv) {
                    desc.classList.remove('active');
                    desc.style.maxHeight = null;
                }
            });

            if (isActive) {
                descriptionDiv.classList.remove('active');
                descriptionDiv.style.maxHeight = null;
            } else {
                descriptionDiv.classList.add('active');
                // Dynamically adjust max-height for content size
                descriptionDiv.style.maxHeight = descriptionDiv.scrollHeight + "px";
            }
        });
    });
});

const downloadPDFButton = document.getElementById('btn-download');

downloadPDFButton.addEventListener('click', downloadPDF);