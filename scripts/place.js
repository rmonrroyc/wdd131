const temperature = 45; // °F
const windSpeed = 5; // mph

function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  document.getElementById("temperature").textContent = temperature;
  document.getElementById("windSpeed").textContent = windSpeed;

  const windChillElement = document.getElementById("windChill");
  if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} °F`;
  } else {
    windChillElement.textContent = "N/A";
  }
});

