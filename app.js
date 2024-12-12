document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');
  
    readMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
  
        const card = button.closest('.news-card');
        const text = card.querySelector('.news-text');
        const fullContent = button.getAttribute('data-content');
  
        // Check if we are expanding or collapsing
        if (button.textContent === 'Read More') {
          // Expand to full content
          text.dataset.shortContent = text.textContent; // Save the short version
          text.textContent = fullContent; // Set to full content
          button.textContent = 'Read Less';
        } else {
          // Collapse to the original short version
          text.textContent = text.dataset.shortContent; // Retrieve the short version
          button.textContent = 'Read More';
        }
      });
    });
  });
  