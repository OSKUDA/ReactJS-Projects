function validateEmailPassword(email = "", password = "") {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  };
}

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword(input) {
  var passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  } else {
    return false;
  }
}

export default validateEmailPassword;
