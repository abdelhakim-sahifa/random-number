
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
    copyToClipboard(randomNumber);
    await sleep(1000);
    label.style.fontSize = '50px'
    label.classList.remove('green')
   
}

label.addEventListener('mouseenter' , generateRandomNumber)




// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show notification
        document.getElementById('copyNotification').style.display = 'inline';
        // Hide notification after 2 seconds
        setTimeout(function() {
            document.getElementById('copyNotification').style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
}







