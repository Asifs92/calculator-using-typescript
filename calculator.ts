import inquirer from "inquirer";
const calculater = await inquirer.prompt([
    {
        type : "number",
        name : "num1",
        message : "Please Enter First Number : "
    },
    {
        type : "number",
        name : "num2",
        message: " Please Enter Second Number : "
    },
    {
        type : "list",
        name : "Operation",
        message: " Please Select One Operater You Want : ",
        choices : ['Add','Subtract','Multiplay','Divide']
    }
]);
let final : number;
switch(calculater.Operation){
    case 'Add':
        final = calculater.num1 + calculater.num2
        console.log(`The Answer = ${final}`)
        break
    case 'Subtract':
        final = calculater.num1 - calculater.num2
        console.log(`The Answer = ${final}`)
        break
    case 'Multiplay':
        final = calculater.num1 * calculater.num2
        console.log(`The Answer = ${final}`)
        break 
    case 'Divide':
        final = calculater.num1 / calculater.num2
        console.log(`The Answer = ${final}`)
        break     
    
}