
const label = document.getElementById('lbl');
const modeToggle = document.getElementById('mode-toggle');
const historyDiv = document.getElementById('history') ;




var listOfHistory = JSON.parse(localStorage.getItem('historyList')) || [];
refreshHistory(listOfHistory);





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
    saveToHistory(randomNumber);
    copyToClipboard(randomNumber);
    await sleep(1000);
    label.style.fontSize = '50px'
    label.classList.remove('green')
   
}

label.addEventListener('mouseenter' , generateRandomNumber)




// Function to copy text to clipboard
function copyToClipboard(text) {
    function attemptCopy() {
        navigator.clipboard.writeText(text).then(function() {
            // Show notification
            document.getElementById('copyNotification').style.display = 'inline';
            // Hide notification after 2 seconds
            setTimeout(function() {
                document.getElementById('copyNotification').style.display = 'none';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });
    }

    if (document.hasFocus()) {
        attemptCopy();
    } else {
        window.addEventListener('focus', function onFocus() {
            attemptCopy();
            window.removeEventListener('focus', onFocus);
        });
    }
}



var isdark = localStorage.getItem('isDark')

if(isdark){
    document.body.classList.add('dark-body');
    modeToggle.classList.add('dark-mode-toggle');
    modeToggle.classList.add('fa-sun');
    label.style.border = 'solid 1px white';
}





modeToggle.addEventListener('click' , () => {
    var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    if(backgroundColor== 'rgb(255, 255, 255)'){
        document.body.classList.add('dark-body');
        modeToggle.classList.add('dark-mode-toggle');
        modeToggle.classList.add('fa-sun');
        label.style.border = 'solid 1px white';
        historyDiv.style.border = 'solid 1px white';
        localStorage.setItem('isDark', true);
    }
    else{
        document.body.classList.remove('dark-body');
        modeToggle.classList.remove('dark-mode-toggle');
        modeToggle.classList.remove('fa-sun')
        modeToggle.classList.add('fa-moon')
        label.style.border = 'solid 1px black';
        historyDiv.style.border = 'solid 1px black';
        localStorage.removeItem('isDark');
    }
})



function saveToHistory(theRandomNumber) {
    if (listOfHistory.length == 3) {
        listOfHistory.splice(0, 1);
    }
    listOfHistory.push(theRandomNumber);
    localStorage.setItem('historyList', JSON.stringify(listOfHistory));
    refreshHistory(listOfHistory);
}



function refreshHistory(listOfHistory){
    historyDiv.innerHTML = '';
    

    if(listOfHistory != null){
        for(var item of listOfHistory){
            var  numberLabel = document.createElement('label');
            numberLabel.innerHTML = `
            
            <label id="lbl${listOfHistory.indexOf(item)}" class="history-lbl" >${item}</label>
        
        
            `;
            historyDiv.appendChild(numberLabel);
            console.log(item);
            
        }
        console.log("------------");

        
    }

    else{
        historyDiv.innerHTML = `
            
        <label>----</label>


        `;
    }


}

