browser.browserAction.onClicked.addListener(event => {
  browser.sidebarAction.open();
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender);
});