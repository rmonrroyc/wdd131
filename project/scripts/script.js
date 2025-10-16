
const visits = localStorage.getItem("visits");
const updatedVisits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("visits", updatedVisits);


document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thank you for contacting us, ${name}!`);
      form.reset();
    });
  }


  const foodList = [
    { name: "Cazuela", region: "Biobío" },
    { name: "Empanadas", region: "Central Chile" },
    { name: "Paila Marina", region: "Coastal Area" }
  ];

  const listElement = document.getElementById("food-list");
  if (listElement) {
    foodList.forEach(food => {
      const li = document.createElement("li");
      li.textContent = `${food.name} (${food.region})`;
      listElement.appendChild(li);
    });
  }
});

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