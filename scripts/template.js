function getCategoryTemplate(categoryObj) {
  return `
    <ul class="menu-overview">
        <li><a href="${categoryObj.link}">${categoryObj.category}</a></li>
    </ul>
    `;
}


async function renderToDoTemplate() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  let list = await getDB("todo");
  let listRef = Object.entries(list)
  listRef.forEach((item) => {
    return (todoList.innerHTML += `<div class="todo-item"><li>${item[1].todo}</li><div class="todo-manipulation"><button class="todo-edit" onclick="editToDo(this, '${item[0]}')"></button><button class="todo-delete" onclick="deleteToDo(this,${item[0]})"></button></div></div>`);
  });
}

async function getDB(path = "") {
  let response = await fetch(firebaseDB + path + ".json");
  let responseRef = await response.json();
  let list = responseRef;
  return list;
}


function getEditInput(inputValue, todoID) {
  return `
  <div class="todo-item">
  <input type="text" value="${inputValue}" class="input-todo">
  <div class="todo-manipulation">
  <button class="todo-edit-save" onclick="sendEditToDo(this,'${todoID}')"></button>
  <button class="todo-delete" onclick="deleteToDo(this)"></button></div></div>
  `
}

/* 
function menuSectionTemplate(indexedQuicklink){
    return `
    <ul class="menu-overview">
        <li><a href="${indexedQuicklink.link}">${indexedQuicklink.name}</a></li>
    </ul>
    `
}


function mainContentTemplate(indexedQuicklink) {
    return `
    <iframe src="${indexedQuicklink}" title"">
    </iframe>
    `
} */
