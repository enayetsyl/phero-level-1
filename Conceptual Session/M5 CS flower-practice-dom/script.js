let total = 0;
function getbtn(target) {
  const name = target.parentNode.childNodes[1];
  const productName = name.innerText;
  const display = document.querySelector("#display-name");
  const newElement = document.createElement("li");
  newElement.innerText = productName;
  display.appendChild(newElement);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);

  document.getElementById("total").innerText = total;
}

function applyCoupon() {
  const coupon = document.querySelector("#coupon-code").value;

  const total = parseInt(document.querySelector("#total").innerText);
  const discount = document.querySelector("#discount");
  if (coupon === "disc10") {
    discount.innerText = total * 0.1;

    const discountValue = parseInt(discount.innerText);

    const grandTotal = document.querySelector("#grand-total");
    grandTotal.innerText = total - discountValue;
  } else if (coupon === "disc20") {
    discount.innerText = total * 0.2;

    const discountValue = parseInt(discount.innerText);

    const grandTotal = document.querySelector("#grand-total");
    grandTotal.innerText = total - discountValue;
  } else if (coupon === "disc30") {
    discount.innerText = total * 0.3;

    const discountValue = parseInt(discount.innerText);

    const grandTotal = document.querySelector("#grand-total");
    grandTotal.innerText = total - discountValue;
  } else if (coupon === "disc40") {
    discount.innerText = total * 0.4;

    const discountValue = parseInt(discount.innerText);

    const grandTotal = document.querySelector("#grand-total");
    grandTotal.innerText = total - discountValue;
  } else {
    alert("Please insert a valid coupon");

    const grandTotal = document.querySelector("#grand-total");
    grandTotal.innerText = total;
  }
}
