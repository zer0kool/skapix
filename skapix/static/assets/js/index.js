//(function ($) {
    "use strict";
    $(document).ready(function () {
        $('#go').click(function () {
            $.post("ajax-login", {
                    email: $("#email").val(),
                    password: $("#password").val()
                },
                function (data, status) {
                    if (JSON.parse(data).Status == 'Success') {
                        window.location = '';
                    } else {
                        $('#errors').html("<span>" + JSON.parse(data).Message + "</span>")
                        $('#errors').css('display', 'block')
                        Materialize.toast('Email or password is incorrect.', 4000, 'red')
                    }
                });
            return false;
            $('#go').click(function () {
                $.post("ajax-login", {
                        email: $("#email").val(),
                        password: $("#password").val()
                    },
                    function (data, status) {
                        if (JSON.parse(data).Status == 'Success') {
                            window.location = '';
                        } else {
                            $('#errors').html("<span>" + JSON.parse(data).Message + "</span>")
                            $('#errors').css('display', 'block')
                        }
                    });
                return false;
            })
        })
    })
//});
