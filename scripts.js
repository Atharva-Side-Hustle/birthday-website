document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Placeholder images (replace with your actual images)
    const dummyImages = [
        { id: 1, src: 'https://via.placeholder.com/400x600/9C27B0/FFFFFF', caption: 'Mom and I at the beach' },
        { id: 2, src: 'https://via.placeholder.com/600x400/673AB7/FFFFFF', caption: 'Aunt cooking her famous dish' },
        { id: 3, src: 'https://via.placeholder.com/500x500/5E35B1/FFFFFF', caption: 'Family picnic last summer' },
        { id: 4, src: 'https://via.placeholder.com/400x650/512DA8/FFFFFF', caption: 'Mom\'s birthday last year' },
        { id: 5, src: 'https://via.placeholder.com/500x400/4527A0/FFFFFF', caption: 'Aunt\'s garden party' },
        { id: 6, src: 'https://via.placeholder.com/450x450/311B92/FFFFFF', caption: 'Trip to the mountains' },
        { id: 7, src: 'https://via.placeholder.com/600x500/B39DDB/FFFFFF', caption: 'Mom\'s cooking lesson' },
        { id: 8, src: 'https://via.placeholder.com/400x400/9575CD/FFFFFF', caption: 'Aunt teaching me to knit' },
        { id: 9, src: 'https://via.placeholder.com/500x600/7E57C2/FFFFFF', caption: 'Mom\'s favorite restaurant' },
        { id: 10, src: 'https://via.placeholder.com/450x500/673AB7/FFFFFF', caption: 'Aunt\'s artistic talents' },
        { id: 11, src: 'https://via.placeholder.com/500x450/5E35B1/FFFFFF', caption: 'Mom\'s surprise party' },
        { id: 12, src: 'https://via.placeholder.com/600x600/512DA8/FFFFFF', caption: 'Aunt\'s travel adventures' },
        { id: 13, src: 'https://via.placeholder.com/450x600/4527A0/FFFFFF', caption: 'Mom and her garden' },
        { id: 14, src: 'https://via.placeholder.com/600x450/311B92/FFFFFF', caption: 'Aunt\'s pet cat' },
        { id: 15, src: 'https://via.placeholder.com/500x550/B39DDB/FFFFFF', caption: 'Mom\'s workplace' },
        { id: 16, src: 'https://via.placeholder.com/550x500/9575CD/FFFFFF', caption: 'Aunt at the museum' }
    ];
    
    // Welcome Card
    const welcomeCard = document.getElementById('welcome-card');
    const viewGalleryBtn = document.getElementById('view-gallery-btn');
    const viewMessageBtn = document.getElementById('view-message-btn');
    
    viewGalleryBtn.addEventListener('click', () => {
        welcomeCard.classList.add('hidden');
    });
    
    viewMessageBtn.addEventListener('click', () => {
        welcomeCard.classList.remove('hidden');
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
    
    dummyImages.forEach(image => {
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