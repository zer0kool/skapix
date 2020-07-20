$(document).ready(function () {
    "use strict";
    $('#go').click(function () {
        $.post("ajax-sign-up", {
                username: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val()
            },
            function (data, status) {
            console.log(data, status)
                if (JSON.parse(data).Status == 'Success') {
                    M.toast({html:'Account Created!', classes:'rounded'})
                    window.location = '/';
                    M.toast({html:'Please log-in using your credentials', classes:'rounded'}) // 'rounded' is the class I'm applying to the toast
                } else {
                    if (JSON.parse(data).Message == "Username already in use.") {
                        document.getElementsByTagName("i")[0].setAttribute("class", "material-icons prefix red-text");
                        M.toast({html:'Username already in use.', classes:'red'})
                    }
                    if (JSON.parse(data).Message == "Password must be between 6 and 32 characters long.") {
                        document.getElementsByTagName("i")[2].setAttribute("class", "material-icons prefix red-text");
                        document.getElementsByTagName("input")[3].setAttribute("class", "invalid");
                        M.toast({html:'Password is to weak!', classes:'red'})
                    }
                    $('#errors').html("<span>" + JSON.parse(data).Message + "</span>")
                    $('#errors').css('display', 'block')
                }
            });
        return false;
    })
})
