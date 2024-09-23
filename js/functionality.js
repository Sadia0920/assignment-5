function showSectionById(id){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}
