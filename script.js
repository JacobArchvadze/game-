window.onload = function() {
    let startInput = prompt("ჩაწერეთ დიაპაზონის პირველი რიცხვი:");
    if (startInput === null) {
        alert("გემშვიდობებით");
        return; 
    }
    
    let endInput = prompt("ჩაწერეთ დიაპაზონის ბოლო რიცხვი:");
    if (endInput === null) {
        alert("გემშვიდობებით");
        return; 
    }
    
    let start = parseInt(startInput);
    let end = parseInt(endInput);
    
    if (!isNaN(start) && !isNaN(end) && start < end) {
        playGame(start, end);
    } 
    else {
        alert("გამოიყენეთ რიცხვები");
    }
};

function playGame(start, end) {
    let targetNumber = generateRandomNumber(start, end);
    let attempts = 0;
    
     alert(`გამოიცანი რიცხვი ${start}-დან ${end}-მდე.`);
    
    while (true) {
        let userGuess = getUserGuess();
        attempts++;
        
        if (userGuess === null) {
            alert("გემშვიდობებით.");
            return;
        } else if (userGuess < targetNumber) {
            alert("სცადეთ უფრო მაღალი რიცხვი");
        } else if (userGuess > targetNumber) {
            alert("სცადეთ უფრო დაბალი რიცხვი");
        } else {
            alert(`თქვენ გამოიცანით რიცხვი ${attempts} ცდაში`);
            break;
        }
    }
}

function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getUserGuess() {
    while (true) {
        let guess = prompt("სცადეთ გამოიცნოთ");
        if (guess === null) {
            return null; 
        } else if (!isNaN(guess.trim()) && guess.trim() !== "") {
            return parseInt(guess.trim());
        } else {
            alert("ჩაწერეთ მხოლოდ რიცხვი");
        }
    }
}