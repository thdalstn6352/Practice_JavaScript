const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDo_Array = [];
const newId = toDo_Array.length + 1;

function deleteToDo(event) {
  toDoLists.removeChild(event.target.parentNode);
  let newId = 1;
  const cleanToDos = toDo_Array.filter(function(toDo_Array) {
    return toDo_Array.id !== parseInt(event.target.parentNode.id);
  });
  toDo_Array = cleanToDos;
  // console.log(JSON.stringify(toDo_Array));
  toDo_Array.forEach(function(toDo) {
    toDo.id = newId;
    newId += 1;
  });
  const li = toDoLists.querySelectorAll("li");
  for ( var i = 0; i < li.length; i++ ) {
    li[i].id = i + 1;
  }
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDo_Array));
}

function printToDo(toDo) {
  const toDoList = document.createElement('li');
  const delBtn = document.createElement('button');
  const toDoSpan = document.createElement('span');
  

  delBtn.textContent = "❌";
  delBtn.addEventListener("click", deleteToDo);
  toDoSpan.textContent = toDo;

  toDoList.append(delBtn)
  toDoList.append(toDoSpan);
  toDoList.id = newId;
  toDoLists.append(toDoList);

  const toDoObj = {
    todo : toDo,
    id : newId
  };
  toDo_Array.push(toDoObj);
  console.log(toDo_Array);
  saveToDos();
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
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function(toDos) {
      printToDo(toDos.todo);
    });
  }
  saveToDos();
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();