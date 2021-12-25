const item = document.querySelector(".item");
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
    e.target.append(item);
    e.target.classList.remove("hovered");
  });
}

item.addEventListener("dragstart", (e) => {
  setTimeout(() => e.target.classList.add("hide"), 0);
  e.target.classList.add("hold");
});

item.addEventListener("dragend", (e) => {
  e.target.classList.remove("hold", "hide");
});
