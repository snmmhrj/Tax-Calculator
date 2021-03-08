
function clearValues(){
    document.getElementById("myForm").reset()
    document.getElementById("annualGrossSalary").reset()
    document.getElementById("taxableIncome").reset()
    document.getElementById("payableTax").reset()
    document.getElementById("monthlyTax").reset()
    document.getElementById("cashInHand").reset()   
}
function changeTaxSlabByMaritalStatus(){
    
}
function taxCal(){
 let maritalStatus = document.getElementById("maritalStatus").value
 let monthlyIncome = document.getElementById("monthlyIncome").value
 let annualGrossSalary = monthlyIncome*12
 let taxAmount = 0.00
 let monthlyTax = 0.00
 let taxableIncome = annualGrossSalary
 document.getElementById("annualGrossSalary").innerHTML=annualGrossSalary
 if (maritalStatus === "unmarried"){
    if (annualGrossSalary <= 400000){
        taxAmount = annualGrossSalary * 0.01
    }else if (annualGrossSalary > 400000 && annualGrossSalary <= 500000){
        taxAmount = 400000*0.01 + (annualGrossSalary - 400000)*0.1
    }
    else if (annualGrossSalary > 500000 && annualGrossSalary <= 700000){
        taxAmount = 400000*0.01 + 100000*0.1 + (annualGrossSalary - 500000)*0.2
    }
    else if (annualGrossSalary > 700000 && annualGrossSalary <= 2000000){
        taxAmount = 400000*0.01 + 100000*0.1 + 200000*0.2 + (annualGrossSalary - 700000)*0.3      
    }
    else if (annualGrossSalary > 2000000){
        taxAmount = 400000*0.01 + 100000*0.1 + 200000*0.2 + 1300000*0.3 + (annualGrossSalary - 2000000)*0.36 
    }
 }else{
    if (annualGrossSalary <= 450000){
        taxAmount = annualGrossSalary * 0.01
    }else if (annualGrossSalary > 450000 && annualGrossSalary <= 550000){
        taxAmount = 450000*0.01 + (annualGrossSalary - 450000)*0.1
        alert (taxAmount)
    }
    else if (annualGrossSalary > 550000 && annualGrossSalary <= 750000){
        taxAmount = 450000*0.01 + 100000*0.1 + (annualGrossSalary - 550000)*0.2
    }
    else if (annualGrossSalary > 750000 && annualGrossSalary <= 2000000){
        taxAmount = 450000*0.01 + 100000*0.1 + 200000*0.2 + (annualGrossSalary - 750000)*0.3
    }
    else if (annualGrossSalary > 2000000){
        taxAmount = 450000*0.01 + 100000*0.1 + 200000*0.2 + 1250000*0.3 + (annualGrossSalary - 2000000)*0.36 
    }
 }
 document.getElementById("payableTax").innerHTML = (taxAmount).toFixed(2)
 document.getElementById("taxableIncome").innerHTML = taxableIncome.toFixed(2)
 //monthlyTax = (taxAmount/12).toFixed(2)
 document.getElementById("monthlyTax").innerHTML = (taxAmount/12).toFixed(2)
 document.getElementById("cashInHand").innerHTML = monthlyIncome - monthlyTax 
}

