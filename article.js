let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const newPosition = -index * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
    currentIndex = index;
}

nextBtn.addEventListener('click', function() {
    showSlide(currentIndex + 1);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
    }
});
