var socket = io.connect('http://localhost:8080'),
	notification = navigator.mozNotification;
    
// Handle notifications

socket.on('newContent', function (data) {

    var newNotification = notification.createNotification('New tweet by ' + data.username, data.text.substring(0, 37) + '...', data.user_img);

    newNotification.onclick = function() {
        document.getElementById("tweets").innerHTML += 
        '<div class="tweet"><img src="' + data.user_img + '"' + '/>' + '<strong>@' + data.username + '</strong>&nbsp;<em>' + data.user_fullname + '</em>:<p>' + data.text + '</p></div>';
    };

    newNotification.show();

    if (!document.hidden) {
        document.getElementById("tweets").innerHTML += 
            '<div class="tweet"><img src="' + data.user_img + '"' + '/>' + '<strong>@' + data.username + '</strong>&nbsp;<em>' + data.user_fullname + '</em>:<p>' + data.text + '</p></div>';
    };

});


