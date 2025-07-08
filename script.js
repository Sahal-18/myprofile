window.onload = function () {
  document.querySelector(".html-bar").style.width = "90%";
  document.querySelector(".css-bar").style.width = "85%";
  document.querySelector(".js-bar").style.width = "75%";
  document.querySelector(".php-bar").style.width = "80%";
};
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
