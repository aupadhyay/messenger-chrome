var allData = [];
$( "._hh7" ).each(function( index ) {
	var message = [];
	var author = $(this).parent().parent().parent().find("img").attr("alt");
	if(author == null){
		author = "You";
	}
	message[message.length] = author;
	var authorimg = $(this).parent().parent().parent().find("img").attr("src"); 
	if(authorimg == null){
		authorimg = "https://placeholdit.co//i/458x458?";
	}
	message[message.length] = authorimg;
	
	var messageString = $(this).find("span").text();
	message[message.length] = messageString;
	var datetime = $(this).attr("data-tooltip-content");
	message[message.length] = datetime;
	//console.log(author + " (" + datetime + "): " +  message);

	allData[allData.length] = message;
});

allData


