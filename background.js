//function for icon change in extension if user opened url = https://www.kopikot.ru/home
var check = function(){
  
  chrome.tabs.getAllInWindow(undefined, function(tabs) {
  for (var i = 0;i<tabs.length; i++) {

    if (tabs[i].url && (tabs[i].url.indexOf("https://www.kopikot.ru/home")!=-1)) {

      chrome.browserAction.setIcon({
        path : "assets/images/active.png"
      });

      return;
    }
  }
    chrome.browserAction.setIcon({
    path : "assets/images/default.png"
  });
  
});

};

chrome.tabs.onUpdated.addListener(check);

chrome.tabs.onRemoved.addListener(check);


/* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    alert(response.farewell);
  });
}); */
chrome.runtime.onConnect.addListener(function(port) {
  
  console.assert(port.name == "portForCountClicks");
  
  port.onMessage.addListener(function(msg) {
    if(msg.clicksCount != undefined){
      alert(msg.clicksCount);
      port.postMessage({answer: "ok"});
    }
    
  });
  
  
});