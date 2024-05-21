const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const results = document.getElementById("result");


const palindrome = (input) => {
  const inputText = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }
   results.replaceChildren();

  const lowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()

  let result = `<strong>${inputText}</strong> ${lowerCase === [...lowerCase].reverse().join("") ? "is" : "is not"} a palindrome`;

  const resultText = document.createElement("p");
  resultText.className = "user-input";
  resultText.innerHTML = result;
  results.appendChild(resultText);

  results.classList.remove('hide');
};

checkButton.addEventListener("click", () => {
  palindrome(input.value);
  input.value = "";
});
input.addEventListener("keydown", (enter) => {
  if(enter.key === "Enter") {
    palindrome(input.value);
    input.value = "";
  };
});
