//step 1 : add event lister in deposit btn
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit btn clicked')
    //step 2: get the deopist amount from the deposit field
    //for input field use .value to get he value inside input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(depositAmountTotal)
    //by default number gulo string thake,,,,tader age int/float korte hbe
    const newDepositAmountTotal = parseFloat(newDepositAmountString);
    // console.log(typeof depositAmountTotal)

    depositField.value = '';
    if(isNaN(newDepositAmountTotal)){
        alert('enter valid number')
        return
    }


    //step 3:get the deposit total
    //for non-input(element other than input ,text-area) use innerText to get the text
    const depositAmountTotalElement = document.getElementById('deposit-total');
    const prevDepositAmountString = depositAmountTotalElement.innerText;
    const prevDepositAmountTotal = parseFloat(prevDepositAmountString);
    // step 4: add Number to total deposit 
    const currentDepositTotal = prevDepositAmountTotal + newDepositAmountTotal;
    // set the deposit total
    depositAmountTotalElement.innerText = currentDepositTotal;
    // console.log( currentDepositTotal)
    

    // step 5: ballance total current
    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString)
    // console.log(typeof totalBalance)


    // step 6 : calculate current total value 
    const newTotalBalance = currentDepositTotal + totalBalance;
    // set the ballance total 
    totalBalanceElement.innerText = newTotalBalance;


    //step 7: clear deposit field
    
    
    // console.log(depositTotal)

})