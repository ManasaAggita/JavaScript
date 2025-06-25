//Compount Interest Calculator that prompts a user for some 
// inputs and finallyc calculates the compound interest value
const prompt=require('prompt-sync')()
//let init_amount=50000
//let monthlty_contribution=400
//let  number_of_years=30
//let intrest_rate=10

//step 1- define a function that we can use to calculate the final value of the compounded intrest
function compoundIntrest(init_amount,monthlty_contribution,number_of_years,intrest_rate){
    let total=init_amount;
    let annual_contribution=monthlty_contribution*12;
    for(let i=0;i<number_of_years;i++){
        total+=annual_contribution;
        total=total*((100+intrest_rate)/100)

        
    }
    return total.toFixed(2)

}

//Step2- define a function that would calculate the difference (i.e, the effect compounding has had)
function calculateRegular(init_amount,monthlty_contribution,number_of_years){
    return init_amount+monthlty_contribution*12*number_of_years.toFixed(2)
}
function printOutput(init_amount,monthlty_contribution,number_of_years,intrest_rate){
    let final_value=compoundIntrest(init_amount,monthlty_contribution,number_of_years,intrest_rate)
    let value_without_compounding=calculateRegular(init_amount,monthlty_contribution,number_of_years)
    let summary=`INIT_AMOUNT:$${init_amount}\nMONTHLY_CONTIBUTION:$${monthlty_contribution}\nNUMBER_OF_YEARS:${number_of_years}\nINTREST_RATE:$${intrest_rate}\n\nFINAL_COMPOUNDED_VALUE:$${compoundIntrest(init_amount,monthlty_contribution,number_of_years,intrest_rate)}\nREGULAR_AMOUNT:$${value_without_compounding}\nDIFFERENCE:$${final_value-value_without_compounding}`
    console.log(summary)

}

//step3- to create a run function that then propmpts the user for all necesseary inputs required to calculate the final amounts.
//Step 4- inside a said function, make a nice pretty print statement usinga  template literal string that gives the financial breakdown.
function run(){
    let init_amount=parseInt(prompt('what is your initial Investment?'))
    
    let monthlty_contribution=parseInt(prompt('what is your monthly contribution ($)?'))
    let number_of_years=parseInt(prompt('For how many years would you like to compound your investment ($)?'))
    let intrest_rate=parseInt(prompt("What is your expected intrest rate over the years?"))
    printOutput(init_amount,monthlty_contribution,number_of_years,intrest_rate)
    


}
run()



