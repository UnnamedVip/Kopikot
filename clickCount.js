var port = chrome.runtime.connect({name: "portForCountClicks"});

document.body.onclick = function(){
    click = 1;
    port.postMessage({clicksCount: click});
};