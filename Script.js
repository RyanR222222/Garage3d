// Aspetta che tutta la pagina sia caricata prima di partire
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleziona tutti i caroselli presenti nella pagina
    const caroselli = document.querySelectorAll('.carosello');

    caroselli.forEach(carosello => {
        const immagini = carosello.querySelectorAll('img');
        let indiceCorrente = 0;

        // Funzione per cambiare immagine
        function cambiaImmagine() {
            // Togli la classe 'attiva' dall'immagine attuale
            immagini[indiceCorrente].classList.remove('attiva');
            
            // Passa alla prossima immagine (torna a 0 se è l'ultima)
            indiceCorrente = (indiceCorrente + 1) % immagini.length;
            
            // Aggiungi la classe 'attiva' alla nuova immagine
            immagini[indiceCorrente].classList.add('attiva');
        }

        // Fai partire il cambio ogni 3 secondi (3000 millisecondi)
        setInterval(cambiaImmagine, 3000);
    });
});
// Gestione Barra di Ricerca
const inputRicerca = document.querySelector('#cerca-prodotto');
const prodotti = document.querySelectorAll('.prodotto');

if(inputRicerca) {
    inputRicerca.addEventListener('input', () => {
        const valore = inputRicerca.value.toLowerCase();
        
        prodotti.forEach(prodotto => {
            const nomeProdotto = prodotto.querySelector('h2').innerText.toLowerCase();
            // Mostra o nasconde il prodotto in base alla ricerca
            if (nomeProdotto.includes(valore)) {
                prodotto.style.display = "block";
            } else {
                prodotto.style.display = "none";
            }
        });
    });
}
