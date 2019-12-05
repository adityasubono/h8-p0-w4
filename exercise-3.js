/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * CariMedian (Shoppers)
 * */
function cariMedian(arr) {
    // you can only write your code here!
   var index =0;
   var result =0;

    if(arr.length % 2 == 0){ //jumlah genap
        index = arr.length / 2
        result = (arr[index] + arr[index - 1])/2
        return result
    }else {
        index = arr.length % 2 //jumlah ganjil
        result = arr[index + 1]
        return result
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5