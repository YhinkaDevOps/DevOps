//Question 1
//Sum of elements in array
//printSum([3,4,4]) => 11
function printSum(arr){
    let sum = 0;
    for (let a of arr)
        sum +=a;
    return sum;
};
console.log(printSum([3,4,4]))


//Question 2 
//alice score = [1,2,3]
//bob score = [3,2,1]
const compareTriplets = (a,b) => {
    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) aScore++;
        else if(a[i] < b[i]) bScore++;

    }
    return [aScore, bScore]
}
console.log(compareTriplets([1,2,3], [3,2,1])); //[1,1]

//Question 3

let arrNum = [3,-9,0,1,4,0]
function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for(let i=0; i < arrNum.length; i++){
        if (arrNum[i]>0){
            positive ++
        } 
        if(arrNum[i]<0){
            negative++
        }
        if(arrNum[i]===0){
            zero++
        }
    }

    console.log(parseFloat(positive/arrNum.length)) 
    console.log(parseFloat(negative/arrNum.length)) 
    console.log(parseFloat(zero/arrNum.length)) 
}
plusMinus()





//Question 4
function firstFunction(a,b){
    let total = a+b;
    return a + b;
    
}
console.log(firstFunction(3,4));
 