/*
1. add event handler with the withdraw button

2. get the withdraw amount from the withdraw input field

2.5 also make sure to convert the input into a number by using parsefloat

3. get previous withdraw total 

4. calculate total withdraw amount

 4-5. set total withdraw amount
 5. get the prev balance total

 6. calculate new balance total
 6-5. set the new balance total
*/

//step 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw');
    // step 2 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount)
    //step 7
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('enter a valid number');
        return;
    }

    //step 3 
    const prevWithdrawTotalElement = document.getElementById('withdraw-total')
    const prevWithdrawTotalString = prevWithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(prevWithdrawTotalString);

    // console.log(previousWithdrawTotal)


    // step 5
    const prevBalanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = prevBalanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if(newWithdrawAmount> prevBalanceTotal){
        alert('oto taka nai');
        return;
    }
    // step 4
    const prevTotal = previousWithdrawTotal + newWithdrawAmount;
    prevWithdrawTotalElement.innerText = prevTotal;

    // step 6
    const newBalance = prevBalanceTotal - newWithdrawAmount;
    prevBalanceTotalElement.innerText = newBalance;

})