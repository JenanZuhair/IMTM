let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

// Object of available links
const links = {
    'Home Improvement Ideas': 'Elevate Your Living Space: Interior Home Improvement Ideas',
    'Upgrade Lighting Fixtures': 'Upgrade Lighting Fixtures',
    'Revamp Flooring': 'Revamp Flooring',
    'Kitchen Renovation': 'Kitchen Renovation',
    'Bathroom Remodeling': 'Bathroom Remodeling',
    // Add more links as needed
};

// Function to filter links based on search input
function filterLinks(event) {
    const searchText = event.target.value.toLowerCase();
    searchResults.innerHTML = '';

    // Filter links based on search input
    const filteredLinks = Object.keys(links).filter(link => link.toLowerCase().includes(searchText));

    // Display filtered links
    filteredLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.textContent = links[link];
        anchor.href = `${link.replace(/\s+/g, '_').toLowerCase()}.html`; // Convert link to lowercase and replace spaces with underscores
        searchResults.appendChild(anchor);
    });

    // Show or hide search results based on filtered links
    searchResults.style.display = filteredLinks.length ? 'block' : 'none';
}

// Function to hide search results when focus is lost
function hideResults() {
    setTimeout(function() {
  searchResults.style.display = 'none';
}, 500);
    
}

// Event listener for search box input
searchBox.addEventListener('input', filterLinks);
// Event listener for search box blur
searchBox.addEventListener('blur', hideResults);


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
