function areaOfTriangle(val1, val2, val3){
    
    var s = 0.5 * (val1+val2+val3);
    var h = (s*(s-val1)*(s-val2)*(s-val3)); 
    var area = Math.sqrt(h); 
    console.log(area);
    
} 
areaOfTriangle(10,8,6);