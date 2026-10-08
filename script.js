async function getWeather(){
    let city=document.getElementById("city").value; 
    if(city==" ")return alert("Enter a city name.");
    try{
        let res=await fetch("https://wttr.in/"+city+"?format=j1");
        let data=await res.json();
        let W=data.current_condition[0];
        document.getElementById("result").innerHTML=
        "<h3>"+city+"</h3>"+
        "Temperature:"+W.temp_C+"&deg;C<br>"+
        "Condition:"+W.weatherDesc[0].value+"<br>"+
        "Humidity:"+W.humidity+"%";
    }catch{
        document.getElementById("result").innerHTML=
        "Unable to getWeather information.";
    }
}