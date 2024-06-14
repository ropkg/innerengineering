document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`Thank you for contacting us, ${name}! We will respond to ${email} soon.`);
});

// Add animations for form elements
document.querySelectorAll('form input, form textarea').forEach(element => {
  element.addEventListener('focus', function() {
      element.style.boxShadow = '0 0 5px rgba(255, 111, 97, 0.5)';
  });
  element.addEventListener('blur', function() {
      element.style.boxShadow = 'none';
  });
});
