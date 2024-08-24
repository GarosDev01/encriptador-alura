// Expresion regular para validar que el mensaje solo contenga letras minúsculas
const regexPass = /^[a-z\s]+$/;

let inputMessage = document.getElementById("input-text");
let outputMessage = document.getElementById("output-text");

let buttonEncrypt = document.getElementById("btnEncrypt");
let buttonDecrypt = document.getElementById("btnDecrypt");
let buttonCopy = document.getElementById("btnCopy");

let decryptField = document.getElementById("hideOutput");
let noMessageCard = document.getElementById("contentNoMessage");

// Funciones de encriptación y desencriptación

function encrypt() {
  let messageToBeTested = inputMessage.value;
  if (regexPass.test(messageToBeTested) == true) {
    let encryptedMessage = messageToBeTested
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat")
      .replaceAll("o", "ober");

    outputMessage = encryptedMessage;
    document.getElementById("output-text").innerHTML = outputMessage;
  } else {
    alert(
      "Mensaje no válido, solo se permiten letras minúsculas sin acentos ni caracteres especiales"
    );
  }
}

function decrypt() {
  let messageToBeTested = inputMessage.value;
  if (regexPass.test(messageToBeTested) == true) {
    let decryptedMessage = messageToBeTested
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ufat", "u")
      .replaceAll("ober", "o");

    outputMessage = decryptedMessage;
    document.getElementById("output-text").innerHTML = outputMessage;
  } else {
    alert(
      "Mensaje no válido, solo se permiten letras minúsculas sin acentos ni caracteres especiales"
    );
  }
}

// Funcion para copiar el mensaje encriptado o desencriptado

function copyMessage() {
  let messageToBeCopied = outputMessage;
  navigator.clipboard.writeText(messageToBeCopied);
  alert("Texto copiado al portapapeles");
}

// Funciones para limpiar los campos de texto

function clearInputEncrypt() {
  noMessageCard.classList.add("display-option");
  decryptField.classList.remove("display-option");
  encrypt();
  inputMessage.value = "";
}

function clearInputDecrypt() {
  noMessageCard.classList.add("display-option");
  decryptField.classList.remove("display-option");
  decrypt();
  inputMessage.value = "";
}

//  Llamado a las funciones

buttonEncrypt.addEventListener("click", clearInputEncrypt);

buttonDecrypt.addEventListener("click", clearInputDecrypt);

buttonCopy.addEventListener("click", copyMessage);
