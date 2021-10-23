function maxNumber(val1, val2, val3) {
   var maxNum = 0;
    
   switch(true) {
    case val1 > val2 && val1 > val3:
     maxNum = val1;
        break;
    case val2 > val1 && val2 > val3:  
     maxNum = val2;
        break;
    case val3 > val2 && val3 > val1:
     maxNum = val3;   
        break;}

     console.log(maxNum);
    }
maxNumber(10001,2212,351);

===============================================================

function maxNumber(val1, val2, val3, valx) {
   var maxNum = 0;
   var logic1 = val1 > val2 && val1 > val3 && val1 > valx;
   var logic2 = val2 > val1 && val2 > val3 && val2 > valx;
   var logic3 = val3 > val2 && val3 > val1 && val3 > valx;
   var logic4 = valx > val1 && valx > val2 && valx > val3;
   
   switch(true) {
    case logic1:
     maxNum = val1;
        break;
    case logic2:  
     maxNum = val2;
        break;
    case logic3:
     maxNum = val3;   
        break;
    case logic4:   
     maxNum = valx;
        break;    }

     console.log(maxNum);
    }
maxNumber(111111,22020,3000,400);
