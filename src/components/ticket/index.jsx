import React from "react"
import './style.css'

function Ticket ({title, message, contact}) {
    function limitarPalavras(texto, limite) {
        const palavras = texto.split(" ");
        if (palavras.length <= limite) return texto;
        return palavras.slice(0, limite).join(" ") + "...";
    }
    return (
    <div id="containerTicket">
        <h1 id="title">{limitarPalavras(title, 2)}</h1>
        <p id="message">{limitarPalavras(message, 10)}</p>
        <p id="contact">{limitarPalavras(contact, 2)}</p>
    </div>
    )
}

export default Ticket