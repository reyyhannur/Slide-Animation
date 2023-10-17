function ChangeTheme() {
  var root = document.querySelector(":root");
  var color = getComputedStyle(root);

  color.getPropertyValue("--background") == "#ffeead"
    ? root.style.setProperty("--background", "#07252d")
    : root.style.setProperty("--background", "#ffeead");
}
