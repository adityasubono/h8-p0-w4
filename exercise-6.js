/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * DigitPerkalianMinimum
 * */
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let temp = 0;
    let jumDigit = 0, tempDigit = 0;
    let bagi;
    for(let i=1; i <=angka; i++){
        temp= angka % i;
        // console.log(angka,'/',i,'=',temp)
        if(temp === 0){
            bagi = angka / i;
            jumDigit= bagi.toString().length + i.toString().length;
           // console.log(jumDigit);
        }
        if(tempDigit === 0 || jumDigit <  tempDigit){
            tempDigit = jumDigit;
        }
    }
return tempDigit

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2