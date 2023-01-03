
var btnEmpezar = document.getElementById("btnempezar");
var inputnumero = document.getElementById("num");
var btnrestart = document.getElementById("restart");


inputnumero.addEventListener('keypress', (event) =>{
  event.preventDefault();
  const codigo = event.keyCode;
  const valor = String.fromCharCode(codigo);
  
  console.log(valor);

  let validacion = parseInt(valor);
  console.log(validacion);
  if(valor){
    inputnumero.value +=  validacion;
  }

});


btnEmpezar.addEventListener("click", function (){
  event.preventDefault();
  form.reset();

  var Numeros = document.getElementById("num");
  const crearNum = document.createElement('cuenta');
  crearNum.innerHTML = Numeros.value;

  const colocar = document.getElementById('numeros');
  colocar.appendChild(crearNum);

  if (Numeros.value.length == 0){
    Swal.fire({
      icon: 'warning',
      title: 'REVISE',
      text: 'Tiene que poner numeros',
    })

  }
  else if (Numeros.value.length < 12){
    Swal.fire({
      icon: 'warning',
      title: 'REVISE',
      text: 'Faltan numeros',
    })
  }
  else if (Numeros.value.length > 12){
    Swal.fire({
      icon: 'warning',
      title: 'REVISE',
      text: 'Revise, Son muchos numeros',
    })
  }
  else{
    Swal.fire({
      icon: 'success',
      title: 'Numeros bien escritos',
      text: 'Bien echor',
    })
  }
  
});


btnrestart.addEventListener('click', function () {
  document.querySelectorAll('#num').forEach((element) =>{
    element.innerHTML='';
  });
});