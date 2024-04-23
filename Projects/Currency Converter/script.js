const apiKey = "f357f65f1467da79368ba6a5";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const dropdown = document.querySelectorAll("select");
const btn = document.querySelector("button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amount = document.querySelector("input");

for (let select of dropdown) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    option.value = code;

    if (select.name === "from" && code === "USD") {
      option.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      option.selected = "selected";
    }
    select.append(option);
  }

  select.addEventListener("change", (e) => {
    changeFlag(e.target);
  });
}

const changeFlag = (element) => {
  let currentCode = element.value;
  let flagCode = countryList[currentCode];
  let newSrc = `https://flagsapi.com/${flagCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const populate = () => {
  if (amount.value === "" || amount.value < 1) {
    amount.value = 1;
  }
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((data) => {
      const fromAmount = data.conversion_rates[from.value];
      const toAmount = data.conversion_rates[to.value];

      const exchangeAmount = (amount.value / fromAmount) * toAmount;
      msg.innerHTML = `${amount.value} ${from.value} = ${exchangeAmount} ${to.value}`;
    });
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  populate();
});
