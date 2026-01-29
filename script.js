document.getElementById("changeColorBtn").addEventListener("click", function() {
  const colors = ["#f0f0f0", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
