const messages = [
  "Hold on, we're adding cool stuff!",
  "Unblocking the fun...",
  "Almost ready to play!",
  "This page is under construction,.",
  "Expected release date 4-7-25."
];

document.getElementById("clicky").addEventListener("click", () => {
  const msgArea = document.getElementById("msgArea");
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  msgArea.textContent = randomMessage;
});