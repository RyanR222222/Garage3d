// Gestione Carosello (Ogni 4 secondi)
setInterval(() => {
    const caroselli = document.querySelectorAll('.carosello');
    caroselli.forEach(carosello => {
        const immagini = carosello.querySelectorAll('img');
        immagini[0].classList.toggle('attiva');
        immagini[1].classList.toggle('attiva');
    });
}, 4000);

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
