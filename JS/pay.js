let currentStep = 1;

function showStep(stepNumber) {
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });

  const currentStepElement = document.getElementById(`step${stepNumber}`);
  currentStepElement.classList.add('active');

  document.querySelectorAll('.step-circle').forEach(circle => {
    circle.classList.remove('active');
  });

  const currentCircle = document.querySelector(`.step-circle:nth-child(${stepNumber})`);
  currentCircle.classList.add('active');
}

function nextStep() {
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function completeCheckout() {
  alert('訂單已送出！');
}