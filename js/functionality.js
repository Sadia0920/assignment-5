function showSectionById(id){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function getInputElementById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    // console.log(inputValue)
    return inputValue;
}
function getTextElementById(id){
    const inputText = parseFloat(document.getElementById(id).innerText);
    // console.log(inputText)
    return inputText;
}

