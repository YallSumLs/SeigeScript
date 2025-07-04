function showTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".tab-button").forEach(el => el.classList.remove("active"));

  document.getElementById(tabName).classList.remove("hidden");
  const button = Array.from(document.querySelectorAll(".tab-button"))
    .find(btn => btn.textContent.toLowerCase() === tabName.toLowerCase());
  if (button) button.classList.add("active");
}

function sendWS(message) {
  const ws = new WebSocket("ws://localhost:8765");
  ws.onopen = () => {
    ws.send(message);
    console.log("Sent:", message);
    ws.close();
  };
}
