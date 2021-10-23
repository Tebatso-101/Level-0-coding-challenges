function convertTemperature(celsius) {
   var f = celsius * (9/5) +32; 
   console.log(Math.round(f) + "\xB0" + "F");
}
convertTemperature(3);

=====================================================

function convertTemperature(fahrenheit) {
   var c = (fahrenheit - 32) * (5/9); 
    console.log(Math.round(c) + "\xB0" + "C");
}
convertTemperature(90);