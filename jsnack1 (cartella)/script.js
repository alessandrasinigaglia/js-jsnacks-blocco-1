// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
const numero1 = prompt("Inserisci il primo numero:");
const numero2 = prompt("Inserisci il secondo numero:");
if (numero1 > numero2) {
    console.log(`Il maggiore è: ${numero1}`);
  } else if (numero2 > numero1) {
    console.log(`Il maggiore è: ${numero2}`);
  } else {
    console.log("I numeri sono uguali");
  }
