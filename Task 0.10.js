function showCommonChars(par1,par2){
    var x = par1 && par2;
    
        for (var i = 0; i < par1.length || i < par2.length; i++){
        if (par1[i] == par2[i])
        console.log("Common letters: " + x[i]);}
}
showCommonChars("whom","where");