const amountInput = document.getElementById("amount");
const numberInput = document.getElementById("peopleNumber");

const tipButtons = document.querySelectorAll(".tipButton");

const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");

calculate.addEventListener("click", function () {
  let activeButton = document.querySelector(".tipButtonActive");
  if (activeButton) {
    let tip = Number(activeButton.dataset.value);
    let amount = Number(amountInput.value);
    let number = Number(numberInput.value);
    if (amount > 0 && number > 0) {
      let totalTip = (amount / 100) * tip;
      let tipPerPersonAmount = totalTip / number;
      let total = amount / number + tipPerPersonAmount;
      tipPerPerson.innerHTML = tipPerPersonAmount;
      totalPerPerson.innerHTML = total;
    }
  }
});

reset.addEventListener("click", function () {
  amountInput.value = "";
  numberInput.value = "";
  tipPerPerson.innerHTML = "0.00";
  totalPerPerson.innerHTML = "0.00";

  let activeButton = document.querySelector(".tipButtonActive");
  if (activeButton) {
    activeButton.classList.remove("tipButtonActive");
  }
});

for (let button of tipButtons) {
  button.addEventListener("click", function () {
    selectTip(button);
  });
}

function selectTip(button) {
  let activeButton = document.querySelector(".tipButtonActive");
  if (activeButton) {
    activeButton.classList.remove("tipButtonActive");
  }
  button.classList.add("tipButtonActive");
}
