/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * AngkaPrima
 * */
function angkaPrima(angka) {
    // you can only write your code here!
    var prima;
    if (angka >= 2) {
        prima = true;
        for (let j = 2; j < angka; j++) {
            if (angka % j === 0) {
                prima = false;
            }
        }
    }
    return prima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false