// Listen for submit
document.getElementById('requirementsForm').addEventListener('submit', function(e){
  e.preventDefault();

  // Hide results
  hideResults();

  // Show loadingImg
  showLoadingImg();
  
  // Run calculateFinalResults function after two seconds
  setTimeout(calculateFinalResults, 2000);
});

// Assign UI variables
  // Requirements variables
  const inputLoanAmount = document.querySelector('.inputLoanAmount');
  const inputInterest = document.querySelector('.inputInterest');
  const inputYearsToRepay = document.querySelector('.inputYearsToRepay');
  // Results variables
  const inputMonthlyPayment = document.querySelector('.inputMonthlyPayment');
  const inputTotalPayment = document.querySelector('.inputTotalPayment');
  const inputTotalInterest = document.querySelector('.inputTotalInterest');

// Create calculateFinalResults function
function calculateFinalResults(loadingImg,results) {

  if (inputLoanAmount.value === "" || inputInterest.value === "" || inputYearsToRepay.value === "") {
    // Hide results and loadingImg
    hideLoadingImg();
    hideResults();

    // Remove ErrorDiv if it's already exists to prevent appear more than one warning
    removeErrorDiv();

    // Create errorDiv for warning
    const errorDiv = document.createElement('div');
    errorDiv.className = 'errorDiv alert alert-danger';
    errorDiv.appendChild(document.createTextNode('An empty field, so Kindly recheck your entry'));
    // Insert the error above the heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
    // Clear Result Fields
    clearResultFields();
    // Remove ErrorDiv
    setTimeout(removeErrorDiv, 2000);
  } else {
    // calculate total interest
    const calculateTotalInterest = parseFloat(((inputLoanAmount.value * inputInterest.value) / 100) * inputYearsToRepay.value);
    inputTotalInterest.value = calculateTotalInterest.toFixed(2);;
    // calculate Total Payment
    const calculateTotalPayment = parseFloat(Number(inputLoanAmount.value) + calculateTotalInterest);
    inputTotalPayment.value = calculateTotalPayment.toFixed(2);;
    // calculate Monthly Payment
    const calculateMonthlyPayment = parseFloat(calculateTotalPayment / (Number(inputYearsToRepay.value)*12));
    inputMonthlyPayment.value = calculateMonthlyPayment.toFixed(2);
    // Hide loadingImg and show results
    hideLoadingImg();
    showResults()
  }
}

// Create clearResultFields function
function clearResultFields() {
  inputMonthlyPayment.value = '';
  inputTotalPayment.value = '';
  inputTotalInterest.value = '';
}

// Remove errorDiv function
function removeErrorDiv() {
  if (document.querySelector('.card').firstElementChild.classList.contains('errorDiv')) {
    document.querySelector('.errorDiv').remove();
  }
}

// Show loadingImg function
function showLoadingImg(){
  document.querySelector('.loadingImg').setAttribute('style', 'display: block !important');
}
// Hide loadingImg function
function hideLoadingImg(){
  document.querySelector('.loadingImg').setAttribute('style', 'display: none !important');
}
// Show results function
function showResults(){
  document.querySelector('.results').setAttribute('style', 'display: block !important');
}
// Hide results function
function hideResults(){
  document.querySelector('.results').setAttribute('style', 'display: none !important');
}