function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);

browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-feature") {
    browser.sidebarAction.open();
    browser.sidebarAction.isOpen({}).then(isOpen => {
      if (isOpen) browser.sidebarAction.close();
    });
    console.log("toggling the feature!");
  }

});