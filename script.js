document.getElementById("demoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Form captured locally (static demo, nothing is sent anywhere).";
});
