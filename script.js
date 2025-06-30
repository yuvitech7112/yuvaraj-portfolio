console.log('Theme toggle and animation logic'); // truncated

 
  
 // 🌙 Theme toggle logic
document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  
  // 🌙 Load saved theme on page load
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.body.setAttribute('data-theme', saved);
  }
  
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
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

   