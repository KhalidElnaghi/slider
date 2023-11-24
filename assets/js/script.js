document.getElementById("next").onclick = function () {
  let items = document.querySelectorAll(".item");
  document.getElementById("slider").appendChild(items[0]);
};
document.getElementById("prev").onclick = function () {
  let items = document.querySelectorAll(".item");
  document.getElementById("slider").prepend(items[items.length - 1]);
};
