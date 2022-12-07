
var btnEmpezar = document.getElementById("btnempezar");
var inputnumero = document.getElementById("num");
var btnrestart = document.getElementById("restart");


inputnumero.addEventListener('keypress', (event) =>{
  event.preventDefault();
  let codigo = event.keyCode;
  let valor = String.fromCharCode(codigo);
  
  console.log(valor);

  let validacion = parseInt(valor);
  console.log(validacion);
  if(valor){
    inputnumero.value +=  validacion;
  }

});


btnEmpezar.addEventListener("click", function (){
  event.preventDefault();
  var Numeros = document.getElementById("num");
  

  if (Numeros.value.length > 12, Numeros.value.length < 12){
    Swal.fire({
      icon: 'warning',
      title: 'REVISE',
      text: 'Revise nuevamente, digitos mal escritos',
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