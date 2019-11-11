// testing new variables

let whosprofile = document.location.pathname.split('/')[1];

// logic to null user on same user

if (whosprofile === whosprofile) {
    // user is the same, drop request
} else {
    // proceed with ajax request

}

var start = 3;
$(document).ready(function () {
    "use strict";
    $.ajax({
        type: "GET",
        url: `ajax-profile-feed?username=${whosprofile}&start=0`,
        processData: false,
        contentType: "application/json",
        data: '',
        success: function (r) {
            r = JSON.parse(r)
            for (var i = 0; i < r.length; i++) {
                r[i].URL += '-/quality/lightest/'
                $('#loadposts').append('<div class="col s12 m6 l4"><div class="card z-depth-3"><div class="card-image"><img class="responsive-ima; background-color: rgb(' + r[i].MainColour + ')" src="' + r[i].URL + '"><span class="card-title"><label>' + r[i].Likes + ' Likes</label></span><a href="javascript:void(0)" class="btn-floating halfway-fab waves-effect waves-light red likephoto" data-liked=' + r[i].Liked + ' data-postid="' + r[i].PostID + '" data-likes="' + r[i].Likes + '"><i class="fa fa-heart-o"></i></a></div><div class="card-content"><p>' + r[i].Caption + '</p></div></div></div>')
            }
            $('.photo').each(function () {
                $(this).click(function () {
                    $('#cap').html($(this).data('caption'))
                    if ($(this).data('caption') == "") {
                        $('#cap').html("")
                    }
                    $('#likes').html($(this).data('likes'))
                    var s = $(this).css('background-image').split("url(\"")[1]
                    var tmpImg = new Image();
                    tmpImg.src = s.slice(0, s.length - 21);
                    tmpImg.onload = function () {
                        $('#detailphoto').attr('src', tmpImg.src)
                        $('.photo-viewer').show()
                        $('#upload-div').hide()
                        $('.overlay').fadeToggle('fast')
                        $('body').css('overflow', 'hidden')
                    };
                })
            })
        },
        error: function (r) {

        }
    });
})
var working = false;
$(window).scroll(function () {
    if ($(this).scrollTop() + 1 >= $('body').height() - $(window).height()) {
        if (working == false) {
            working = true;
            $.ajax({
                type: "GET",
                url: `ajax-profile-feed?username=${whosprofile}&start=` + start,
                processData: false,
                contentType: "application/json",
                data: '',
                success: function (r) {
                    r = JSON.parse(r)
                    for (var i = 0; i < r.length; i++) {
                        r[i].URL += '-/quality/lightest/'
                        $('#loadposts').append('<div class="photo" data-likes="' + r[i].Likes + '" data-caption="' + r[i].Caption + '" style="background-image:url(' + r[i].URL + ')"></div>')
                    }
                    start += 3;

                    $('.photo').each(function () {
                        $(this).off('click')
                        $(this).click(function () {
                            $('#cap').html($(this).data('caption'))
                            if ($(this).data('caption') == "") {
                                $('#cap').html("")
                            }
                            $('#likes').html($(this).data('likes'))
                            var s = $(this).css('background-image').split("url(\"")[1]
                            var tmpImg = new Image();
                            tmpImg.src = s.slice(0, s.length - 21);
                            tmpImg.onload = function () {
                                $('#detailphoto').attr('src', tmpImg.src)
                                $('.photo-viewer').show()
                                $('#upload-div').hide()
                                $('.overlay').fadeToggle('fast')
                                $('body').css('overflow', 'hidden')
                            };

                        })
                    })
                },
                error: function (r) {

                }
            });
            setTimeout(function () {
                working = false;
            }, 4000)
        }
    }
});
