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

// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const tables = document.querySelectorAll(".info-table");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and tables
      buttons.forEach((btn) => btn.classList.remove("active"));
      tables.forEach((table) => table.classList.remove("active"));

      // Add active class to the clicked button and corresponding table
      button.classList.add("active");
      const tableId = button.getAttribute("data-tab");
      document.getElementById(tableId).classList.add("active");
    });
  });
});
