/*
In questo progetto svilupperai una semplice applicazione web che simula il comportamento di un counter (contatore).
🎯 Realizza un'applicazione in JavaScript che permetta all’utente di aumentare o diminuire il valore di un counter attraverso due pulsanti, + e −.

Vediamo il funzionamento atteso del counter:
Quando l’utente accede alla pagina, deve visualizzare il valore iniziale del counter impostato a 0.
Devono essere presenti due pulsanti, uno per incrementare (+) e uno per decrementare (−) il valore del counter.
Dopo aver creato dinamicamente gli elementi dell’interfaccia, implementa la funzione che aggiungerà e diminuirà il valore del counter.

Requisiti tecnici
L’applicazione deve soddisfare i seguenti requisiti:

L’applicazione deve essere sviluppata esclusivamente in JavaScript puro.
L’interfaccia del counter (pulsanti +/- e visualizzazione del valore) deve essere creata dinamicamente tramite JavaScript,
utilizzando la manipolazione del DOM.

È consentito l’utilizzo di librerie JavaScript esterne, solo se necessarie.
Se lo desideri, puoi aggiungere funzionalità aggiuntive che ritieni utili o interessanti (per esempio, salvataggio del valore, 
personalizzazione del contatore, ecc.).
*/




document.addEventListener("DOMContentLoaded", () => {


    // counter variabile
    let counter = 0;

    // seleziona gli elementi
    const tagContatore = document.querySelector(".contatore"); //contenitore del numero
    const boxButton = document.querySelector(".box-button");

    //creazione bottoni
    const btnIncrease = document.createElement("button");
    const btnDecrease = document.createElement("button");
    const btnReset = document.createElement("button")

    //agginge classi e contenuto bottoni
    btnReset.textContent = "RESET"; //tasto reset
    btnReset.className = "btn reset";

    btnDecrease.textContent = "-" //bottone decremento
    btnDecrease.className = "btn";

    btnIncrease.textContent = "+";
    btnIncrease.className = "btn";


    //inserire bottoni nel DOM e contatore
    tagContatore.textContent = counter;

    boxButton.appendChild(btnReset);
    boxButton.appendChild(btnDecrease);
    boxButton.appendChild(btnIncrease);

    // funzione incrementa
    function incremento () {
        counter++
        tagContatore.textContent = counter;
        // condizione if
    }

    //funzione decrementa
    function decremento() {
        counter --;
        tagContatore.textContent = counter;
        if (counter <=0) {
            counter = 0;
            tagContatore.textContent = counter
        }
    }

    btnIncrease.addEventListener("click", incremento);
    btnDecrease.addEventListener("click", decremento);


}) 
