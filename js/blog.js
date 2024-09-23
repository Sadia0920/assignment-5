// const date =new Date ();
// console.log(date)
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

    const totalDonateNoakhali = donateAmountNoakhali + donateInputNoakhali;
    document.getElementById("donate-amount-noakhali").innerText=(totalDonateNoakhali)

})




