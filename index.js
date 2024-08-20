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

    function changeBackground() {
        const heroSection = document.querySelector('.hero');
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds

    // Initial background set
    changeBackground();

    // Portfolio item click event ----------------------------------------------
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Assuming the descriptive div is immediately after the portfolio item
            const descriptionDiv = item.nextElementSibling;
            const isActive = descriptionDiv.classList.contains('active');

            // Optionally, hide all other descriptions
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

function sendEmail() {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const emailBody = `${message}`;
    const mailtoLink = `mailto:recipient@example.com?subject=${subject}&body=${encodeURIComponent(emailBody)}\n\nsubmitted by: ${name}`;

    window.location.href = mailtoLink;
}

const ctaButton = document.getElementById('btn-send-email');
const downloadPDFButton = document.getElementById('btn-download');

ctaButton.addEventListener('click', function (event) {
    var form = this.form;
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
    } else {
        sendEmail();
    }
});

downloadPDFButton.addEventListener('click', downloadPDF);