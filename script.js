//Hero form validation

function validateHeroForm() {
  const heroForm = document.forms[0];
  const emailInput = document.querySelector("[data-hero-input]");
  const errorSpan  = document.querySelector("[data-error-span]");
  
 heroForm.addEventListener("submit", function() {
   const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const inputValue = emailInput.value;

   errorSpan.textContent = "";

   if(!emailRegex.test(inputValue)) {
     errorSpan.textContent = "Please check your email";
   }
 });
}

validateHeroForm();

