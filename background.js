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

