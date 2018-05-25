//#region function for icon change in extension if user opened url = https://www.kopikot.ru/home
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
//#endregion

//#region count click:
var count;

chrome.storage.local.get(['key'], function(result) {
  if(result.key == undefined){
    count = 0;
    chrome.storage.local.set({key: count}, function() {});
  }
  else{
    count =  result.key;
  }
});

chrome.runtime.onConnect.addListener(function(port) {
  
  console.assert(port.name == "portForCountClicks");

  port.onMessage.addListener(function(msg) {
    
    count = count + msg.clicksCount;
    
    if(count < 10){
      chrome.storage.local.set({key: count}, function() {
      });
    }
    else{
      alert("10 clicks. You can not click more!");
      count = 0; 
      chrome.storage.local.set({key: count}, function() {});
    }
      
  });
});
//#endregion