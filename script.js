const toothpasteElement = document.querySelector('#kids-toothpaste');
const toothpasteInfo = document.querySelector('#kids-toothpaste + p');

toothpasteElement.onclick = function () {
    const displayed = window.getComputedStyle(toothpasteInfo).display === 'block';
    toothpasteInfo.style.display = displayed ? 'none' : 'block';
}