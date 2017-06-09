function createElement(sender, message, image, mid){
	if(sender == true){
		var containerDiv = document.createElement("div");
		containerDiv.setAttribute('class', "notopposite");

		var messageDiv = document.createElement("div");
		messageDiv.setAttribute('class', 'you');
		messageDiv.setAttribute('id', mid);
			
		var messageContent = document.createElement("p");
		messageContent.innerHTML = message;

		messageDiv.appendChild(messageContent);
		containerDiv.appendChild(messageDiv);

		document.getElementById("allContent").appendChild(containerDiv);
	}else if(sender == false){
		var containerDiv = document.createElement("div");
		containerDiv.setAttribute('class', "opposite");

		var senderImage = document.createElement("img");
		senderImage.setAttribute('src', image);

		var messageDiv = document.createElement("div");
		messageDiv.setAttribute('class', 'other');
		messageDiv.setAttribute('id', mid);
			
		var messageContent = document.createElement("p");
		messageContent.innerHTML = message;

		messageDiv.appendChild(messageContent);
		containerDiv.appendChild(senderImage);
		containerDiv.appendChild(messageDiv);

		document.getElementById("allContent").appendChild(containerDiv);
	}
}


//var id = chrome.contextMenus.create({"title": "gang", "contexts":["all"],"onclick": genericOnClick});
chrome.browserAction.onClicked.addListener(function(tab) { 
    console.log("icon clicked");
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function(){
    	chrome.tabs.executeScript(null, { file: "content.js" },function (result) {
    		for(var i = 0; i < result[0].length; i++){
				var senderBool = (result[0][i][0] == "You");
				createElement(senderBool, result[0][i][2], result[0][i][1], i);	
			}
		});
    });

});


