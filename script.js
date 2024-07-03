
const label = document.getElementById('lbl');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateRandomNumber() {
    label.style.fontSize = '100px';
   

    for(i=0 ; i < 10 ; i++){
        var randomNumber = Math.floor(1000 + Math.random() * 9000);
        label.classList.add('red');
        label.innerText = randomNumber;
        await sleep(50);
    }
    label.classList.remove('red')
    label.classList.add('green');
    label.innerText = randomNumber;
    await sleep(1000);
    label.style.fontSize = '50px'
    label.classList.remove('green')
   
}

label.addEventListener('mouseenter' , generateRandomNumber)


//todo
function copy(){
    label.select();
    label.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');
}