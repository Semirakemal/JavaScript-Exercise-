document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");


  const span = document.createElement("span");
  span.textContent = taskText;


  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.onclick = function () {
    span.style.textDecoration = "line-through";
    completeBtn.remove();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent =  "✖️";
  deleteBtn.onclick = function () {
    li.remove();
  };


  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);


  document.getElementById("taskList").appendChild(li);

  input.value = "";
}