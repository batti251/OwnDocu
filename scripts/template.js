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
  let listRef = Object.values(list);
  listRef.forEach((item) => {
    return (todoList.innerHTML += `<div class="todo-item"><li>${item.todo}</li><div class="todo-manipulation"><button class="todo-edit" onclick="editToDo(this)"></button><button class="todo-delete" onclick="deleteToDo(this)"></button></div></div>`);
  });
}

async function getDB(path = "") {
  let response = await fetch(firebaseDB + path + ".json");
  let responseRef = await response.json();
  let list = responseRef;
  return list;
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
