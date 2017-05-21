function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
};
function isScrolledToBottom(el) {
    var $el = $(el);
    return el.scrollHeight - $el.scrollTop() - $el.outerHeight() < 1;
}
function updateChat() {
    $.getJSON({
                    url: '/chat.json',
                    success: function(data) {
                        var myNode = document.getElementById("chat-col");
                        while (myNode.firstChild) {
                            myNode.removeChild(myNode.firstChild);
                        }
                        chatCol = document.getElementById('chat-col');
                        data.forEach(function(item){
                            span = document.createElement('span');
                            bold = document.createElement('b');
                            t = document.createTextNode(item.name+': ');
                            bold.appendChild(t);
                            span.appendChild(bold);
                            t = document.createTextNode(item.body);
                            span.appendChild(t);
                            br = document.createElement('br');
                            chatCol.appendChild(span);
                            chatCol.appendChild(br);
                        });
                        var objDiv = document.getElementById("chat-col");
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }
                })
            };
            updateChat();
            setInterval(updateChat, 100);