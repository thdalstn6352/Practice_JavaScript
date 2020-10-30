const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function printToDo(toDo) {
  const toDoList = document.createElement('li');
  toDoList.textContent = toDo;
  toDoLists.append(toDoList);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDo(currentValue);
  toDoInput.value = '';
}
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();