export const setInputError = function (elements, message) {
  elements.input.classList.add("error-border");
  elements.errorMessage.classList.add("error");
  elements.errorMessage.textContent = message;
};

export const removeInputError = function (elements) {
  elements.input.classList.remove("error-border");
  elements.errorMessage.remove();
};

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
