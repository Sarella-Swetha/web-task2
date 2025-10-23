// Select elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add event listener to Add button
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") addTask();
});

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add toggle functionality (mark complete)
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Delete functionality
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering li click event
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
