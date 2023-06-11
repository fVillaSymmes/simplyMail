const mailDestinatario = document.getElementById("mailDestinatario")    
const titulo = document.getElementById("titulo")
const mensaje = document.getElementById("mensaje")
const mailRemitente = document.getElementById("mailRemitente")
const mail1 = document.getElementById("mail1")
const mail2 = document.getElementById("mail2")
const mail3 = document.getElementById("mail3")
const mail4 = document.getElementById("mail4")
const mail5 = document.getElementById("mail5")
const mail6 = document.getElementById("mail6")
const boton = document.getElementById("boton")
//

let inputsAModificar = [mailDestinatario,titulo,mensaje,mailRemitente,mail1,mail2,mail3,mail4,mail5, mail6]

for (const input of inputsAModificar) {
    input.addEventListener("click", rescribir)
}

function rescribir() {
    this.innerHTML = prompt("Ingrese el nuevo valor de este campo:")
}

boton.addEventListener("click", mensajito)

function correoPorConsola(destino, title, msg, remitente, ...mails) {
    console.log(`
    PARA: ${destino.innerHTML}\n
    TITULO: ${title.innerHTML}\n
    MENSAJE: ${msg.innerHTML}\n
    REMITENTE: ${remitente.innerHTML}
    `);
    for (const mail of mails) {
        console.log(`CC: ${mail.innerHTML}`);
    }
}

function mensajito() {
    correoPorConsola(...inputsAModificar)
}