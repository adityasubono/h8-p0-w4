/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * FPB
 * */
function fpb(angka1, angka2) {
    // you can only write your code here!
    let temp=0;
    while (angka2 !== 0) {
        console.log('While =', angka2, '!== 0')
        temp = angka1 % angka2;
        console.log('Isi Temp =', temp, '=',angka1,'%',angka2)
        angka1 = angka2;
        console.log('angka 1', angka1, '=',angka2)
        angka2 = temp;
        console.log('angka 2', angka2, '=',temp)
    }
    return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1