document.addEventListener("DOMContentLoaded", function() {
    // Qui incolla tutto il tuo codice del carosello (setInterval, ecc.)
    let indice = 0;
    const immagini = document.querySelectorAll('.carosello img');
    
    setInterval(() => {
        immagini[indice].classList.remove('attiva');
        indice = (indice + 1) % immagini.length;
        immagini[indice].classList.add('attiva');
    }, 3000); // Cambia ogni 3 secondi
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
