// Display current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const newDate = new Date();
  const baseTime = newDate.toLocaleTimeString();
  const ms = String(newDate.getMilliseconds()).padStart(3, "0");
  timeElement.textContent = `${baseTime} .${ms}`;
}

updateTime();
setInterval(updateTime, 500); // updates every second (reasonable frequency)
