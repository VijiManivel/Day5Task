
var odds =() =>{
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    var oddarr=[];
    for(var i in arr){
        if(arr[i]%2!=0){
            oddarr.push(arr[i]);
            i++;

        }
    }
    return oddarr;
    
} 
console.log(odds());