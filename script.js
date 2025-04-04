const messages = [
  "Just patching the firewall...",
  "Downloading more RAM...",
  "Polishing the buttons...",
  "Checking for viruses (none found)",
  "Unblocking the unblocked...",
  "Rendering more pixels...",
];

document.getElementById("clicky").addEventListener("click", () => {
  const msgArea = document.getElementById("msgArea");
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  msgArea.textContent = randomMessage;
});
