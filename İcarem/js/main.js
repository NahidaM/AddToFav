"use strict";
var btnSelect = document.getElementById("btnSelect");
var options = document.getElementById("options");
var optionList = document.querySelectorAll(".options li");
var label = document.querySelector("#btnSelect .label");
var input = document.querySelector(".input-wrapper input");
var btnSearch = document.querySelector(".search-btn");
var removeButton = document.querySelector(".remove-button");
var chevronIcon = document.querySelector(".search-btn i");
var rollIcon = document.querySelector(".search-btn .roll-icon");
var test = document.querySelector(".test");

// btnSelect.addEventListener("click", (e) => {
//   e.preventDefault();
//   options.style.display = "block";
// });

let hearts = document.getElementsByClassName("far");
for (let heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target.nodeName);
    console.log("hj");
    this.classList.toggle("fas");
  });
}

for (var option of optionList) {
  option.addEventListener("click", (e) => {
    label.innerText = e.target.innerText;
    options.style.display = "none";
  });
}

(function () {
  const cartBtn = document.querySelectorAll(".fa-heart");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      if (event.target.parentElement.classList.contains("fa-heart")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img");
        let partPath = fullPath.slice(pos);
        console.log(partPath);
      }
    });
  });
});

// input.addEventListener("input", (e) => {
//   if (e.target.value != "") {
//     btnSearch.style.display = "block";
//     removeButton.style.display = "block";
//   } else {
//     btnSearch.style.display = "none";
//     removeButton.style.display = "none";
//   }
// });
// removeButton.addEventListener("click", (e) => {
//   input.value = "";
// });
// btnSearch.addEventListener("click", (e) => {
//   chevronIcon.style.display = "none";
//   rollIcon.style.display = "block";
// });

// function myFunction(x) {
//   x.classList.toggle("fa-thumbs-down");
// }
