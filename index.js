// Write your code here!

main.remove();

//body.innerHTML = "<h1 id="victory">YOUR-NAME is the champion</h1>";

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = "Claire is the champion!";