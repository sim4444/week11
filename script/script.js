//function declaration 
function greet(name,message,time='day')
{
    console.log(`Hello ${name} ${message} it is a good ${time}`);
}
//function calling
greet('Sim',"you are beautiful");
greet("Simi", "you are the best");


//////////////////////////////

//function expression 

// const greet = function(name)
// {
//     console.log(`Hello ${name}`);
// }
//function calling
// greet('sim');

/////////////////
//arrow function
// const greet = (name) =>
// {
//     console.log(`Hello ${name}`);
// }
//function calling
// greet('SIM');

///return activity

// const radiusPara = document.querySelector("#radius")
//     console.log(radiusPara)
//     radiusPara.textContent = "this is area"
// const resultPara = document.querySelector("#radius")
//     console.log(resultPara)
// const userValue = prompt("enter a value: ")
// function calcArea(radius){
//     area = Math.PI * radius * radius
    
// }

function populateList(myshoppinglist)
{
    //get access to ul element
    const ulElement = document.querySelector("ul.shopping");
    //console.log(ulElement)
    //loop through myshoppinglist array
    console.log(ulElement)
    for (let item of myshoppinglist){
        console.log(item);
        let newli = document.createElement('li');
        newli.textContent = item;
        ulElement.appendChild(newli);
    }
}
let shoppingList = ['bread', 'cheese','green pepper'];

populateList(shoppingList);

function squareList(){
    //get access to ul element
    const ulElement = document.querySelector("ul.shopping");
    console.log(ulElement);
    ulElement.classList.remove("circleList")
    ulElement.classList.add("squareList")

}
squareList(shoppingList);

