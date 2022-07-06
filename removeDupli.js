
var final= function(){
    var arr =[1,2,2,3,4,5,5,6,7,8,8];
    var n= arr.length;
    var temp=[];
    var j=0;

    for (var i =0;i<arr.length; i++){
        if(arr[i]!=arr[i+1]){
            temp[j++]=arr[i];
            
        }

    }
    return temp;

}
console.log(final());
