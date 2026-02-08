let totalItems = 0;
let totalPrice = 0;

const cartBtn = document.getElementById("cartBtn");
const cartText = document.getElementById("cartText");

document.querySelectorAll(".product-card").forEach(product => {

  const btn = product.querySelector(".add-btn");

  const addText = btn.querySelector(".add-text");
  const counter = btn.querySelector(".counter");

  const plus = btn.querySelector(".plus");
  const minus = btn.querySelector(".minus");
  const qty = btn.querySelector(".qty");

  const price = Number(
    product.querySelector(".price").innerText.replace("₹", "")
  );

  let count = 0;

  // ADD Click
  btn.addEventListener("click", (e) => {

    if (count > 0) return;

    count = 1;
    qty.innerText = count;

    btn.classList.add("active");

    totalItems++;
    totalPrice += price;

    updateCart();
  });

  // PLUS
  plus.addEventListener("click", (e) => {
    e.stopPropagation();

    count++;
    qty.innerText = count;

    totalItems++;
    totalPrice += price;

    updateCart();
  });

  // MINUS
  minus.addEventListener("click", (e) => {
    e.stopPropagation();

    if (count === 0) return;

    count--;
    qty.innerText = count;

    totalItems--;
    totalPrice -= price;

    if (count === 0) {
      btn.classList.remove("active");
    }

    updateCart();
  });

});


function updateCart() {

  if (totalItems === 0) {

    cartBtn.classList.add("disabled");
    cartText.innerText = "My Cart";

  } else {

    cartBtn.classList.remove("disabled");

    cartText.innerHTML = `
      <span>${totalItems} items</span>
      <span>₹${totalPrice}</span>
    `;
  }
}
