window.onload = chrome.runtime.sendMessage("message", function(response){
    console.log(response);
})