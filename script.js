function convertTemp(){

let temp=document.getElementById("temp").value;

let unit=document.getElementById("unit").value;

let error=document.getElementById("error");

let c=document.getElementById("celsius");

let f=document.getElementById("fahrenheit");

let k=document.getElementById("kelvin");

error.innerHTML="";

c.innerHTML="";
f.innerHTML="";
k.innerHTML="";

if(temp.trim()=="" || isNaN(temp)){

error.innerHTML="❌ Please enter a valid numeric value.";

return;

}

temp=parseFloat(temp);

let Celsius,Fahrenheit,Kelvin;

if(unit=="C"){

if(temp<-273.15){

error.innerHTML="❌ Temperature cannot be below Absolute Zero.";

return;

}

Celsius=temp;

Fahrenheit=(temp*9/5)+32;

Kelvin=temp+273.15;

}

else if(unit=="F"){

Celsius=(temp-32)*5/9;

if(Celsius<-273.15){

error.innerHTML="❌ Temperature cannot be below Absolute Zero.";

return;

}

Fahrenheit=temp;

Kelvin=Celsius+273.15;

}

else{

if(temp<0){

error.innerHTML="❌ Kelvin cannot be negative.";

return;

}

Kelvin=temp;

Celsius=temp-273.15;

Fahrenheit=(Celsius*9/5)+32;

}

c.innerHTML="🌡 Celsius : "+Celsius.toFixed(2)+" °C";

f.innerHTML="🔥 Fahrenheit : "+Fahrenheit.toFixed(2)+" °F";

k.innerHTML="❄ Kelvin : "+Kelvin.toFixed(2)+" K";

}
