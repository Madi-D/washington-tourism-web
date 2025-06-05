function validateEmail(event) {
   let Form = document.querySelector("#orm");

    Form.email.style.backgroundColor = "LightGreen";
    Form.verifyemail.style.backgroundColor = "LightGreen";

  if (Form.email.value != Form.verifyemail.value) {
      Form.email.style.backgroundColor = "LightRed";
      Form.verifyemail.style.backgroundColor = "LightRed";
  }
  
}

let Form = document.querySelector("#Form");
Form.validate.addEventListener("click", validateEmail);
