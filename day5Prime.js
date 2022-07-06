var prime= function()  {
   var  arr=[1,2,3,4,5,6,7,8,9,10];
   var priNum=[];
    //var flag;
    for (let i =0; i < arr.length; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (arr[i] % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (arr[i] > 1 && flag == 0) {
            priNum.push(arr[i]);
        }
    }
    return priNum;
    }
    console.log(prime());
