let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')
let navigateButton = document.getElementById('navigate')

startButton.onclick = element => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      formHelper: {
        type: 'course',
        action: 'start',
      },
    })
  })
}

stopButton.onclick = element => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      formHelper: {
        type: 'course',
        action: 'stop',
      },
    })
  })
}

navigateButton.onclick = element => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      formHelper: {
        type: 'course',
        action: 'navigate',
      },
    })
  })
}