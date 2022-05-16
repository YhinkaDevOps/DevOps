//JavaScript and the DOM 2
//print out based on number of musicians in a group ranging from no group, solo,duet,trio,quartet and  a large group
function musicGroup(Musician){
 if(Musician <= 0){
     return 'not a group';
 } if (Musician==1){
     return 'Solo';
 } if(Musician==2){
     return 'duet';
 } if (Musician==3){
     return 'trio';
 } if(Musician==4){
    return 'quartet'
 } if (Musician>4){
     return 'this is a large group'
 }
   
}
console.log(musicGroup(0))
console.log(musicGroup(1))
console.log(musicGroup(2))
console.log(musicGroup(3))
console.log(musicGroup(4))
console.log(musicGroup(10))