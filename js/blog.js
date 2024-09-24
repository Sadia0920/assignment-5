// const date =new Date ();
// console.log(date)
// Noakhali Section
document.getElementById("btn-blog").addEventListener('click',function(){
    window.location.href='./home.html';
})
document.getElementById("btn-donate-noakhali").addEventListener('click',function(){
    const donateInputNoakhali = getInputElementById('donate-input-noakhali');
    if(isNaN(donateInputNoakhali)){
        alert("Failed to add money")
        return;
    }
    const donateAmountNoakhali = getTextElementById('donate-amount-noakhali'); 
    const accountMoney = getTextElementById('account-money');

    if(donateInputNoakhali <= accountMoney){
    // Add money to container
    const totalDonateNoakhali = donateAmountNoakhali + donateInputNoakhali;
    document.getElementById("donate-amount-noakhali").innerText=(totalDonateNoakhali);
    // Add money to account
    const remainingAccountMoney = accountMoney - donateInputNoakhali;
    document.getElementById("account-money").innerText=(remainingAccountMoney);
    document.getElementById("donate-input-noakhali").value=' ';
    }
    else{
        alert("Failed to add money")
        return;
    }
    
    

})




