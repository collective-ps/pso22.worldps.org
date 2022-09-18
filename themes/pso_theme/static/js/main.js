var html = document.querySelector("html");

document.getElementById("mode").addEventListener("click", () => {
  var theme = html.dataset["theme"] === "light" ? "dark" : "light";
  html.dataset["theme"] = theme;
  localStorage.setItem("theme", theme);
});

var default_theme = localStorage.getItem("theme") || "dark";

if (default_theme === "dark") {
  html.dataset["theme"] = "dark";
} else {
  html.dataset["theme"] = "light";
}
