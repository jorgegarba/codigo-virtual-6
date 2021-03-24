
const titulo = document.getElementById("titulo");
const listaTODOS = document.getElementById("listaTODOS");
titulo.innerText = "Cargando.....";

axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((rpta) => {
    titulo.innerText = "Ech! la data ya llegó";
    const { data } = rpta;
    console.log(data);
    data.forEach((objTodo) => {
      const li = document.createElement("li");
      li.innerText = `${objTodo.title} - ${objTodo.completed ? 'completado' : 'incompleto'}`;
      listaTODOS.appendChild(li);
    })

  }).catch((error) => {
    console.log(error);
    titulo.innerText = "Ups!!!! Houston tenemos problemas de conexión";
  });
