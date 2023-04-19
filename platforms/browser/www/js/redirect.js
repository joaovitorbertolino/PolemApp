// Armazena o IP do servidor em uma variável
var serverIP = "192.168.1.83";

// Cria um objeto XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Define a função que será executada quando houver uma resposta
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Recebe a resposta do PHP (que será um texto contendo "true" ou "false")
// Recebe a resposta do PHP (que será um texto contendo "true" ou "false")
    var resposta = this.responseText;

    // Faz algo com a resposta (por exemplo, redireciona para a homepage se o login for válido)
    if (resposta == "true") {
    window.location.href = "http://localhost:8000/www/homepage.html";
    } else {
    alert("Nome de usuário ou senha incorretos!");
    }

  }
};

// Envia a solicitação para o script PHP usando o IP do servidor
var usuario = document.getElementById("username").value;
var senha = document.getElementById("password").value;
xhttp.open("POST", "http://" + serverIP + "/polem-web/autenticalogin.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("username=" + usuario + "&password=" + senha);
