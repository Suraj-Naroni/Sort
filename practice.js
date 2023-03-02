"use strict";

const cities = ["Solapur", "Nagpur", "Kolhapur", "Raichur"];

function bodyLoad() {
  document.querySelector("ol").innerHTML = "";
  for (let city of cities) {
    let list = document.createElement("li");
    list.innerHTML = city;
    document.querySelector("ol").appendChild(list);
  }
}

function sortCities() {
  let icon = document.querySelector(".bi");
  icon.className =
    icon.className == "bi bi-sort-alpha-down"
      ? "bi bi-sort-alpha-up"
      : "bi bi-sort-alpha-down";
  if (icon.className == "bi bi-sort-alpha-up") {
    document.getElementById("msg").innerHTML =
      "Sorted in Ascending Order! 📉".fontcolor("paleturquoise");
    cities.sort();
  } else if (icon.className == "bi bi-sort-alpha-down") {
    document.getElementById("msg").innerHTML =
      "Sorted in Descending Order! 📈".fontcolor("crimson");

    icon.className == "bi bi-sort-alpha-down";
    cities.sort();
    cities.reverse();
  }
  bodyLoad();
}
