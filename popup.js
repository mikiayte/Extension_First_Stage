
var formBatch= document.querySelector(".common"), 
form = document.querySelector('.newBatch'), 
inputBatchId = document.getElementById("batchId")
var isSubmitted = false,
inputBatchIdValue
var increment  = 0


form.addEventListener('submit', (event)=> {
     event.preventDefault();    
     formBatch.classList.add("hidden");
     isSubmitted = true
     inputBatchIdValue = inputBatchId.value
     localStorage.setItem(`${inputBatchIdValue}`, `${inputBatchIdValue}` )
     chrome.tabs.query({ active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, `${inputBatchIdValue}`, (response) => {
          increment++;
          console.log(increment)
        })
    })
}) 


chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete' && isSubmitted) {
        chrome.tabs.query({ active:true, currentWindow:true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, `${inputBatchIdValue}`, (response) => {
                increment++;
                console.log(increment)
            })
        })
    }
  });

