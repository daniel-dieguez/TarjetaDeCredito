var btnEmpezar = document.getElementById("btnempezar");
const inputnumero = document.getElementById("num");


inputnumero.addEventListener("input", (e) => {
  const error = document.getElementById("error");
  const inputValue = e.target.value;

  let objetos = /[A-z]/g;
  if (objetos.test(inputnumero.value)) {
    error.innerHTML = "Error, se encuentra una letra ";
  } else {
    inputnumero.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, `$1 `)
      .trim();
    error.innerHTML = "";
  }
});

const colocar = document.getElementById("numeros");
inputnumero.addEventListener("keyup", () => {
  colocar.innerHTML = inputnumero.value;
});

btnEmpezar.addEventListener("click", mostrar);
function mostrar() {
  event.preventDefault();
  
  if (inputnumero.value.length == 0) {
    Swal.fire({
      icon: "warning",
      title: "REVISE",
      text: "Tiene que poner numeros",
    });
  } else if (inputnumero.value.length < 19) {
    Swal.fire({
      icon: "warning",
      title: "REVISE",
      text: "Faltan numeros",
    });
  } else if (inputnumero.value.length > 19) {
    Swal.fire({
      icon: "warning",
      title: "REVISE",
      text: "Revise, Son muchos numeros",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Numeros bien escritos",
      text: "Bien echor",
    });

  }
  form.reset();
}

