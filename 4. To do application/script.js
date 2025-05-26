document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = taskText;

    const emoji = document.createElement("span");
    emoji.className = "emoji";
    emoji.textContent = "😐";
    emoji.addEventListener("click", toggleEmoji);

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(emoji);

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();
  };

  const toggleEmoji = (event) => {
    const emoji = event.target;
    const taskTextSpan = emoji.previousElementSibling;

    if (emoji.textContent === "😐") {
      emoji.textContent = "😊";
      taskTextSpan.classList.add("completed");
    } else {
      emoji.textContent = "😐";
      taskTextSpan.classList.remove("completed");
    }
  };

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", toggleEmoji);
  });
});
