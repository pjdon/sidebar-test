function eventCallback(event) {
  console.log('eventCallback',event);
  browser.runtime.sendMessage({message: 'hello from sidebar'});
}

window.addEventListener('beforeunload', eventCallback);