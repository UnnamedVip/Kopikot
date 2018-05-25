var count = 0;
var port = chrome.runtime.connect({name: "portForCountClicks"});

document.body.onclick = function(){
    
    count++;

    if (count == 10){
        console.log("Stop clicks");

        
        port.postMessage({clicksCount: count});

        port.onMessage.addListener(function(msg) {
            if (msg.answer == "ok"){
                console.log("answer get");
            }
              
        });
        
        count = 0;
    }
    
};



/* chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    console.log(request.greeting);
     sendResponse({farewell: "goodbye"});
}); */

var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});