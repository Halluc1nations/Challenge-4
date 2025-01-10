// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get references to the form inputs
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorElement = document.getElementById('error');
  
    // Check for missing data
    if (!username || !title || !content) {
      errorElement.textContent = 'All fields are required. Please fill out the form completely.';
      errorElement.style.color = 'red';
      return;
    }
  
    // Clear any previous error message
    errorElement.textContent = '';
  
    // Create the blog post object
    const blogPost = {
      username: username,
      title: title,
      content: content,
      date: new Date().toISOString(), // Add a timestamp
    };
  
    // Store the blog post in local storage
    storeLocalStorage('blogs', blogPost);
  
    // Redirect to the blog page
    redirectPage('blog.html');
  }
  
  // Function to redirect to a new page
  function redirectPage(page) {
    window.location.href = page;
  }
  
  // Add event listener to the form
  const form = document.querySelector('#blog-form');
  form.addEventListener('submit', handleFormSubmission);
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
