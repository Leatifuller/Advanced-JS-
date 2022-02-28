//1.
name='Goddess Leati';
//2.
var name;
//3.My name should be logged
console.log(name);
//7.
setName();
//8.
function setName(){
    var name='Covalence';
    console.log(name);
}
//10.
let avg=findAvg(8,10);
//11.
console.log('practice', avg);
//10.
function findAvg(a,b) {
    console.log('practice');
    var answer=(a+b);
    return answer;
}

//1-2.
let fruit=['strawberry','kiwi','pineapples'];
//3.

//4-7.
function printFruits(){
   /*12-13.*/ let favFruit=fruit[2];
    console.log(fruit[0]);
/*15.-16.*/printfavFruit();
    /*14.*/function printfavFruit(){
    console.log(favFruit);
    //17.-18.
    leastFav();
let leastFav=fruit[0];
//19.
console.log(leastFav);
}
}
//8-9.

printFruits();

//10.because its scoped within function
//11. line 28 deleted
//21. 
function greet(){
let addStr= 'Leati';
console.log('Hello'+ addStr);

}

