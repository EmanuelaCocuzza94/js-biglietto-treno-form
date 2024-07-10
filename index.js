console.log('calcola prezzo');

// dobbiamo richiamarci il form-prezzo

const formElement = document.getElementById('form-prezzo');
console.log(formElement)

// dichiamariamo le costanti con const

const inputKmElement = document.getElementById('km');
const inputEtàElement = document.getElementById('age');
const callOutputElement = document.getElementById('call-output');

console.log(inputKmElement, inputEtàElement, callOutputElement)

formElement.addEventListener('submit', function(event){
    event.preventDefault();

    const km = parseFloat(inputKmElement.value);
    console.log(km);

    const age = parseFloat(inputEtàElement.value);
    console.log(age)

    let prezzoBase= km * 0.21;
    prezzoBase = prezzoBase.toFixed(2);
    console.log('Prezzo base calcolato: ' + prezzoBase);    

    let sconto = 0;

    if (age <= 18){
    sconto = prezzoBase * 20/100;
    console.log('Età minore di 18 => sconto del 20%');
    } else if (age >= 65) { 
    sconto = prezzoBase * 40/100;
    console.log('Età maggiore di 65 => sconto del 40%');
    }

    sconto = sconto.toFixed(2)
    console.log('Sconto in euro: ' + sconto);


    let prezzoScontato = prezzoBase - sconto;
    prezzoScontato = prezzoScontato.toFixed(2);
    
    callOutputElement.innerHTML = prezzoScontato;

})




