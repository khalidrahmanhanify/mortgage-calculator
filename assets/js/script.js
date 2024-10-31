"use strict";

const mortgageAmount = document.getElementById("mortgageAmount");
const mortgageTerm = document.getElementById("mortgageTerm");
const interestRate = document.getElementById("interestRate");
const calcRepBtn = document.getElementById("calcRepayments");
const resultAmount = document.getElementById("resultAmount");
const totalToRepay = document.getElementById("totaltorepay");
const yourResults = document.querySelector(".your-results");
const resultsShowHere = document.querySelector(".results-show-here");
const clearAll = document.getElementById("clearAll");
const mortgageAmountError = document.querySelector(".mortgageAmountError");
const mortgageTermError = document.querySelector(".mortgageTermError");
const interestRateError = document.querySelector(".interestRateError");
const mortgageTypeError = document.querySelector(".typeError");

let mortgageType = document.querySelectorAll('input[name="mortgageType"]');
let Mtype = "";

mortgageType.forEach((type) => {
  type.addEventListener("click", () => {
    Mtype = type.id;
    console.log(Mtype);
    mortgageTypeError.style.display = "none";
  });
});
mortgageAmount.oninput = () => {
  if (mortgageAmount.value === "") {
    const euroSign = document.querySelector(".euro");
    mortgageAmountError.style.display = "block";
    euroSign.style.backgroundColor = "var(--Red)";
    euroSign.style.color = "var(--White)";
    euroSign.style.padding = "11px 15px";
    mortgageAmount.style.border = "1px solid var(--Red)";

    valid = false;
  } else {
    const euroSign = document.querySelector(".euro");
    mortgageAmountError.style.display = "";
    euroSign.style.backgroundColor = "";
    euroSign.style.color = "";
    euroSign.style.padding = "";
    mortgageAmount.style.border = "";
  }
};
mortgageTerm.oninput = () => {
  if (mortgageTerm.value === "") {
    mortgageTermError.style.display = "block";
    mortgageTerm.style.borderColor = "var(--Red)";
    const notEuro = document.querySelector(".input span:not(.euro)");
    notEuro.style.backgroundColor = "var(--Red)";
    notEuro.style.color = "white";
    notEuro.style.padding = "11px 15px";
    valid = false;
  } else {
    mortgageTermError.style.display = "";
    mortgageTerm.style.borderColor = "";
    const notEuro = document.querySelector(".input span:not(.euro)");
    notEuro.style.backgroundColor = "";
    notEuro.style.color = "";
    notEuro.style.padding = "";
    valid = false;
  }
};
interestRate.oninput = () => {
  if (interestRate.value === "") {
    interestRateError.style.display = "block";
    interestRate.style.borderColor = "var(--Red)";
    const notEuro = document.querySelector(".intRate");
    notEuro.style.backgroundColor = "var(--Red)";
    notEuro.style.color = "white";
    notEuro.style.padding = "11px 15px";
    notEuro.style.right = "0px";
    valid = false;
  } else {
    interestRateError.style.display = "";
    interestRate.style.borderColor = "";
    const notEuro = document.querySelector(".intRate");
    notEuro.style.backgroundColor = "";
    notEuro.style.color = "";
    notEuro.style.padding = "";
    notEuro.style.right = "";
    valid = true;
  }
};
function calcRep() {
  mortgageAmountError.style.display = "none";
  mortgageTermError.style.display = "none";
  interestRateError.style.display = "none";
  mortgageTypeError.style.display = "none";

  const p = Number(mortgageAmount.value);
  const annualRate = Number(interestRate.value) / 100;
  const r = annualRate / 12;
  const n = Number(mortgageTerm.value) * 12;
  let M = 0;
  let totalRepayment = 0;

  let valid = true;

  if (mortgageAmount.value === "") {
    const euroSign = document.querySelector(".euro");
    mortgageAmountError.style.display = "block";
    euroSign.style.backgroundColor = "var(--Red)";
    euroSign.style.color = "var(--White)";
    euroSign.style.padding = "11px 15px";
    mortgageAmount.style.border = "1px solid var(--Red)";

    valid = false;
  }

  if (mortgageTerm.value === "") {
    mortgageTermError.style.display = "block";
    mortgageTerm.style.borderColor = "var(--Red)";
    const notEuro = document.querySelector(".input span:not(.euro)");
    notEuro.style.backgroundColor = "var(--Red)";
    notEuro.style.color = "white";
    notEuro.style.padding = "11px 15px";
    valid = false;
  }

  if (interestRate.value === "") {
    interestRateError.style.display = "block";
    interestRate.style.borderColor = "var(--Red)";
    const notEuro = document.querySelector(".intRate");
    notEuro.style.backgroundColor = "var(--Red)";
    notEuro.style.color = "white";
    notEuro.style.padding = "11px 15px";
    notEuro.style.right = "0px";
    valid = false;
  }

  if (!Mtype) {
    mortgageTypeError.style.display = "block";
    valid = false;
  }

  if (!valid) return;

  if (Mtype === "repayments") {
    M = (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    totalRepayment = M * n;
  } else if (Mtype === "interestOnly") {
    M = p * r;
    totalRepayment = M * n + p;
  }

  resultAmount.textContent = `£${M.toFixed(2)}`;
  totalToRepay.textContent = `£${totalRepayment.toFixed(2)}`;
  resultsShowHere.style.display = "none";
  yourResults.style.display = "block";
}

calcRepBtn.addEventListener("click", calcRep);

clearAll.addEventListener("click", () => {
  resultsShowHere.style.display = "block";
  yourResults.style.display = "none";
  totalToRepay.textContent = "";
  resultAmount.textContent = "";
  interestRate.value = "";
  mortgageTerm.value = "";
  mortgageAmount.value = "";

  mortgageType.forEach((type) => {
    type.checked = false;
  });

  mortgageAmountError.style.display = "none";
  mortgageTermError.style.display = "none";
  interestRateError.style.display = "none";
  mortgageTypeError.style.display = "none";
  const euroSign = document.querySelector(".euro");

  euroSign.style.backgroundColor = "";
  euroSign.style.color = "";
  euroSign.style.padding = "";
  mortgageAmount.style.border = "";

  mortgageTerm.style.borderColor = "";
  const notEuro = document.querySelector(".input span:not(.euro)");
  notEuro.style.backgroundColor = "";
  notEuro.style.color = "";
  notEuro.style.padding = "";

  interestRate.style.borderColor = "";
  const notEuro2 = document.querySelector(".intRate");
  notEuro2.style.backgroundColor = "";
  notEuro2.style.color = "";
  notEuro2.style.padding = "";
  notEuro2.style.right = "";
});
