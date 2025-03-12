//DOM elements :
const label = document.getElementById('lbl');
const modeToggle = document.getElementById('mode-toggle');
const historyDiv = document.getElementById('history') ;
const funFactLbl = document.getElementById('funFactLbl');

//init

var isdark = localStorage.getItem('isDark');
if(isdark){
    document.body.classList.add('dark-body');
    modeToggle.classList.add('dark-mode-toggle');
    modeToggle.classList.add('fa-sun');
    label.style.border = 'solid 1px white';
}


var listOfHistory = JSON.parse(localStorage.getItem('historyList')) || [];
refreshHistory(listOfHistory);







//Event Listeners :
label.addEventListener('mouseenter' , generateRandomNumber)

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



//function :
async function generateRandomNumber() {
    label.style.fontSize = '100px';
    funFactLbl.style.display = 'none'
    for(i=0 ; i < 10 ; i++){
      var randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
       
      
        label.classList.add('red');
        label.innerText = randomNumber;
        await sleep(50);
    }
    label.classList.remove('red')
    label.classList.add('green');
    randomNumber = pickRandomNumber()
    label.innerText = randomNumber;
    await getFunFact(randomNumber)
    saveToHistory(randomNumber);
    copyToClipboard(randomNumber);
    await sleep(1000);
    label.style.fontSize = '50px'
    label.classList.remove('green')
   
}
function pickRandomNumber(){
    var listOfRandomNumbers = []

    for(var i = 10 ; i <= 10000 ; i*=10){
        var randomNumber = Math.floor(Math.random() * i).toString().padStart(4, '0');
        listOfRandomNumbers.push(randomNumber)
         
     }
     

     let randomIndex = Math.floor(Math.random() * 4);

    
     return  listOfRandomNumbers[randomIndex];
     

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



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
            
            
        }
        

        
    }

    else{
        historyDiv.innerHTML = `
            
        <label>----</label>


        `;
    }


}


async function getFunFact(number) {
    try {
        let url = `https://numfunfacts.vercel.app/fact/${number}`;
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let res = await response.json(); // Properly declare `res`
        

        if (funFactLbl) { // Ensure the element exists
            funFactLbl.style.display = 'flex';
            funFactLbl.textContent = res.fact; // Set the correct fact
        }
        
    } catch (error) {
        console.error('Error fetching the fact:', error);
        if (funFactLbl) funFactLbl.textContent = 'Error fetching the fact.';
    }
}



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








