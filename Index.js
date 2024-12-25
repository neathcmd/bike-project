// javascript bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Handle Pay Now button click
document.getElementById("pay-now").addEventListener("click", function () {
  const cardNumber = document.getElementById("visa-number").value;
  const selectedMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  );

  // Check if a payment method is selected
  if (!selectedMethod) {
    alert("Please select a payment method.");
    return;
  }

  // Check if the card number field is empty
  if (cardNumber.trim() === "") {
    alert("Please enter your Visa card number.");
    return;
  }

  // Validate card number format (16 digits)
  if (!/^\d{16}$/.test(cardNumber)) {
    alert("Please enter a valid 16-digit Visa card number.");
    return;
  }

  // Show payment completion message
  alert(
    "Payment complete using " +
      selectedMethod.nextElementSibling.textContent.trim() +
      "! Your Visa card number is: " +
      cardNumber
  );
});
