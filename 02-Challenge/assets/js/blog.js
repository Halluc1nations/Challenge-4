// TODO: Create a variable that selects the main element, and a variable that selects the back button element
// Select the main element
const mainElement = document.querySelector('main');

// Select the back button element
const backButton = document.querySelector('.back-button');

// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(tagname, attributes, parentSelector, content = '') {
  // Create an element
  const element = document.createElement(tagname);

  // Add attributes to the element
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  // Add content to the element
  element.textContent = content;

  // Append the element to the parent
  document.querySelector(parentSelector).appendChild(element);
}
function handleNoBlogPosts(parentSelector) {
    // Find the parent element where blog posts would be displayed
    const parentElement = document.querySelector(parentSelector);
  
    // Clear any existing content in the parent element
    parentElement.innerHTML = '';
  
    // Create a message element to inform the user
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No blog posts to display.';
    messageElement.classList.add('no-posts-message'); // Optional: Add a class for styling
  
    // Append the message element to the parent element
    parentElement.appendChild(messageElement);
  }
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(parentSelector, blogData) {
    // Get the parent element
    const parentElement = document.querySelector(parentSelector);
  
    // Clear any existing content
    parentElement.innerHTML = '';
  
    // Check if there are any blog posts
    if (blogData.length === 0) {
      // Call the no posts function if there are no blog posts
      handleNoBlogPosts(parentSelector);
      return;
    }
  
    // Iterate over the blog data and render each post
    blogData.forEach((post) => {
      // Create a container for each blog post
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
  
      // Create and append the title
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);
  
      // Create and append the username
      const usernameElement = document.createElement('p');
      usernameElement.textContent = `By: ${post.username}`;
      postElement.appendChild(usernameElement);
  
      // Create and append the content
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      postElement.appendChild(contentElement);
  
      // Append the post element to the parent
      parentElement.appendChild(postElement);
    });
  }
// TODO: Call the `renderBlogList` function
function renderBlogList(parentSelector, blogData) {
    // Get the parent element
    const parentElement = document.querySelector(parentSelector);
  
    // Clear any existing content
    parentElement.innerHTML = '';
  
    // Check if there are any blog posts
    if (blogData.length === 0) {
      // Call the no posts function if there are no blog posts
      handleNoBlogPosts(parentSelector);
      return;
    }
  
    // Iterate over the blog data and render each post
    blogData.forEach((post) => {
      // Create a container for each blog post
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
  
      // Create and append the title
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);
  
      // Create and append the username
      const usernameElement = document.createElement('p');
      usernameElement.textContent = `By: ${post.username}`;
      postElement.appendChild(usernameElement);
  
      // Create and append the content
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      postElement.appendChild(contentElement);
  
      // Append the post element to the parent
      parentElement.appendChild(postElement);
    });
  }
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
const backButton = document.getElementById('back-button');

// Define the event listener for the back button click
backButton.addEventListener('click', function () {
  // Call the `redirectPage` function to redirect to the home page
  redirectPage('blog.html');
});