document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.querySelector('.top-btn');

    topButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });