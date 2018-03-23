$(document).ready(function () {
    "use strict";
    $('#go').click(function () {
        $.post("ajax-sign-up", {
                username: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val()
            },
            function (data, status) {
                if (JSON.parse(data).Status == 'Success') {
                    Materialize.toast('Account Created!', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
                    window.location = '/';
                    Materialize.toast('Please log-in using your credentials', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
                } else {
                    if (JSON.parse(data).Message == "Username already in use.") {
                        document.getElementsByTagName("i")[0].setAttribute("class", "material-icons prefix red-text");
                        Materialize.toast('Username already in use.', 4000, 'red')
                    }
                    if (JSON.parse(data).Message == "Password must be between 6 and 32 characters long.") {
                        document.getElementsByTagName("i")[2].setAttribute("class", "material-icons prefix red-text");
                        document.getElementsByTagName("input")[3].setAttribute("class", "invalid");
                        Materialize.toast('Password is to weak!', 4000, 'red')
                    }
                    $('#errors').html("<span>" + JSON.parse(data).Message + "</span>")
                    $('#errors').css('display', 'block')
                }
            });
        return false;
    })
})
