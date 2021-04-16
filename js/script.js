document.getElementById("botao-de-enviar").addEventListener("click", validaFormulario)

function validaFormulario() {

  if (document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value !="") 
    {
    alert("Prontinho voce recebera as novidades por email")
   }
  else {
    alert("Os campos não foram preenchidos coretamente")
  }

}




