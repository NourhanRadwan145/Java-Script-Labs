// Get references to HTML elements
var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var todoList = document.getElementById("taskList"); // ul element

// Add click event listener to the add button
addBtn.addEventListener("click", function () {
  // Create a new list item
  var createdList = document.createElement("li");
  createdList.style.listStyle = "none";
  createdList.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  // Get the input value
  var input = todoInput.value;
  if (input === "") {
    alert("Please enter a task");
    return;
  }
  // Set the input value as the text content of the created list item
  createdList.innerText = input;

  // Retrieve tasks from local storage
  var tasks = localStorage.getItem("tasks");
  if (tasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasks);
  }

  // Push the input value to the tasks array and update local storage
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear the input field
  todoInput.value = "";

  // Create buttons container
  var buttonsDiv = document.createElement("div");

  // Create Done button
  var checkBtn = document.createElement("button");
  checkBtn.classList.add("btn", "btn-success", "me-2");
  checkBtn.innerText = "Done";

  // Create Delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.innerText = "Delete";

  // Append buttons to the buttons container
  buttonsDiv.appendChild(checkBtn);
  buttonsDiv.appendChild(deleteBtn);

  // Append the buttons container to the created list item
  createdList.appendChild(buttonsDiv);

  // Append the created list item to the todo list
  todoList.appendChild(createdList);

  // Add click event listener to the Done button
  checkBtn.addEventListener("click", function () {
    createdList.style.color = "green";
    createdList.style.backgroundColor = "#c8e6c9";
  });

  // Add click event listener to the Delete button
  deleteBtn.addEventListener("click", function () {
    // Remove the created list item from the todo list
    todoList.removeChild(createdList);
    // Remove the task from the tasks array and update local storage
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(tasks.indexOf(input), 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
});
