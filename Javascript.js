/*Question 1
Return Array of even numbers from 1<=100*/
function numbers(){
    for (i=1;i<=100;i++){
        if (i%2===0){
            console.log(i);
        }
    }
}
numbers();

/*Question 2 
function returns even numbers between A and B*, between numbers 1 and 10*/
 function evenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    for (var i =1;i<numbers.length;i++){
        if(numbers[i] % 2 ===0 && numbers[i]!=10){
            console.log(numbers[i]);
        }
    }
}
evenNumbers();

/*Question 3 Conditional statement Questions*/
/*(a)*/  var yinka = 3;//using if and else conditonal statements to return statements
if(yinka===2){
    console.log("yinka is equal to 2")
}else{
    console.log("yinka is not equal to 2")
}

/*(b)*/  ages = [1,2,3,4,5,6,7,8,9,10];// using if statements to choose between set of even numbers in an array
for(i=1;i<ages.length;i++){
    if(ages[i]%2===0){
        evenAges = ages[i];
        console.log(evenAges);
    }
}

/*(c)*/ var agess = [1,2,3,4,5,6,7,8,9,10];// using if statements to group even and odd numbers in an array together
var oddAges = [];
var evenAges = [];
for(i=1;i<agess.length;i++){
    if(agess[i]%2===0){
        evenAges.push(agess[i]);
        
    }else{
        oddAges.push(agess[i]);
 
    }
}
console.log('These are even numbers ' + evenAges)
console.log('These are odd numbers: '+ oddAges)

/*(d)*/ var names = ["Bakare","Olayinka"] ;// using if statements to loop through statements
for(i=0;i<names.length;i++){
    if(names===true ){
        
    }
}
console.log(" Bakare Olayinka are my correct names");

/*Question 4 return sum of two integers with firstFunction()*/
function firstFunction(numbers){
    var integerSum =  numbers + numbers;
    console.log("Sum is " + integerSum);
}
firstFunction(5)

/*Question 5 
create function that returns sum of two numbers*/
function printSum(){
    return 1 + 1;
}
printSum()

/*Question 6
return a function that returns an array of the names of 10 of your course mates*/
function A(){
    const courseMates = ['Adaobi','Adedoyin', 'Okikijesu', 'Idongesit', 'Foluso', 'Segun', 'sam', 'Iyin','Elijah','Tobi'];
    return courseMates;
}
 A()

/*Question 7 
add element to the end of in array [1,2,4] using push()*/
function funcA (){
    let num = [1,2,4];
    var push  = num.push(5);
    console.log("New array after push: " + num);
   
}
funcA()

/*Question 8 
Remove the last element in array [1,2,3,8] using pop()*/
function funcB () {
    let num = [1,2,3,8];
    var popped = num.pop();
    console.log('Removed element: ' + popped);//popped last element which is 8 from array
    console.log('Remaining elements after pop: ' + num);//return of remaining array after popping 8
    
}
funcB();

/*Question 9 
Remove the first element in array [23,77,80,45] using shift()*/
function funcC(){
    const num = [23,77,80,45];
    const shifted = num.shift();
    console.log("Removed element: " + shifted);//removed 23 from the array list
    console.log("Remaining elements after unshift: " + num);//return of remainig array after shifting 23
}
funcC();

/*Question 10
Add and element to the beginnning of an array using unshift()*/
var A = [[20, 30, 80],[10,50,55]];  //A.unshift([90,80,70]) will add 90 to the beginning of var A
A.unshift([90,80,70]);
console.log(A);
