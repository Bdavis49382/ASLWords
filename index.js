function makeElement(wordObject) {
    
    const word = document.createElement('a');
    word.innerText =wordObject.value;
    word.setAttribute('href',wordObject.page)
    const listItem = document.createElement('li');
    listItem.innerHTML =  `<a href='${wordObject.page}'>${wordObject.value}</a>`
    console.log(listItem)
    document.querySelector("#wordArea").appendChild(listItem);
}
async function getData() {
    const response = await fetch('./words.json');
    const data = await response.json()
    data.words.forEach(makeElement);
}

getData();