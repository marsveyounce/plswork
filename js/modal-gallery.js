// IMAGE GALLERY WITH MODAL FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const close = document.querySelector('.close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentIndexx = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
            currentIndexx = index;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prev.addEventListener('click', () => {
        currentIndexx = (currentIndexx === 0) ? images.length - 1 : currentIndexx - 1;
        modalImage.src = images[currentIndexx].src;
    });

    next.addEventListener('click', () => {
        currentIndexx = (currentIndexx === images.length - 1) ? 0 : currentIndexx + 1;
        modalImage.src = images[currentIndexx].src;
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});