// Listen for submit
document.getElementById('requirementsForm').addEventListener('submit', calculateFinalResults);

// Create calculateFinalResults function
function calculateFinalResults(e) {
  // Assign UI variables
  // Requirements variables
  const inputLoanAmount = document.querySelector('.inputLoanAmount');
  const inputInterest = document.querySelector('.inputInterest');
  const inputYearsToRepay = document.querySelector('.inputYearsToRepay');
  // Results variables
  const inputMonthlyPayment = document.querySelector('.inputMonthlyPayment');
  const inputTotalPayment = document.querySelector('.inputTotalPayment');
  const inputTotalInterest = document.querySelector('.inputTotalInterest');


  const totalInterest = parseFloat(((inputLoanAmount.value * inputInterest.value) / 100) * inputYearsToRepay.value);
  if (inputLoanAmount.value === "" || inputInterest.value === "" || inputYearsToRepay.value === "") {
    //Create div for warning
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode('Empty values'));
    // Insert the error above the heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
    // Clear result fields
    clearResultFields();


  } else {
    inputTotalInterest.value = totalInterest.toFixed(2);
  }

  e.preventDefault();
}

// Create clearResultFields function
function clearResultFields() {
  inputMonthlyPayment.value = '';
  inputTotalPayment.value = '';
  inputTotalInterest.value = '';
};