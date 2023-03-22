document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;


function tempConvert(){
    var kelvin = document.getElementById('kelvin').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    
    if(isNaN(kelvin) || isNaN(fahrenheit)){
        alert("Digite somente números!")
        return
    } else if(kelvin === ''){
        kelvin = (parseFloat(fahrenheit - 32)) * 0.56 + 273,15;
    } else if(fahrenheit === ''){
        fahrenheit = (parseFloat(kelvin - 273,15)) * 1.8 + 32;
    }
    
    document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(1);
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
}

function clearForm(){
    document.getElementById('kelvin').value = "";
    document.getElementById('fahrenheit').value = "";
}