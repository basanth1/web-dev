const input = document.querySelector(".list input");
const button = document.querySelector(".add");
const notes = document.querySelector(".notes");
const updateNotes = () => {
    console.log(input.value);
    const div = document.createElement("div");
div.classList.add("add-list");
div.innerText= input.value;
notes.appendChild(div);
console.log(div);
  };
button.addEventListener("click", updateNotes);

button.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    updateNotes();
  }
});

