const formData = {email: "", message: ""};

const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

form.addEventListener("input", function (event) {
 if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
} 
});

const savedData = localStorage.getItem(localStorageKey);
if (savedData !== null) {
 
  const parsedData = JSON.parse(savedData);
  form.elements.email.value = parsedData.email;
  formData.email = parsedData.email;
  form.elements.message.value = parsedData.message;
  formData.message = parsedData.message;
}


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
if (!formData.email || !formData.message) {
  alert("Fill please all fields")
} else {
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = "";
  formData.message = "";
}
});
