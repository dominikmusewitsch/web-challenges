console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// btn für Dark Mode (add)

const btnDarkMode = document.querySelector(`[data-js="dark-mode-button"]`);

btnDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
