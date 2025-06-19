console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const finalMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideFinalMessage() {
  finalMessage.setAttribute("hidden", "");
}

function showFinalMessage() {
  finalMessage.removeAttribute("hidden");
}

hideTosError();
hideFinalMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const isChecked = event.target.elements.tos.checked;

  // console.log(formElements.tos.checked);

  if (!isChecked) {
    showTosError();
    hideFinalMessage();
    return;
  } else {
    hideTosError();
    showFinalMessage();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
