const mainNode = document.getElementById("main");
mainNode.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Connor is the champion"
document.body.append(newHeader);


