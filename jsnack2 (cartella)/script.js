// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const invitati = ['Roberta', 'Antonio', 'Nicola', 'Giuseppe', 'Martina', 'Alessia'];
const nomeUtente = prompt("Qual è il tuo nome?");
let trovato = false;
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i].toLowerCase === nomeUtente.toLowerCase) { 
      trovato = true;
    }
}
if (trovato) {
    alert(`Ciao, ${nomeUtente}! Sei invitato alla festa del grande Gatsby!`);
  } else {
    alert(`Mi dispiace, ${nomeUtente}. Non sei invitato.`);
}