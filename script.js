
  // Get current page path
  const currentPath = window.location.pathname;

  // Select all nav links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    // Check if href matches current path
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('nav-active');
    }
  });

  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }

  function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('hidden');
  }