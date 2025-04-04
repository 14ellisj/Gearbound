// Combine DOMContentLoaded into one function
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('nav ul');
  const backToTopButton = document.getElementById('back-to-top');

  // Burger menu toggle
  burger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // Back-to-top button show/hide
  window.addEventListener('scroll', function () {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  });

  // Smooth scroll to top
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Modal popup for district info
function showLocationInfo(locationId) {
  const content = document.getElementById(locationId).innerHTML;
  document.getElementById('modalBody').innerHTML = content;
  document.getElementById('modal').style.display = 'block';
}

// Close modal via button or outside click
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Flipbook logic with jQuery
let bookOpen = false;

function closeFlipbook() {
  $('#flipbook-wrapper').fadeOut(300);
  bookOpen = false;
}

$(function () {
  const isMobile = window.innerWidth < 768;

  $('#flipbook').turn({
    width: isMobile ? 400 : 800,
    height: 600,
    autoCenter: true,
    display: isMobile ? 'single' : 'double'
  });

  $('#mobBookCover').click(function () {
    if (!bookOpen) {
      $('#flipbook-wrapper').fadeIn(300);
      bookOpen = true;
    } else {
      closeFlipbook();
    }
  });

  // Page navigation
  $(document).on('click', '.nav-arrow.left', function () {
    $('#flipbook').turn('previous');
  });
  $(document).on('click', '.nav-arrow.right', function () {
    $('#flipbook').turn('next');
  });

  // Swipe support for mobile
  let touchStartX = 0;
  $('#flipbook').on('touchstart', function (e) {
    touchStartX = e.originalEvent.touches[0].clientX;
  });

  $('#flipbook').on('touchend', function (e) {
    const touchEndX = e.originalEvent.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? $('#flipbook').turn('next') : $('#flipbook').turn('previous');
    }
  });
});
