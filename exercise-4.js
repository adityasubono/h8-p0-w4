/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * CariModus
 * */
function cariModus(arr) {
    // you can only write your code here!
    var modus=0;
    var angka=0;
    for(var i=0; i<arr.sort().length; i++){
        //console.log(arr[i],'==',arr[i+1])
        if(arr[i] === arr[i + 1]){
            //console.log(arr[i],'==',arr[i+1])
            modus = arr[i];
            angka++
        }
    }
    if(modus === 0 || angka === arr.length -1){
        return -1
    }
return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1