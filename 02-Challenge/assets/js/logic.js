// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.getElementById('toggle');
const body = document.body;
const container = document.querySelector('.container');

const savedTheme = localStorage.getItem('theme');
let mode = savedTheme || 'dark';


function applyTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    container.classList.add('dark');
    container.classList.remove('light');
    themeSwitcher.textContent = "🌞"; // Icon for dark mode
  } else {
    body.classList.add('light-mode');
    container.classList.add('light');
    container.classList.remove('dark');
    themeSwitcher.textContent = "🌙"; // Icon for light mode
  }
}

// Apply the theme on page load
applyTheme(mode);

// Add click event listener to toggle the theme
themeSwitcher.addEventListener('click', function () {
  mode = mode === 'dark' ? 'light' : 'dark'; // Toggle mode
  applyTheme(mode); // Apply the new mode
  localStorage.setItem('theme', mode); // Save to localStorage
});

// Function to read from localStorage
function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// Function to save data to localStorage
function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key); // Use the helper function to read data
  existingData.push(newData); // Add new data
  localStorage.setItem(key, JSON.stringify(existingData)); // Save updated data
}

// Redirect function
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url); // Redirect to the specified URL
};