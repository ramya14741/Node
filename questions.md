Sample Question 1: CRUD API using Express.js
Problem: Create a RESTful API for managing a list of products. The products should have the following attributes: id, name, price, and quantity. You need to implement the following endpoints:
GET /products: Return a list of all products.
POST /products: Add a new product to the list.
GET /products/:id: Get details of a product by its id.
PUT /products/:id: Update a product's details.
DELETE /products/:id: Remove a product from the list

Expectations:
Use Node.js and Express to set up the API.
Implement proper error handling for invalid requests.
Use an in-memory store (like an array) for product data.
Ensure all API routes are functional and follow REST conventions.
Write tests to verify the correctness of your endpoints.

Sample Question 2: File System Operations with Node.js
Problem: You are tasked with reading a large CSV file and converting it into JSON format.
 Write a function that reads the file and converts the data into an array of JavaScript 
 objects where each object represents a row in the CSV file.
Use Node.js’s file system (fs) module to read the file asynchronously.
Convert the CSV content into JSON objects.
Handle cases where the CSV has missing or malformed data.
Write the result to a new JSON file.
Expectations:
Use fs.promises for async file operations.
Ensure proper error handling in case the file is missing or unreadable.
Use appropriate string/array manipulation methods to parse the CSV.


Sample Question 3: Asynchronous JavaScript - Fetch Data and Process
Problem: Write a function that fetches data from a public API
 (e.g., https://jsonplaceholder.typicode.com/posts), processes the data, and returns a summary.
Fetch a list of posts from the API.
Group posts by the userId and count how many posts each user has.
Return an object where the keys are userIds and the values are the counts of posts.
Expectations:
Use fetch or a library like axios to get the data.
Handle the promise with async/await.
Ensure that errors (like network issues) are handled appropriately.
Process the JSON data into the required format and return the final result.

Sample Question 4: DOM Manipulation with JavaScript (for a web environment)
Problem: Create a simple to-do list web application where users can add, remove, and toggle the completion status of tasks. The application should allow:
Adding a new task by typing into an input field and clicking a button.
Removing a task by clicking a "Delete" button next to each task.
Toggling the completion status by clicking the task.
Displaying the total number of tasks and the number of completed tasks.
Expectations:
Use vanilla JavaScript to manipulate the DOM.
Manage the state of tasks in the application without refreshing the page.
Use CSS to visually differentiate between completed and incomplete tasks.
Implement event listeners for adding/removing/toggling tasks.

Sample Question 5: Promise Chaining and Error Handling
Problem: You have three asynchronous operations fetchUser(), fetchPosts(userId), and fetchComments(postId). These return a user, their posts, and comments on a specific post, respectively. Write a function that:
Fetches a user’s data.
Fetches their posts based on the userId.
Fetches comments for the first post.
Return the user's details, posts, and comments for the first post in a single combined object.
Expectations:
Use promise chaining or async/await to handle these asynchronous operations.
Properly handle errors at each step and ensure that the function still returns useful information when one part of the chain fails.
Ensure the final output is a combined object containing user, posts, and comments.

Sample Question 6: Array and Object Manipulation
Problem: Write a function deepMerge that deeply merges two objects. If a key exists in both objects and the values are objects, merge them recursively. If they are not objects, overwrite the value from the first object with the value from the second object.
javascript
Copy code
const obj1 = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: '12345',
  },
  hobbies: ['Reading'],
};

const obj2 = {
  age: 25,
  address: {
    country: 'Fantasyland',
    zip: '54321',
  },
  hobbies: ['Traveling'],
};

const result = deepMerge(obj1, obj2);
console.log(result);
// Expected Output:
// {
//   name: 'Alice',
//   age: 25,
//   address: {
//     city: 'Wonderland',
//     country: 'Fantasyland',
//     zip: '54321',
//   },
//   hobbies: ['Traveling'],
// }
Expectations:
Implement a recursive function that handles deep merging of nested objects.
Ensure array values are overwritten rather than concatenated.
Handle edge cases, such as non-object values or missing keys.
