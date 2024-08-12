document.addEventListener("DOMContentLoaded", function () {
    // COMIC PAGE NAVIGATION
    const comicContainer = document.querySelector('.comic-container');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    let currentPage = 0;

    function updateComicPosition() {
        const comicPages = document.querySelectorAll('.comic-page');
        const isLandscape = window.innerWidth > window.innerHeight;

        if (isLandscape) {
            comicContainer.style.transform = `translateX(-${currentPage * 50}%)`;
        } else {
            comicContainer.style.transform = `translateX(-${currentPage * 100}%)`;
        }
    }

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateComicPosition();
        }
    });

    nextPageButton.addEventListener('click', () => {
        const comicPages = document.querySelectorAll('.comic-page');
        const isLandscape = window.innerWidth > window.innerHeight;

        if (isLandscape && currentPage < comicPages.length - 2) {
            currentPage++;
            updateComicPosition();
        } else if (!isLandscape && currentPage < comicPages.length - 1) {
            currentPage++;
            updateComicPosition();
        }
    });
});