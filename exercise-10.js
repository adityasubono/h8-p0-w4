/**
 * Bismillahirohmanirohim
 * Aditya Nugroho Subono Batch 39 Majestik
 * ChangeMe
 * */
function changeMe(arr) {
    // you can only write your code here!
    var a =0;
    let data =
        {
            firstName: '',
            lastName:'',
            gender:'',
            age:''
        };

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++) {
            console.log(i+1+"."+arr[i][j]+" "+arr[i][j+1]+":")
            data.firstName = arr[i][j];
            j++;
            data.lastName = arr[i][j];
            j++;
            data.gender = arr[i][j];
            j++;
            if(arr[i][j] == null){
                data.age ='Invalid Birth Year';
            }else{
                a = 2019 - arr[i][j]
                data.age = a;
            }
            j++;
            console.log(data)
        }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""