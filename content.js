chrome.runtime.onMessage.addListener((request, response, sendResponse) => {
    if (request.action === "replaceWords") {
        replaceWords(request.wordToFind, request.wordToReplace);
    }
});

function replaceWords(findWord, replaceWord) {
    const walk = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    const textNodes = [];
    let node;
    while (node = walk.nextNode()) {
        textNodes.push(node);
    }

    const regex = new RegExp(findWord, 'gi');
    textNodes.forEach(node => {
        node.textContent = node.textContent.replace(regex, replaceWord);
    });
}

console.log("Content script loaded!");