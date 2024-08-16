let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let cridtCard = document.getElementById("cridt");
let userName = document.getElementById("name");
let Date = document.getElementById("date");
let form = document.getElementById("form");
let erromail;
let errorpassword;
let phoneerror;
let carderror;
let usernameerror;

// console.log(email.value)
// let emailRe=/\w+@\w+.\w+/ig
//     let emailtest=emailRe.test(email.value)
//     console.log(emailtest)

function checkmails() {
  let emailRe = /\w+@\w+.\w+/gi;
  let emailtest = emailRe.test(email.value);
  if (email.nextElementSibling == erromail) {
    erromail.remove();
  }
  if (emailtest) {
    return true;
  } else {
    console.log("false");
    erromail = document.createElement("span");
    let errortext = document.createTextNode(
      "Invalide maile use this pattern nn@mmm.com"
    );
    erromail.appendChild(errortext);
    erromail.style.cssText = "color:red;font-size=10px;";
    email.insertAdjacentElement("afterend", erromail);
    return false;
  }
}
function checkpassword() {
  let passwordRe = /[A-Z]/;
  let passwordRe2 = /[a-z]/;
  let passwordRe3 = /[0-9]/;
  let passwordRe4 = /(\W+|_)/;

  let passwordTest =
    passwordRe.test(password.value) &&
    passwordRe2.test(password.value) &&
    passwordRe3.test(password.value) &&
    passwordRe4.test(password.value);
  if (password.nextElementSibling == errorpassword) {
    errorpassword.remove();
  }
  if (passwordTest) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    errorpassword = document.createElement("span");
    let errorpasswordText = document.createTextNode(
      "Weak password you must use special character"
    );
    errorpassword.appendChild(errorpasswordText);
    errorpassword.style.cssText = "color:red;font-size=10px;";
    password.insertAdjacentElement("afterend", errorpassword);
    return false;
  }
}

function checkphonenumber() {
  let phonenumberRe = /01\d{9}/gi;
  let phonenumberTest = phonenumberRe.test(phone.value);
  if (phone.nextElementSibling == phoneerror) {
    phoneerror.remove();
  }
  if (phonenumberTest) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    phoneerror = document.createElement("span");
    let phoneerrorText = document.createTextNode("invalid phone number ");
    phoneerror.appendChild(phoneerrorText);
    phoneerror.style.cssText = "color:red;font-size=10px;";
    phone.insertAdjacentElement("afterend", phoneerror);
  }
}
function checkcridetCard() {
  let cardRe = /\d{4}-\d{4}-\d{4}/gi;
  let cardTest = cardRe.test(cridtCard.value);
  if (cridtCard.nextElementSibling == carderror) {
    carderror.remove();
  }

  if (cardTest) {
    return true;
  } else {
    carderror = document.createElement("span");
    let cardText = document.createTextNode(
      "invalid card number must be 1234-4567-8987"
    );
    carderror.appendChild(cardText);
    carderror.style.cssText = "color:red;font-size=10px;";
    cridtCard.insertAdjacentElement("afterend", carderror);
  }
}
function checkusername() {
  let usernameRe = /\w{5,15}/gi;
  let usernameTest = usernameRe.test(userName.value);
  if (userName.nextElementSibling == usernameerror) {
    usernameerror.remove();
  }
  if (usernameTest) {
    return true;
  } else {
    usernameerror = document.createElement("span");
    let usernameerrorText = document.createTextNode(
      "invalid user Name,name must be between 5to 15"
    );
    usernameerror.appendChild(usernameerrorText);
    usernameerror.style.cssText = "color:red;font-size=10px;";
    userName.insertAdjacentElement("afterend", usernameerror);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    checkmails() &&
    checkpassword() &&
    checkphonenumber() &&
    checkcridetCard() &&
    checkusername() 
  )
    alert("form submitted");
});
