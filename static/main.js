let email = document.getElementById("email");
let email2 = document.getElementById("email2");

function validarEmail(e) {
  email = e
  let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!regex.test(email.value)) {
    email.style.borderColor = 'red';
  } else {
    email.style.borderColor = 'blue';
  }
}

function validarEmail2(e) {
  email = e
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email.value)) {
    email.style.borderColor = 'purple';
  } else {
    email.style.borderColor = "green";
  }
}

validarEmail(email);
validarEmail2(email2)