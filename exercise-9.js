/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * CheckAB
 * */
function checkAB(num) {
    // you can only write your code here!
var num
    num = num.split('');
    for(var i=0; i<num.length; i++){
        //console.log(num[i]);
        //console.log(num[i][j]);
        if(num[i]==='a' && num[i-4]==='b' || num[i+4]==='b'){
            //console.log(num[i],num[i+4],num[i-4])
           return true
        }else{
            //console.log(num[i],num[i+4],num[i-4])
            // return false
        }

    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('apibakar')); // false