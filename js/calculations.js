document.getElementById('caseMinusbtn').addEventListener('click', function () {
    const quantity = updateProductQuantity('caseInputField', 'decrease');
    totalEachItem('totalCase', "case", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})

document.getElementById('casePlusbtn').addEventListener('click', function () {
    const quantity = updateProductQuantity('caseInputField', 'increase');
    totalEachItem('totalCase', "case", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})

document.getElementById('phoneMinusbtn').addEventListener('click', function () {
    const quantity = updateProductQuantity('phoneInputField', 'decrease');
    totalEachItem('totalPhone', "phone", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})

document.getElementById('phonePlusbtn').addEventListener('click', function () {
    const quantity = updateProductQuantity('phoneInputField', 'increase');
    totalEachItem('totalPhone', "phone", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})

document.getElementById('resetCase').addEventListener('click', function () {
    const quantity = updateProductQuantity('caseInputField', 'reset');
    totalEachItem('totalCase', "case", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})

document.getElementById('resetPhone').addEventListener('click', function () {
    const quantity = updateProductQuantity('phoneInputField', 'reset');
    totalEachItem('totalPhone', "phone", quantity);
    const totalSub = subTotal();
    const tax = taxCalculate(totalSub);
    calculateFinalTotal(tax, totalSub);
})