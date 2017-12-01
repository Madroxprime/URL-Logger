const ws = new WebSocket("ws://localhost:3000");
let email;

chrome.identity.getProfileUserInfo(function(userInfo){
    email = userInfo.email;
});

chrome.runtime.onMessage.addListener(function(request,sender){
    console.log(request + " " + email);
    if(sender.tab){
        console.log(sender.tab.url);
        ws.send(sender.tab.url);
    }
});

