var start = 3;
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "ajax-profile-feed?username={{whosprofile}}&start=0",
        processData: false,
        contentType: "application/json",
        data: '',
        success: function (r) {
            r = JSON.parse(r)
            for (var i = 0; i < r.length; i++) {
                r[i].URL += '-/quality/lightest/'
                $('#loadposts').append('<div class="photo" data-likes="' + r[i].Likes + '" data-caption="' + r[i].Caption + '" style="background-image:url(' + r[i].URL + ')"></div>')
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
                url: "ajax-profile-feed?username={{whosprofile}}&start=" + start,
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
