function displayTweet() {
  let inputRef = document.querySelector("input");
  let outputRef = document.querySelector("#output");

  outputRef.innerHTML = inputRef.value;

  inputRef.value = "";
}
