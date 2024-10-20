document.addEventListener('DOMContentLoaded', () => {
    // Favorite icon toggle
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
  
    favoriteIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('red');
      });
    });
  
    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const items = Array.from(track.children);
      const leftButton = carousel.querySelector('.carousel-btn.left');
      const rightButton = carousel.querySelector('.carousel-btn.right');
      const itemWidth = items[0].getBoundingClientRect().width;
  
      let currentIndex = 0;
  
      leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
      });
  
      rightButton.addEventListener('click', () => {
        if (currentIndex < items.length - 4) {
          currentIndex++;
          track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
      });
    });
  });
  