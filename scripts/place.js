const temperature = 10; // °C
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  document.getElementById("temperature").textContent = temperature;
  document.getElementById("windSpeed").textContent = windSpeed;

  const windChillElement = document.getElementById("windChill");

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}`;
  } else {
    windChillElement.textContent = "N/A";
  }
});

