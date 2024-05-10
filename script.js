// Function to check time in Arizona timezone (24-hour format)
function isInBusinessHours() {
  const today = new Date();

  // Convert to Arizona time (more robust approach)
  const arizonaTime = new Date(
    today.toLocaleString('en-US', { timeZone: 'America/Phoenix' }),
  );

  const hours = arizonaTime.getHours();
  const minutes = arizonaTime.getMinutes();

  // Check if Monday to Friday (day of week: 1 to 5) in Arizona time
  if (arizonaTime.getDay() >= 1 && arizonaTime.getDay() <= 5) {
    // Check if between 8 AM and 3 PM (inclusive)
    return hours >= 8 && minutes >= 0 && hours <= 15;
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
  button.href = 'your-form-link'; // Replace with your form link
}
