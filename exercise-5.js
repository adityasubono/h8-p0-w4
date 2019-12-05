/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * UbahHuruf
 * */
function ubahHuruf(kata) {
    // you can only write your code here!
    var indexKata='';
    var nilaiAscii = 0;
    for (var i = 0; i < kata.length; i++) {
        nilaiAscii = Number(kata.charCodeAt(i));
        nilaiAscii++;
        indexKata += String.fromCharCode(nilaiAscii);

        // console.log('Nilai ASCII =',kata[i],'=',Number(kata.charCodeAt(i)),
        //     'Kata Selanjutnya =',String.fromCharCode(nilaiAscii));

    }
    return indexKata
}
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu