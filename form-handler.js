document.getElementById('submitBtn').addEventListener('click', function() {
  var input = document.getElementById('emailInput');
  var email = input.value;

  // Basic validation for email
  if(email.includes('@') && email.includes('.')) {
    fetch('https://script.google.com/macros/s/AKfycbyHxXvKYX7DCAb84OmpPpKjDgVmcH2Th99gM8kc0uQTviTmCyDNXbLIRsBOuOv2w1Cj/exec', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({email: email})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    // Optionally clear the input field after submission
    input.value = '';
  } else {
    // Handle invalid email address
    alert('Please enter a valid email address.');
  }
});
