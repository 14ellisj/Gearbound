document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('nav ul');
  
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
  
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Smooth scroll back to top on click
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
// Show the modal with the selected location's content
function showLocationInfo(locationId) {
  var content = document.getElementById(locationId).innerHTML;
  document.getElementById('modalBody').innerHTML = content;
  document.getElementById('modal').style.display = "block";
}

// Hide the modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// Close modal if user clicks outside the modal-content area
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(function () {
  const isMobile = window.innerWidth < 768;

  $('#flipbook').turn({
    width: isMobile ? 400 : 800,
    height: 600,
    autoCenter: true,
    display: isMobile ? 'single' : 'double'
  });

  let bookOpen = false;

  $('#mobBookCover').click(function () {
    if (!bookOpen) {
      $('#flipbook-wrapper').fadeIn(300, function () {
        initFlipbook();
      });
      bookOpen = true;
    } else {
      $('#flipbook-wrapper').fadeOut(300);
      bookOpen = false;
    }
  });
  

  // Page navigation via arrows
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
      if (deltaX > 0) {
        $('#flipbook').turn('next');
      } else {
        $('#flipbook').turn('previous');
      }
    }
  });
});
  