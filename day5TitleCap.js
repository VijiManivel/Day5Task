
var convert= function(){
    var str="converting string to titlecase";
    var str1= str.toLowerCase().split(' ');
    //console.log(str1);
    for(i in str1){
        str1[i]=str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 

    }
    return(str1.join(" "));
    

}
console.log(convert());
