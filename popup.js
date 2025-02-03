document.getElementById("replaceButton").addEventListener("click", async () => {
    const wordToFind = document.getElementById("findWord").value;
    const wordToReplace = document.getElementById("replaceWord").value;

    const tab = await chrome.tabs.query({ active: true, currentWindow: true });
    currentTab = tab[0];

    chrome.tabs.sendMessage(currentTab.id, {
        action: 'replaceWords',
        wordToFind,
        wordToReplace
    });
});