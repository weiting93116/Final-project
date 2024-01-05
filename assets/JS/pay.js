// 目前步驟
let currentStep = 1;

// 顯示特定步驟
function showStep(stepNumber) {
  // 移除所有步驟的 'active' 類別
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });

  // 加入特定步驟的 'active' 類別
  const currentStepElement = document.getElementById(`step${stepNumber}`);
  currentStepElement.classList.add('active');

  // 移除所有步驟圓形的 'active' 類別
  document.querySelectorAll('.step-circle').forEach(circle => {
    circle.classList.remove('active');
  });

  // 加入特定步驟圓形的 'active' 類別
  const currentCircle = document.querySelector(`.step-circle:nth-child(${stepNumber})`);
  currentCircle.classList.add('active');
}

// 下一步
function nextStep() {
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
  }
}

// 上一步
function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

// 完成結帳
function completeCheckout() {
  alert('訂單已送出！');
}
