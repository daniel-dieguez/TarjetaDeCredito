
var btnEmpezar = document.getElementById("btnempezar");

btnEmpezar.addEventListener("click",function (){
  event.preventDefault();
  var Numeros = document.getElementById("num");
  const islleno = true;

  if (Numeros.value.length > 8, Numeros.value.length < 8){
    alert('La cantidad de numeros no es correcta')
  }
  else{
    Swal.fire({
      icon: 'success',
      title: 'Numeros bien escritos',
      text: 'Bien echor',
    })
  }
  

});



/*
Swal.fire({
      icon: 'success',
      title: 'Numeros bien escritos',
      text: 'Bien echor',
    })
     */