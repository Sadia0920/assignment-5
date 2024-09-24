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
        document.getElementById("donate-input-noakhali").value=' ';
        return;
    }
    const donateAmountNoakhali = getTextElementById('donate-amount-noakhali'); 
    const accountMoney = getTextElementById('account-money');

    if(donateInputNoakhali > accountMoney || donateInputNoakhali <= 0){
        alert("Failed to add money")
        document.getElementById("donate-input-noakhali").value=' ';
        return;
    }
    else{
         // Add money to container
    const totalDonateNoakhali = donateAmountNoakhali + donateInputNoakhali;
    document.getElementById("donate-amount-noakhali").innerText=(totalDonateNoakhali);
    // Add money to account
    const remainingAccountMoney = accountMoney - donateInputNoakhali;
    document.getElementById("account-money").innerText=(remainingAccountMoney);
    document.getElementById("donate-input-noakhali").value=' ';
    document.getElementById('my_modal_5').showModal();
    }
   
    const div = document.createElement('div')
    div.classList.add('')
    div.innerHTML = `
    <p>${donateInputNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh </P>
    <p id="historyDate"> </p>
    `
    document.getElementById('history-container').appendChild(div);
    const newDate = date('historyDate');
    document.getElementById('historyDate').innerText = (newDate);
})




