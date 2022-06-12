function counter() {
  let ref = document.querySelector("h1");

  let strValue = ref.innerHTML;
  let intValue = parseInt(strValue);

  intValue++;

  ref.innerHTML = intValue;
}
