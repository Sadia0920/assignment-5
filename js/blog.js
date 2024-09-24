// Home
document.getElementById("btn-blog").addEventListener('click',function(){
    window.location.href='./home.html';
})
// section-1
document.getElementById("btn-donate-noakhali").addEventListener('click',function(){
    const donateInputNoakhali = getInputElementById('donate-input-noakhali');
    if(isNaN(donateInputNoakhali)){
        alert("Invalid Donation Amount")
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
    const newDate = new Date();
    const div = document.createElement('div')
    div.classList.add('border-2')
    div.classList.add('rounded-xl')
    div.classList.add('my-6')
    div.innerHTML = `
    <p class="mt-2 mx-5">${donateInputNoakhali} Taka is Donated for Donate for Flood at Noakhali, Bangladesh </P>
    <br>
    <p class="mb-2 mx-5" id="dateInput">Date:${newDate}<p/>
    `
    document.getElementById('history-container').appendChild(div);
    }
})
// Section-2
document.getElementById("btn-donate-feni").addEventListener('click',function(){
    const donateInputFeni = getInputElementById('donate-input-feni');
    if(isNaN(donateInputFeni)){
        alert("Invalid Donation Amount");
        document.getElementById("donate-input-feni").value=' ';
        return;
    }
    const donateAmountFeni = getTextElementById('donate-amount-feni'); 
    const accountMoney = getTextElementById('account-money');
    if(donateInputFeni > accountMoney || donateInputFeni <= 0){
        alert("Failed to add money")
        document.getElementById("donate-input-noakhali").value=' ';
        return;
    }
    else{
    // Add money to container
    const totalDonateFeni = donateAmountFeni + donateInputFeni;
    document.getElementById("donate-amount-feni").innerText=(totalDonateFeni);
    // Add money to account
    const remainingAccountMoney = accountMoney - donateInputFeni;
    document.getElementById("account-money").innerText=(remainingAccountMoney);
    document.getElementById("donate-input-feni").value=' ';
    document.getElementById('my_modal_5').showModal();
    const newDate = new Date();
    const div = document.createElement('div')
    div.classList.add('border-2')
    div.classList.add('rounded-xl')
    div.classList.add('my-6')
    div.innerHTML = `
    <p class="mt-2 mx-5">${donateInputFeni} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</P>
    <br>
    <p class="mb-2 mx-5" id="dateInput">Date:${newDate}<p/>
    `
    document.getElementById('history-container').appendChild(div);
    }
})
// Section-3
document.getElementById("btn-donate-quota-movement").addEventListener('click',function(){
    const donateInputQuotaMovement = getInputElementById('donate-input-quota-movement');
    if(isNaN(donateInputQuotaMovement)){
        alert("Invalid Donation Amount");
        document.getElementById("donate-input-quota-movement").value=' ';
        return;
    }
    const donateAmountQuotaMovement = getTextElementById('donate-amount-quota-movement'); 
    const accountMoney = getTextElementById('account-money');
    if(donateInputQuotaMovement > accountMoney || donateInputQuotaMovement <= 0){
        alert("Failed to add money")
        document.getElementById("donate-input-quota-movement").value=' ';
        return;
    }
    else{
    // Add money to container
    const totalDonateQuotaMovement = donateAmountQuotaMovement + donateInputQuotaMovement;
    document.getElementById("donate-amount-quota-movement").innerText=(totalDonateQuotaMovement);
    // Add money to account
    const remainingAccountMoney = accountMoney - donateInputQuotaMovement;
    document.getElementById("account-money").innerText=(remainingAccountMoney);
    document.getElementById("donate-input-quota-movement").value=' ';
    document.getElementById('my_modal_5').showModal();
    const newDate = new Date();
    const div = document.createElement('div')
    div.classList.add('border-2')
    div.classList.add('rounded-xl')
    div.classList.add('my-6')
    div.innerHTML = `
    <p class="mt-2 mx-5">${donateInputQuotaMovement} Taka is Donated for Aid for Injured in the Quota Movement</P>
    <br>
    <p class="mb-2 mx-5" id="dateInput">Date:${newDate}<p/>
    `
    document.getElementById('history-container').appendChild(div);
    }
})




