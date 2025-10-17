const visits = localStorage.getItem("visits");
const updatedVisits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("visits", updatedVisits);

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const temperature = 10; // °C
const windSpeed = 5; // km/h

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  const modifiedEl = document.getElementById("lastModified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modifiedEl) modifiedEl.textContent = document.lastModified;

  const tempEl = document.getElementById("temperature");
  const windEl = document.getElementById("windSpeed");
  const chillEl = document.getElementById("windChill");

  if (tempEl) tempEl.textContent = temperature;
  if (windEl) windEl.textContent = windSpeed;
  if (chillEl) {
    if (temperature <= 10 && windSpeed > 4.8) {
      chillEl.textContent = calculateWindChill(temperature, windSpeed);
    } else {
      chillEl.textContent = "N/A";
    }
  }

  const foodList = [
    {
      name: "Cazuela",
      region: "Biobío",
      image: "images/cazuela.jpg",
      description: "A comforting soup made with meat, corn, potatoes, and pumpkin."
    },
    {
      name: "Empanadas",
      region: "Central Chile",
      image: "images/empanadas.jpg",
      description: "Baked pastry filled with meat, onions, egg, and olives."
    },
    {
      name: "Paila Marina",
      region: "Coastal Area",
      image: "images/paila-marina.jpg",
      description: "A hearty seafood stew with shellfish and fish in broth."
    },
    {
      name: "Charquicán",
      region: "National",
      image: "images/charquican.jpg",
      description: "Traditional stew made with potatoes, squash, and minced meat."
    },
    {
      name: "Pastel de Choclo",
      region: "Central Chile",
      image: "images/pastel-choclo.jpg",
      description: "Corn pie layered with ground beef, chicken, and olives."
    },
    {
      name: "Sopaipillas",
      region: "Southern Chile",
      image: "images/sopaipillas.jpg",
      description: "Fried pumpkin bread, often served with pebre or chancaca."
    }
  ];

  const foodGrid = document.getElementById("food-list");
  if (foodGrid) {
    foodGrid.innerHTML = "";
    foodList.forEach((dish) => {
      const card = document.createElement("div");
      card.classList.add("food-card");

      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p class="region">${dish.region}</p>
        <p class="description">${dish.description}</p>
      `;

      foodGrid.appendChild(card);
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thank you for contacting us, ${name}!`);
      form.reset();
    });
  }

 
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
      header.style.transform = "translateY(-100%)"; 
    } else {
      header.style.transform = "translateY(0)"; 
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}); 

