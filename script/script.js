//function declaration 
function greet(name)
{
    console.log(`my name is ${name}`);
}
//function calling
greet('sim');


//////////////////////////////

//function expression 

const greet = function(name)
{
    console.log(`Hello ${name}`);
}
//function calling
greet('sim');

/////////////////
//arrow function
const greet = (name) =>
{
    console.log(`Hello ${name}`);
}
//function calling
greet('sim');
