$(document).ready(function () {
    "use strict";
    $('#go').click(function () {

        $.post("ajax-login", {
                email: $("#email").val(),
                password: $("#password").val()
            },
            function (data, status) {
            console.log(data, status)
                if (JSON.parse(data).Status == 'Success') {
                    window.location = 'dashboard.html';
                } else {
                    $('#errors').html("<span>" + JSON.parse(data).Message + "</span>")
                    $('#errors').css('display', 'block')
                    M.toast({html:'Email or password is incorrect.', classes:'red'})
                }
            });
        return false;
    })
})
