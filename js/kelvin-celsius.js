document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;


function tempConvert(){
    var kelvin = document.getElementById('kelvin').value;
    var celsius = document.getElementById('celsius').value;
    
    if(isNaN(kelvin) || isNaN(celsius)){
        alert("Digite somente números!")
        return
    } else if(kelvin === ''){
        kelvin = (parseFloat(celsius)) + 273,15;
    } else if(celsius === ''){
        celsius = (parseFloat(kelvin)) - 273,15;
    }
    
    document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

function clearForm(){
    document.getElementById('kelvin').value = "";
    document.getElementById('celsius').value = "";
}