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
  