var toggleButton = document.getElementById("toggleSlider"),
  slide = document.querySelector(".slide");
slide_2 = document.querySelector(".slide_2");
rotate180 = document.querySelector(".oval");

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

toggleButton.addEventListener("click", toggleSlider, false);

function toggleSlider() {
  if (slide.classList.contains("slide-up")) {
    slide.classList.remove("slide-up");

    if (width >= 768) {
      document.getElementById("toggleSlider").style =
        "transform: rotate(90deg);";
    }

    if (width < 768) {
      document.getElementById("toggleSlider").style =
        "transform: rotate(-180deg);";
    }
  } else {
    slide.classList.add("slide-up");

    if (width >= 768) {
      document.getElementById("toggleSlider").style =
        "transform: rotate(-90deg);";
    }

    if (width < 768) {
      document.getElementById("toggleSlider").style =
        "transform: rotate(0deg);";
    }
  }

  if (slide_2.classList.contains("slide-right")) {
    slide_2.classList.remove("slide-right");
  } else {
    slide_2.classList.add("slide-right");
  }
}

if (width >= 768) {
  slide.classList.add("hide");
} else if (width < 768) {
  slide_2.classList.add("hide");
}

/////////////////////////////////// Validation checks

var input = document.getElementsByTagName("input");
var label = document.getElementById("email_label");

var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("email");
var error = document.querySelector(".error");

email.addEventListener(
  "input",
  function(event) {
    // Each time the user types something, we check if the
    // email field is valid.
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      error.innerHTML = ""; // Reset the content of the message
      error.className = "error"; // Reset the visual state of the message
      input.email.style = "border: none;";
      label.style = "color: #373d40";
      label.classList.remove("err_indicator");
    }
  },
  false
);
form.addEventListener(
  "submit",
  function(event) {
    // Each time the user tries to send the data, we check
    // if the email field is valid.
    if (!email.validity.valid) {
      // If the field is not valid, we display a custom
      // error message.
      error.innerHTML = "Invalid email address";
      error.className = "error active";
      input.email.style = "border: 1px solid #ff9200;";
      label.style = "color: #ff9200";
      label.classList.add("err_indicator");

      // And we prevent the form from being sent by canceling the event
      event.preventDefault();
    } else {
      alert("Your details have been saved!");
    }
  },
  false
);
