function updateProductQuantity(elementID, operation) {
    const quantity = document.getElementById(elementID);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);

    if (previousQuantity === 0 && operation === "decrease") {
        return 0;
    }

    let newQuantity;

    if (operation === "decrease") {
        newQuantity = previousQuantity - 1;
    }
    else if (operation === "increase") {
        newQuantity = previousQuantity + 1;
    }
    else if (operation === "reset") {
        newQuantity = 1;
    }

    quantity.value = newQuantity;
    return newQuantity;
}

function totalEachItem(elementID, item, quantity) {
    const totalIndividualItem = document.getElementById(elementID);
    const totalIndividualItemString = totalIndividualItem.innerText;
    const previousItemTotal = parseFloat(totalIndividualItemString);

    let newItemTotal;
    if (item === "phone") {
        newItemTotal = quantity * 1219;
    }
    else if (item === "case") {
        newItemTotal = quantity * 59;
    }

    totalIndividualItem.innerText = newItemTotal;
}

