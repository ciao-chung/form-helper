let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

startButton.onclick = element => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      formHelper: {
        type: 'course',
        action: 'start',
      },
    });
  });
};

stopButton.onclick = element => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      formHelper: {
        type: 'course',
        action: 'stop',
      },
    });
  });
};