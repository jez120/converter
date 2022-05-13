let input = document.getElementById('input')

function inputEl(){
    text = input.value
    if(text){
        changeBigNumber()   
    } else {
        document.getElementById('number').innerText = "0"
        document.getElementById('meter').textContent = "0"
        document.getElementById('feet').innerText = "0"
        document.getElementById('meter1').textContent = "0"
        document.getElementById('feet1').innerText = "0"
    }
}

// directly changing number while input changes
function changeBigNumber() {
    document.getElementById('number').innerText = text 
    meterToFeet()
    convert()
}

// meter number takes "text" - input value 
// while inputEl() is activated 
function meterToFeet(){
       meter.textContent = text
        feet.textContent = text    
}

// converting values 
function convert(){
    let feet1 = text * 3.280839895 
    let meter1 = text * 0.328
    document.getElementById('feet1').innerText = feet1.toFixed(3)
    document.getElementById('meter1').innerText = meter1.toFixed(3)
} 


