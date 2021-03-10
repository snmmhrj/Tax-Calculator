function clearValues(){
    document.getElementById("myForm").reset()
    document.getElementById("annualGrossSalary").innerHTML= "0.00"
    document.getElementById("taxableIncome").innerHTML= "0.00"
    document.getElementById("payableTax").innerHTML= "0.00"
    document.getElementById("monthlyTax").innerHTML= "0.00"
    document.getElementById("cashInHand").innerHTML= "0.00"
    document.getElementById("error").innerHTML=""  
    document.getElementById("firstSlab").innerHTML = "-"
    document.getElementById("secondSlab").innerHTML = "-"
    document.getElementById("thirdSlab").innerHTML = "-"
    document.getElementById("fourthSlab").innerHTML = "-"
    document.getElementById("fifthSlab").innerHTML = "-"
    document.getElementById("total").innerHTML = "-"
}
function changeTaxSlabByMaritalStatus(){  
}
function taxCal(){
 let maritalStatus = document.getElementById("maritalStatus").value
 let monthlyIncome = document.getElementById("monthlyIncome").value
 document.getElementById("error").innerHTML="" 
 if (monthlyIncome <= 0){
    document.getElementById("error").innerHTML="* Please enter valid income."
    return 
 }
 let annualGrossSalary = monthlyIncome*12
 let taxAmount = 0.00
 let monthlyTax = 0.00
 let taxableIncome = annualGrossSalary
 let indTaxAmount = {
     "first" : 0,
     "second" :0,
     "third":0,
     "fourth":0,
     "fifth":0
 }
 document.getElementById("annualGrossSalary").innerHTML=annualGrossSalary.toFixed(2)
 if (maritalStatus === "unmarried"){
    if (annualGrossSalary <= 400000){
        taxAmount = annualGrossSalary * 0.01
        indTaxAmount.first = annualGrossSalary*0.01

    }else if (annualGrossSalary > 400000 && annualGrossSalary <= 500000){
        taxAmount = 400000*0.01 + (annualGrossSalary - 400000)*0.1
        indTaxAmount.first = 0.01*400000
        indTaxAmount.second = (annualGrossSalary - 400000)*0.1
    }
    else if (annualGrossSalary > 500000 && annualGrossSalary <= 700000){
        taxAmount = 400000*0.01 + 100000*0.1 + (annualGrossSalary - 500000)*0.2
        indTaxAmount.first = 0.01*400000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = (annualGrossSalary - 500000)*0.2
    }
    else if (annualGrossSalary > 700000 && annualGrossSalary <= 2000000){
        taxAmount = 400000*0.01 + 100000*0.1 + 200000*0.2 + (annualGrossSalary - 700000)*0.3  
        indTaxAmount.first = 0.01*400000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = 200000*0.2    
        indTaxAmount.fourth = (annualGrossSalary - 700000)*0.3
    }
    else if (annualGrossSalary > 2000000){
        taxAmount = 400000*0.01 + 100000*0.1 + 200000*0.2 + 1300000*0.3 + (annualGrossSalary - 2000000)*0.36 
        indTaxAmount.first = 0.01*400000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = 200000*0.2
        indTaxAmount.fourth = 1300000*0.3
        indTaxAmount.fifth = (annualGrossSalary - 2000000)*0.36
    }
 }else{
    if (annualGrossSalary <= 450000){
        taxAmount = annualGrossSalary * 0.01
        indTaxAmount.first = annualGrossSalary*0.01
    }else if (annualGrossSalary > 450000 && annualGrossSalary <= 550000){
        taxAmount = 450000*0.01 + (annualGrossSalary - 450000)*0.1
        indTaxAmount.first = 0.01*450000
        indTaxAmount.second = (annualGrossSalary - 450000)*0.1
    }
    else if (annualGrossSalary > 550000 && annualGrossSalary <= 750000){
        taxAmount = 450000*0.01 + 100000*0.1 + (annualGrossSalary - 550000)*0.2
        indTaxAmount.first = 0.01*450000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = (annualGrossSalary - 550000)*0.2
    }
    else if (annualGrossSalary > 750000 && annualGrossSalary <= 2000000){
        taxAmount = 450000*0.01 + 100000*0.1 + 200000*0.2 + (annualGrossSalary - 750000)*0.3
        indTaxAmount.first = 0.01*450000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = 200000*0.2    
        indTaxAmount.fourth = (annualGrossSalary - 750000)*0.3
    }
    else if (annualGrossSalary > 2000000){
        taxAmount = 450000*0.01 + 100000*0.1 + 200000*0.2 + 1250000*0.3 + (annualGrossSalary - 2000000)*0.36 
        indTaxAmount.first = 0.01*450000
        indTaxAmount.second = 100000*0.1
        indTaxAmount.third = 200000*0.2
        indTaxAmount.fourth = 1250000*0.3
        indTaxAmount.fifth = (annualGrossSalary - 2000000)*0.36
    }
 }
 monthlyTax = taxAmount/12
 document.getElementById("payableTax").innerHTML = numberWithCommas((taxAmount).toFixed(2))
 document.getElementById("taxableIncome").innerHTML = numberWithCommas(taxableIncome.toFixed(2))
 document.getElementById("monthlyTax").innerHTML = numberWithCommas((taxAmount/12).toFixed(2))
 document.getElementById("cashInHand").innerHTML = numberWithCommas((monthlyIncome - monthlyTax).toFixed(2)) 
 document.getElementById("firstSlab").innerHTML = numberWithCommas((indTaxAmount.first).toFixed(2))
 document.getElementById("secondSlab").innerHTML = numberWithCommas((indTaxAmount.second).toFixed(2))
 document.getElementById("thirdSlab").innerHTML = numberWithCommas((indTaxAmount.third).toFixed(2))
 document.getElementById("fourthSlab").innerHTML = numberWithCommas((indTaxAmount.fourth).toFixed(2))
 document.getElementById("fifthSlab").innerHTML = numberWithCommas((indTaxAmount.fifth).toFixed(2))
 document.getElementById("total").innerHTML = numberWithCommas((indTaxAmount.first + indTaxAmount.second + indTaxAmount.third + indTaxAmount.fourth + indTaxAmount.fifth).toFixed(2))
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
