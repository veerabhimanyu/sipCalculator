const invest = document.querySelector(".monthly-invest");
const rates = document.querySelector(".rate");
const times = document.querySelector(".time");
const submitBtn = document.querySelector(".btn");
const returns = document.querySelector(".return");
const investedAmount = document.querySelector(".investedAmount");
const tootalReturns = document.querySelector(".totalReturns");
submitBtn.addEventListener("click", calculate);

function calculate() {
  event.preventDefault();
  var investment = invest.value;
  var annualRate = Number(rates.value);
  var months = times.value * 12;
  var monthlyRate = annualRate / 12 / 100;
  var k = investment * months;
  var j = Math.floor(
    (investment * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate
  );
  returns.innerHTML =
    "Total Returns" +
    "</br>" +
    "₹" +
    "" +
    Math.floor(
      (investment * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate
    );
  var l = j - k;
  investedAmount.innerHTML =
    "Invested Amount" + "</br>" + "₹ " + investment * months;

  tootalReturns.innerHTML = "Returns " + "</br>" + l;
}
