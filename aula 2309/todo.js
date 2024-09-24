// todo.js
const form = document.querySelector("form");
const tarefas = document.getElementById("tarefas");

form.addEventListener("submit", function(event){
    // impede o submit do form
    event.preventDefault();

    const tarefa = document.createElement("p");
    tarefa.innerHTML= "uma tarefa";

    tarefas.appendChild(tarefa);

        
});

// ou

// form.addEventListener("submit", e=>{
    // e.preventDefault();
// });

