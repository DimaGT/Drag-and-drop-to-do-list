const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  placeholder.addEventListener("dragenter", (e) => {
    e.target.classList.add("hovered");
  });
  placeholder.addEventListener("dragleave", (e) => {
    e.target.classList.remove("hovered");
  });
  placeholder.addEventListener("drop", (e) => {
    e.target.append(document.getElementsByClassName("hold")[0]);
    e.target.classList.remove("hovered");
  });
}

for (const item of items) {
  item.addEventListener("dragstart", (e) => {
    setTimeout(() => e.target.classList.add("hide"), 0);
    e.target.classList.add("hold");
  });

  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("hold", "hide");
  });
}

document.querySelector(".search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInputValue = document.querySelector(".search-form input").value;
  if (!searchInputValue.trim()) {
    return alert("Enter any text, please.");
  }
  const background = Background.value;
  const color = textColor.value;
  const taskList = document.querySelector(".placeholder");
  const newTask = document.createElement("div");
  newTask.innerHTML = searchInputValue;
  newTask.className = "item";
  newTask.setAttribute("draggable", "true");
  newTask.style.background = background;
  newTask.style.color = color;
  newTask.addEventListener("dragstart", (e) => {
    setTimeout(() => e.target.classList.add("hide"), 0);
    e.target.classList.add("hold");
  });
  newTask.addEventListener("dragend", (e) => {
    e.target.classList.remove("hold", "hide");
  });

  taskList.append(newTask);
  document.querySelector(".search-form input").value = "";
});
