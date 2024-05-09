// Function to check time in Arizona timezone
function isInBusinessHours() {
  const today = new Date();
  const arizonaTime = today.toLocaleTimeString('en-US', {
    timeZone: 'America/Phoenix',
  });
  const hours = parseInt(arizonaTime.split(':')[0]);

  // Check if Monday to Friday (day of week: 1 to 5)
  if (today.getDay() >= 1 && today.getDay() <= 5) {
    // Check if between 8 AM and 3 PM
    return hours >= 8 && hours <= 15;
  } else {
    return false; // Outside business hours
  }
}

// Get the button element (replace with your button's ID)
const button = document.getElementById('your-button-id');

if (isInBusinessHours()) {
  button.textContent = 'Call Now';
  button.href = 'tel:+1-your-phone-number'; // Replace with your phone number
} else {
  button.textContent = 'Contact Us';
  button.href = '/your-form-link'; // Replace with your form link
}
