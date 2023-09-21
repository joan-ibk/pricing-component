// Get price elements
const priceEls = document.querySelectorAll(".price-selected");

// Get checkbox
const checkboxEl = document.querySelector('.checkbox');

const toggle = (e) => {
    // if checked,show monthly prices
    if (e.target.checked) {
        priceEls[0].textContent = '$19.99';
        priceEls[1].textContent = '$24.99';
        priceEls[2].textContent = '$39.99';

    }
    //else,show annual prices
    else {
        priceEls[0].textContent = '$199.99';
        priceEls[1].textContent = '$249.99';
        priceEls[2].textContent = '$399.99';
    }
};

// call toggle, everytime the checkbox ic checked/unchecked
checkboxEl.onchange = toggle;