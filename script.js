// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      console.log('Theme toggled to:', theme); // Debugging line
    });
    
    // Initialize theme
    const currentTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    console.log('Current theme:', currentTheme); // Debugging line
  } else {
    console.error('Theme toggle button not found!'); // Debugging line
  }

  // Rest of your existing JavaScript...

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const id = link.getAttribute("href").substring(1);
        document.getElementById(id).scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
        
        // Close mobile menu if open
        document.body.classList.remove('menu-open');
      });
    });
  
    // Mobile menu toggle (will be styled in CSS)
    // const menuToggle = document.createElement('button');
    // menuToggle.classList.add('menu-toggle');
    // menuToggle.innerHTML = '☰';
    // menuToggle.setAttribute('aria-label', 'Toggle menu');
    // document.querySelector('header').prepend(menuToggle);
    
    // menuToggle.addEventListener('click', function() {
    //   document.body.classList.toggle('menu-open');
    // });
    // Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Optional: Add a fun animation on click
  backToTopButton.classList.add('clicked');
  setTimeout(() => backToTopButton.classList.remove('clicked'), 500);
});
// Add to script.js
document.querySelector('.year').textContent = new Date().getFullYear();

  });