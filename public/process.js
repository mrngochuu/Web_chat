var socket = io("http://localhost:8081/");

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(){
        socket.emit("client-send-Username", $("txtUsername").val());
    });
});
