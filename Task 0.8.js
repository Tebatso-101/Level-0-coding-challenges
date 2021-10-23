function hoursAndMinutes(num){
    var h = num / 60;
    var m = num % 60;
    var x = Math.floor(h);

    if (x > 1 && m > 1)
    console.log(x + " hours, " + m + " minutes");
    if (x > 1 && m == 1)
    console.log(x + " hours, " + m + " minute");
    if (x > 1 && m < 1)
    console.log(x + " hours, " + m + " minutes");
        if (x == 1 && m > 1)
        console.log(x + " hour, " + m + " minutes");
        if (x == 1 && m == 1)
        console.log(x + " hour, " + m + " minute");
        if (x == 1 && m < 1)
        console.log(x + " hour, " + m + " minutes");
            if (x < 1 & m > 1)
            console.log(x + " hours, " + m + " minutes");
            if (x < 1 & m == 1)
            console.log(x + " hours, " + m + " minute");
            if (x < 1 && m < 1)
            console.log(x + " hours, " + m + " minutes");
}

hoursAndMinutes(62);