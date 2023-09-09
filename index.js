"use strict";
const input = document.querySelector("#email");
const label = document.querySelector(".invalid");
const newsletter = document.querySelector(".newsletter");
const successMessage = document.querySelector(".div--thanks-message");
const btnDismiss = document.querySelector(".btn--dissmiss_message");
const btnSubmit = document.querySelector(".btn--newsletter");
let dismissMessageIsOn = false;

//creating functions for listeners
const invalidInputMessage = function (add, remove) {
  label.classList[remove]("no_display");
  input.classList[add]("wrong");
  input.classList[remove]("inp");
};
const whatToDisplay = function (add, remove) {
  newsletter.classList[add]("no_display");
  successMessage.classList[remove]("no_display");
};

//submit button
const onSubmit = function (e) {
  e.preventDefault();
  if (!input.value || !input.checkValidity()) {
    invalidInputMessage("add", "remove");
    input.addEventListener("click", function (e) {
      invalidInputMessage("remove", "add");
    });
    input.addEventListener("keydown", function (e) {
      invalidInputMessage("remove", "add");
    });
  } else {
    whatToDisplay("add", "remove");
    input.value = "";
    dismissMessageIsOn = true;
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") whatToDisplay("remove", "add");
    });
  }
};

btnSubmit.addEventListener("click", onSubmit);

//dismiss button

btnDismiss.addEventListener("click", () => {
  whatToDisplay("remove", "add");
});
