'use strict'; 

// JavaScript source code
// gpsware.js 

// Script Date: May 2022


/* Function list
1. startup function - displays the current date
2. today function - returns the current date
3. calculatePrice - calculates the subtotal of
     products and quantity
4. calculateShipping(shipOption) - calculates the shipping value
5. calculateTotal - calculates the total of placed order
6. validateForm - validates user data entry
*/


/**
 * displays the current date
 */
function startup() {
    // display the current date in the txtDateNow textbox
    // SYNTAX: object_name.property_name = expression
    document.getElementById('txtDateNow').value = today();


}  // end function startup

/**
 * returns the current date
 */
function today() {
    // create an instance of the Date object
    let currentDate = new Date();

    // extract from the current date variables the date, month, and year
    let thisDate = currentDate.getDate();
    let thisMonth = currentDate.getMonth() + 1;
    let thisYear = currentDate.getFullYear();

    // return the current date in the format mm/dd/yyyy
    let todayDate = thisMonth + '/' + thisDate + '/' + thisYear;
    return todayDate;
} // end function today

/**
 * calculates the subtotal of products and quantity
 */
function calculatePrice() {
    // declare product vairables
    let product = document.getElementById('ddlProduct');
    let pIndex = product.selectedIndex;

    // return the product value (price) of the selected index
    let productPrice = product.options[pIndex].value;
    // alert(productPrice);

    // declare quantuty variables
    let quantity = document.getElementById('ddlQuantity');
    let qIndex = quantity.selectedIndex;

    // return the quantity values of the selected index
    let quantityOrdered = quantity.options[qIndex].value;
    // alert(quantityOrdered);

    // display the calculated subtotal of the product selected
    // and quantity selected in the textfield txtPrice
    let subtotal = document.getElementById('txtPrice');
    subtotal.value = (productPrice * quantityOrdered).toFixed(2);

    // call function calculateTotal
    calculateTotal();
} // end function calculatePrice

/**
 * calculates the shipping value
 * @param {Number} shipOption 
 */
function calculateShipping(shipOption) {
    let shippingPrice = document.getElementById('txtShipPrice');
    shippingPrice.value = shipOption.value;

    // call function calculateTotal
    calculateTotal();
}  // end function calculateShipping

/**
 * calculates the total of placed order
 */
function calculateTotal() {
    // declare variables
    let priceValue = parseFloat(document.getElementById('txtPrice').value);
    let shipValue = parseFloat(document.getElementById('txtShipPrice').value);

    // display the subtotal of the order in the textfiel txtSubtotal
    let subtotalValue = document.getElementById('txtSubtotal');
    subtotalValue.value = (priceValue + shipValue).toFixed(2);

    // declare the tax rate
    const TAX_RATE = 0.05;
    let taxValue = subtotalValue.value * TAX_RATE;
    // let taxValue = (priceValue + shipValue) * TAX_RATE;

    // display the tax value in thetextfield txtTax
    document.getElementById('txtTax').value = taxValue.toFixed(2);

    // display the grand total value of the order in the textfield txtGrandTotal
    document.getElementById('txtGrandTotal').value = 
    (priceValue + shipValue + taxValue).toFixed(2);

} // end function calculateTotal

/**
 * validates user data entry
 */
function validateForm() {
    // declare variables
    let selectedProduct = document.getElementById('ddlProduct');
    let selectedQuantity = document.getElementById('ddlQuantity');
    let selectedShipping = document.getElementById('txtShipPrice');

    // validate product
    if (selectedProduct.selectedIndex === 0) {
        window.alert('You must select a GPS-Ware product');
        selectedProduct.focus();
        return false;
    } // end if
    else 
    // validate quantity
    if (selectedQuantity.selectedIndex === 0) {
        window.alert('You must select a quantity to order');
        selectedQuantity.focus();
        return false;
    } // end if
    else 
    // validate shipping option
    if (selectedShipping.value === '0.00') {
        window.alert('You must select a shipping option');
        selectedShipping.focus();
        return false;
    }
    else {
        return true;
    }
} // end function validateForm