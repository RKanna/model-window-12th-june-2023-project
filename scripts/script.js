"use strict";

//getting and assigning input and output variables
//btns
const btnOne = document.getElementById(`btn-one`);
const btnTwo = document.getElementById(`btn-two`);
const btnThree = document.getElementById(`btn-three`);
const btnClose = document.getElementById(`btn-close`);
//container
const modelContainer = document.getElementById(`model-container`);

//overlay
const overLay = document.getElementById(`overlay`);

//for selecting all buttons at once
const btnsAll = document.querySelectorAll(".btn");
//creating function
const init = function () {
  modelContainer.classList.add("hidden");
};
init();

//adding function for close and open

const openModel = function () {
  modelContainer.classList.remove("hidden");
  modelContainer.classList.add("open");
};

const closeModel = function () {
  modelContainer.classList.remove("open");
  modelContainer.classList.add("hidden");
};

//adding eventListeners for btnOne
btnOne.addEventListener("click", () => {
  openModel();
});

btnTwo.addEventListener("click", () => {
  openModel();
});

btnThree.addEventListener("click", () => {
  openModel();
});

btnOne.addEventListener("click", openModel);
btnTwo.addEventListener("click", openModel);
btnThree.addEventListener("click", openModel);

//loop for querySelectorAll

// for (let i = 0; i < btnsAll.length; i++) {
//   btnsAll[i].addEventListener("click", openModel);
//   console.log(openModel);
// }

btnClose.addEventListener("click", () => {
  closeModel();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModel();
  }
});

overLay.addEventListener("click", () => {
  console.log(modelContainer.style.display);
  // modelContainer.style.display = "none";
  modelContainer.classList.add("hidden");
});
