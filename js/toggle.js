document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    showSectionById('donation-container');
    document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('donation-btn').classList.add('bg-primary')
})
document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault();
    showSectionById('history-container');
    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.remove('bg-primary')
})
