
const products = [
  { id: 1, name: "Smart Thermostat" },
  { id: 2, name: "LED Ceiling Light" },
  { id: 3, name: "Home Security Camera" },
  { id: 4, name: "Wireless Doorbell" },
  { id: 5, name: "Smart Speaker" },
  { id: 6, name: "Robot Vacuum" },
  { id: 7, name: "Smart Plug" }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

