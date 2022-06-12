function displayTweet() {
  let inputRef = document.querySelector("input");
  let outputRef = document.querySelector("#output");

  let oldValue = outputRef.innerHTML;
  let newValue = "<h1> " + inputRef.value + " </h1>";

  outputRef.innerHTML = newValue + oldValue;

  inputRef.value = "";
}
