document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Welcome Card
    const welcomeCard = document.getElementById('welcome-card');
    const viewGalleryBtn = document.getElementById('view-gallery-btn');
    const viewMessageBtn = document.getElementById('view-message-btn');
    const mainContainer = document.querySelector('.container');
    
    console.log('Elements found:', {
        welcomeCard: !!welcomeCard,
        viewGalleryBtn: !!viewGalleryBtn,
        viewMessageBtn: !!viewMessageBtn,
        mainContainer: !!mainContainer
    });
    
    // Initial state: show welcome card, hide main container
    welcomeCard.style.display = 'flex';
    mainContainer.style.display = 'none';
    
    viewGalleryBtn.addEventListener('click', () => {
        console.log('View Gallery button clicked');
        welcomeCard.style.display = 'none';
        mainContainer.style.display = 'block';
    });
    
    viewMessageBtn.addEventListener('click', () => {
        console.log('View Message button clicked');
        mainContainer.style.display = 'none';
        welcomeCard.style.display = 'flex';
    });
    
    // Full Image View
    const fullscreenView = document.getElementById('fullscreen-view');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeFullscreen = document.getElementById('close-fullscreen');
    
    function openFullscreen(image) {
        fullscreenImage.src = image.src;
        fullscreenCaption.textContent = image.caption;
        fullscreenView.classList.remove('hidden');
    }
    
    closeFullscreen.addEventListener('click', () => {
        fullscreenView.classList.add('hidden');
    });
    
    fullscreenView.addEventListener('click', (e) => {
        if (e.target === fullscreenView || e.target.classList.contains('modal-backdrop')) {
            fullscreenView.classList.add('hidden');
        }
    });
    
    // Create Gallery Items
    const gallery = document.getElementById('gallery');
    
    // Actual images from the images directory
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
        { src: 'images/Group 7.jpg', caption: 'Group' }
    ];
    
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
                <div class="camera-icon">
                    <i data-lucide="camera"></i>
                </div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openFullscreen(image);
        });
        
        gallery.appendChild(galleryItem);
    });
    
    // Reinitialize Lucide icons for dynamically added elements
    lucide.createIcons();
});