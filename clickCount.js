var count = 0;

document.body.onclick = function(){
    
    count++;
    
    if (count == 10){
        console.log("Stop clicks");
    }
    
};