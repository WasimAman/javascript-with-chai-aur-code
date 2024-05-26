const inputField = document.querySelector("#password");
const generateBtn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copy");

generateBtn.addEventListener("click", () => {
  let password = "";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
  const allCharacters = upperCase + lowerCase + number + symbols;

  // To ensure that every character is available
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < 16) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  inputField.value = password;
});

copyBtn.addEventListener("click", () => {
  inputField.select();
  inputField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputField.value);
  const originalValue = inputField.value;
  inputField.value = "Copied";
  inputField.style.color = "#019f55";
  inputField.style.fontWeight = "600";
  setTimeout(() => {
    inputField.value = originalValue;
    inputField.style.color = "black";
    inputField.style.fontWeight = "500";
  }, 500);
});
