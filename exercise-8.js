/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * TukarBesarKecil
 * */
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var cacahKalimat= kalimat.split('');
    for(var i=0; i<cacahKalimat.length;i++){
      if(cacahKalimat[i].charCodeAt() >=65 && cacahKalimat[i].charCodeAt() <= 90){
          cacahKalimat[i] = cacahKalimat[i].toLowerCase()
      }else if(cacahKalimat[i].charCodeAt() >=97 && cacahKalimat[i].charCodeAt() <=122){
          cacahKalimat[i] = cacahKalimat[i].toUpperCase()
      }
   }
   return cacahKalimat.join('')
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"