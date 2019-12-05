/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * ShoppingTime
 * */
function shoppingTime(memberId, money) {
    // you can only write your code here!
    var daftarBarang = [
        {
            namaBarang: 'Sepatu Stacatu',
            harga: '1500000'
        },
        {
            namaBarang: 'Baju Zoro',
            harga: '500000'
        },
        {
            namaBarang: 'Baju H&N',
            harga: '250000'
        },
        {
            namaBarang: 'Sweater Uniklooh',
            harga: '175000'
        },
        {
            namaBarang: 'Casing Handphone',
            harga: '50000'
        }
    ];
    let listPurchases=[];
    let basket=0;
    let changeMoney = money;
    let mampu = false;
    if(memberId === '' || ( memberId == null && money == null)){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    for(i=0; i<daftarBarang.length;i++){
        if(money > daftarBarang[i].harga) {
            mampu = true;
                basket = changeMoney - daftarBarang[i].harga;
                    listPurchases.push(daftarBarang[i].namaBarang);
            changeMoney = basket;
        }
    }
    if(mampu) {
        return {
            "memberId": memberId,
            "money": money,
            "listPurchased": listPurchases,
            "changeMoney": changeMoney
        };
    } else return "Mohon maaf, uang tidak cukup"
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja