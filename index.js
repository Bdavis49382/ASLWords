function makeElement(wordObject) {
    
    const word = document.createElement('a');
    word.innerText =wordObject.value;
    word.setAttribute('href',wordObject.page)
    const listItem = document.createElement('li');
    listItem.innerHTML =  `<a href='${wordObject.page}'>${wordObject.value}</a>`
    document.querySelector("#wordArea").appendChild(listItem);
}
async function getData() {
    const response = await fetch('./words.json');
    const data = await response.json()
    data.words.forEach(makeElement);
    document.getElementById('randomButton').addEventListener('click',() => giveRandomWord(data.words));
}
function giveRandomWord(words) {
    const word = words[Math.floor(Math.random()*words.length)];
    document.getElementById('randomWord').innerText = word.value;
    document.getElementById('randomWord').setAttribute('href',word.page)
}
getData();