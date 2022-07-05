function onReady() {
  fetchTodos((todos) => {
    // пишем код
    let olNode = document.getElementById("todos");
    for (let todo of todos) {
      const liNode = createTodoNode(todo);
      olNode.appendChild(liNode);
    }
  });

  // Создаени новой ТОДО
  let createTodoButton = document.getElementById("todo_create");
  createTodoButton.addEventListener("click", addTodo);

  function addTodo() {
    let value = document.getElementById("todo_text").value;
    
    fetch("http://127.0.0.1:5000/add", {
      method: "POST",
      // headers: {'Content-Type': 'application/json'},
      body: value,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Создаени новой ТОДО

  function fetchTodos(fn) {
    fetch("http://127.0.0.1:5000/")
      .then((data) => data.json())
      .then(({ todos }) => {
        fn(todos);
      });
  }
}

// создаем Nodes
function createTodoNode(todo) {
  let li = document.createElement("li");
  li.classList.add("todo");
  let h3 = document.createElement("h3");
  h3.classList.add("todo-header");
  h3.innerText = todo;
  li.appendChild(h3);
  let div = document.createElement("div");
  div.classList.add("todo-status");
  div.innerText = "In progress";
  li.appendChild(div);

  return li;
}
