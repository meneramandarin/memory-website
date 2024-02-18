document.getElementById('submit-form').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default form submission
  var email = document.getElementById('email').value;

  // Basic validation to check if the email contains "@" and "."
  if(email.indexOf('@') > -1 && email.indexOf('.') > -1) {
    // Prepare the data to be sent in the POST request
    var data = {
      email: email
    };

// Correctly specifying the Content-Type in headers
    fetch('https://script.google.com/macros/s/AKfycbyHxXvKYX7DCAb84OmpPpKjDgVmcH2Th99gM8kc0uQTviTmCyDNXbLIRsBOuOv2w1Cj/exec', {
      method: 'POST',
// Headers are now properly set
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // add any success handling here, for example:
      // Show a success message, clear the form, etc.
    })
    .catch((error) => {
      console.error('Error:', error);
      // add any error handling here, for example:
      // Show an error message to the user.
    });
  } else {
    // Handle the invalid email case here
    console.log('Invalid email address.');
    // alert the user or highlight the input field in red
  }
});
