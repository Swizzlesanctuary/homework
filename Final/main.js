
(function () {
  const hamburger = document.getElementById('hamburger');
  if (!hamburger) return;


  const overlay = document.createElement('div');
  overlay.id = 'menuOverlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="menu-panel" role="dialog" aria-modal="true">
      <button class="menu-close" aria-label="Close menu">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
  document.body.appendChild(overlay);

  const panel = overlay.querySelector('.menu-panel');

 
  const sourceList = document.querySelector('.headercontent ul');
  if (sourceList) {
    const menuList = sourceList.cloneNode(true);
    panel.appendChild(menuList);
  }

  const closeBtn = overlay.querySelector('.menu-close');

  function openMenu() {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');

    const firstLink = panel.querySelector('a, button');
    if (firstLink && firstLink.focus) firstLink.focus();
  }

  function closeMenu() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (hamburger && hamburger.focus) hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);


  panel.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
})();



