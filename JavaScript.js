var body = document.body,
html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );
if(height>1000){
    document.getElementById("container").style.marginTop="20px";
    document.getElementById("container").style.width="100%";
    document.getElementById("Main").style.width="700px";
    document.getElementById("yash").style.width="700px";
    document.getElementById("container").style.marginBottom="10px";
    document.getElementById("tringe").style.display="none";
}
function BotText(intendedReply) {
    var d = new Date();
    var n = d.getHours();
    var p = d.getMinutes();
    n = n + ":" + p + "   Today";
    var node = document.createElement("LI");
    var elements = document.getElementsByClassName('you');
    var requiredElement = elements[0];
    document.getElementById("mess1").innerHTML=intendedReply;
    document.getElementById("youtime").innerHTML=n;
    var cln = requiredElement.cloneNode(true);
    cln.style.display= "block";
    document.getElementById("chat").appendChild(cln); 
}

document.getElementById("sendButton").onclick =function(){
    
    if (document.getElementById("uservalue").value!=""){
    var d = new Date();
    var n = d.getHours();
    var p = d.getMinutes();
    n = n + ":" + p + "   Today";
    
    name = document.getElementById("uservalue").value;
    var node = document.createElement("LI");
    var elements = document.getElementsByClassName('me');
    var requiredElement = elements[0]; 

    
    mytext=document.getElementById("uservalue").value;
    // This is where you get the user input, you'll get 'this is a bot'.
    // 
    intendedReply = 'This is a bot ';
   
    //
    document.getElementById("mess2").innerHTML=mytext;
    document.getElementById("metime").innerHTML=n;
    var cln = requiredElement.cloneNode(true);
    cln.style.display= "block";
    document.getElementById("chat").appendChild(cln);
    BotText(intendedReply);
    document.getElementById("uservalue").value="";
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
    if(height>1000){
        document.getElementById("chat").style.maxHeight="75%";
     }
    //alert(height);
    }
}
