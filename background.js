// Open the app in its own window when the extension is clicked
chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
        url: 'index.html',
        type: 'popup',
        width: 1200,
        height: 800,
        focused: true
    });
});

// Optional: Handle installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Hunter\'s System installed!');
});