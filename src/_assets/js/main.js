let lastKnownScrollPosition = 0;
let ticking = false;
const topArrow = document.getElementById('topArrow');

const getAll = (selector) => {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
};

const domReady = (callback) => {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

const displayTopArrow = (el, scrollPos) => {
  const arrow = el;
  if (scrollPos > 100) {
    arrow.style.opacity = 1;
    arrow.style.bottom = '80px';
  } else {
    arrow.style.opacity = 0;
    arrow.style.bottom = '60px';
  }
};
window.addEventListener('scroll', () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Go to top arrow
      if (topArrow) {
        displayTopArrow(topArrow, lastKnownScrollPosition);
      }
      ticking = false;
    });
    ticking = true;
  }
});

const modeSwitcher = getAll('.is-mode-switcher');

// DOM is ready and waiting
domReady(() => {
  // Displaying page
  document.body.style.visibility = 'visible';

  // Lazyload images
  [].forEach.call(document.querySelectorAll('img[data-src]'), (img) => {
    const el = img;
    el.setAttribute('src', el.getAttribute('data-src'));
    el.onload = () => {
      el.removeAttribute('data-src');
    };
  });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(($el) => {
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const { target } = $el.dataset;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target?.classList.toggle('is-active');
      });
    });
  }

  // Dark/light mode switcher
  if (modeSwitcher && modeSwitcher.length > 0) {
    modeSwitcher.forEach((el) => {
      el.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('mode', 'dark');
        } else {
          localStorage.setItem('mode', 'light');
        }
      });
    });
  }
});
