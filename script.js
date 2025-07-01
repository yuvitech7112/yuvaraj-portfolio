// 🎯 Animate sections when they enter viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(sec => observer.observe(sec));

  // Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links'); // Use ID from HTML

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


   
