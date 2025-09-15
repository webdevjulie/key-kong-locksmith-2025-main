  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('-translate-y-full');
  }

  function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('hidden');
  }