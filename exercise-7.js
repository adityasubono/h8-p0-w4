/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * UrutkanAbjad
 * */
function urutkanAbjad(str) {
    // you can only write your code here!
    var nilaiAscii =0;
    var nilaiHuruf='';
    var temp=[]
    for(var i=0; i < str.length; i++){
        //console.log(str[i])
        nilaiAscii=Number(str.charCodeAt(i));
        //console.log(nilaiAscii)
        temp.sort().push(nilaiAscii);
    }
    for(var j=0; j<temp.length; j++){
        //console.log(temp[j])
        nilaiHuruf += String.fromCharCode(temp[j]);
        //console.log(nilaiHuruf)
    }
return nilaiHuruf

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'