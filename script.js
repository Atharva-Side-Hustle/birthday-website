document.addEventListener('DOMContentLoaded', function() {
    const viewGalleryBtn = document.getElementById('view-gallery-btn');
    const welcomeCard = document.getElementById('welcome-card');
    const mainContainer = document.querySelector('.container');
    const viewMessageBtn = document.getElementById('view-message-btn');

    // Initial state: show welcome card, hide main container
    welcomeCard.classList.remove('hidden');
    mainContainer.classList.add('hidden');

    viewGalleryBtn.addEventListener('click', function() {
        welcomeCard.classList.add('hidden');
        mainContainer.classList.remove('hidden');
    });

    viewMessageBtn.addEventListener('click', function() {
        mainContainer.classList.add('hidden');
        welcomeCard.classList.remove('hidden');
    });
});

const galleryImages = [
    // AAI/Aai images
    { src: 'images/AAI 1.JPG', caption: 'Aai' },
    { src: 'images/AAI 3.jpg', caption: 'Aai' },
    { src: 'images/AAI 4.jpg', caption: 'Aai' },
    { src: 'images/AAI 5.jpg', caption: 'Aai' },
    { src: 'images/AAI 6.jpg', caption: 'Aai' },
    { src: 'images/AAI 7.jpg', caption: 'Aai' },
    { src: 'images/Aai 2.jpg', caption: 'Aai' },
    { src: 'images/Aai 8.jpg', caption: 'Aai' },
    // Aaji images
    { src: 'images/Aaji 1.jpg', caption: 'Aaji' },
    { src: 'images/Aaji 2.JPG', caption: 'Aaji' },
    // Group images
    { src: 'images/Group 1.jpg', caption: 'Group' },
    { src: 'images/Group 2.JPG', caption: 'Group' },
    { src: 'images/Group 3.JPG', caption: 'Group' },
    { src: 'images/Group 4.jpg', caption: 'Group' },
    { src: 'images/Group 5.jpg', caption: 'Group' },
    { src: 'images/Group 6.JPG', caption: 'Group' },
    { src: 'images/Group 7.jpg', caption: 'Group' },
];

// Replace dummyImages with galleryImages in the gallery rendering logic
const gallery = document.getElementById('gallery');
gallery.innerHTML = '';
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <div class="image-container">
            <img src="${image.src}" alt="${image.caption}">
        </div>
        <div class="image-overlay">
            <div class="image-label">
                <p>${image.caption}</p>
            </div>
            <div class="camera-icon" style="cursor:pointer;">
                <i data-lucide="camera"></i>
            </div>
        </div>
    `;
    galleryItem.addEventListener('click', () => {
        openFullscreen(image);
    });
    // Add download functionality to camera icon
    galleryItem.querySelector('.camera-icon').addEventListener('click', (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = image.src;
        link.download = image.src.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    gallery.appendChild(galleryItem);
});
lucide.createIcons(); 