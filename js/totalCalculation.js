function subTotal() {
    const phoneTotal = parseFloat(document.getElementById('totalPhone').innerText);

    const caseTotal = parseFloat(document.getElementById('totalCase').innerText);

    const subTotalField = document.getElementById('subTotalID');

    subTotalField.innerText = phoneTotal + caseTotal;

    return phoneTotal + caseTotal;
}

function taxCalculate(totalSub) {
    const taxField = document.getElementById('taxID');
    const tax = parseFloat((totalSub * 0.1).toFixed(2));
    taxField.innerText = tax;
    return tax;
}

function calculateFinalTotal(tax, totalSub) {
    const finalTotal = document.getElementById('totalID');
    finalTotal.innerText = tax + totalSub;
}