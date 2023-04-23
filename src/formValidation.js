export const fromValidity = (form) => {
  const validationDiv = document.querySelector(".invalid");
  validationDiv.style.display = "none";
  if (form.length < 1) {
    validationDiv.textContent = "input too short (minial 1 letter)";
    validationDiv.style.display = "grid";
    return false;
  } else {
    return true;
  }
};
