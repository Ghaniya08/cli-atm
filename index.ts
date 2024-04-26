#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

let myBalance = 20000; //Dollar 
let mypinCode = 12345;
let pinAnswer =  await inquirer.prompt(
   [
        {
            name: "pin",
            message: chalk.italic("enter your pin:"),
            type: "number"
        }
   ] 
)
if (pinAnswer.pin === mypinCode){
    console.log(chalk.blue("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.italic("Please select an option"),
            type: "list",
            choices : ["Withdraw" , "Check Balance"]

        }
    ])

    if (operationAns.operation === "Withdraw"){
    let WithdrawAnswer =await inquirer.prompt([
        {
            name: "WithdrawMethod",
            message: chalk.italic("Select a Withdraw method:"),
            type: "list",
            choices: ["Fast Cash" , "Enter your amount"]
        }
    ])
     if (WithdrawAnswer.WithdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: chalk.italic("Select amount"),
                type: "list",
                choices: ["1000", "5000" , "10000" , "50000" , "100000"]
            }   
        ])
        if (myBalance < fastCashAns.fastCash){
            console.log(chalk.red(`you have not enough amount to credit it you have only: ${+ myBalance}`));
        } 
       else {
           myBalance -= fastCashAns.fastCash
           console.log(chalk.blue(`${fastCashAns.fastCash} withdraw successfully`));
           console.log(chalk.yellow(`Your remaining balance is: ${+ myBalance}`));
       }
    }
    else if(WithdrawAnswer.WithdrawMethod === "Enter your amount"){
        let amountAns = await inquirer.prompt([          
                {
                    name: "amount",
                    message: chalk.italic("Please Enter your amount:"),
                    type: "number"
                    
                }               
            ]) 

             if (myBalance >= amountAns.amount){(myBalance -= amountAns.amount)
             console.log(chalk.blue(`${amountAns.amount} withdraw successfully`));
             console.log(chalk.yellow(`Your remaining balance is: ${+ myBalance}`));
             }
             else{
                myBalance < amountAns.amount;
                console.log(chalk.red(`you have not enough amount to credit it you have only: ${+ myBalance}`));
            } 
        }
    }    
        else if(operationAns.operation === "Check Balance"){
        console.log(chalk.blue("Your balance is: " + myBalance));
        }
}
    
    else {
     console.log(chalk.red("Incorrect pin"));
    }
    