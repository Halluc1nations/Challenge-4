// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.getElementById('toggle');
const body = document.body;
const container = document.querySelector('.container');

let mode = 'dark';

themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    container.removeAttribute('class', 'dark');
    themeSwitcher.textContent = "🌙";
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    container.removeAttribute('class', 'light');
    themeSwitcher.textContent = "🌞";
  }
});

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleSwitch.classList.add('active');
}



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage(key) {
  // Retrieve data from localStorage
  const data = localStorage.getItem(key);

  // If data exists, parse and return it; otherwise, return an empty array
  return data ? JSON.parse(data) : [];
}
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
  // Retrieve existing data from local storage
  const existingData = localStorage.getItem(key);

  // Parse existing data or initialize an empty array
  const parsedData = existingData ? JSON.parse(existingData) : [];

  // Add new data to the existing array
  parsedData.push(newData);

  // Store the updated array back into local storage
  localStorage.setItem(key, JSON.stringify(parsedData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

