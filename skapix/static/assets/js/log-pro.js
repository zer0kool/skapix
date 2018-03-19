 $('#follow').click(function() {
            $.ajax({
                type: "GET",
                url: "ajax-follow?user={{whosprofile}}",
                processData: false,
                contentType: "application/json",
                data: '',
                success: function(r) {
                    if (JSON.parse(r).Following == true) {
                        $('#follow').html("Unfollow")
                    } else {
                        $('#follow').html("Follow")
                    }
                },
                error: function(r) {}
            });
        });
        var start = 0;

        function getPosts() {
            $.ajax({
                type: "GET",
                url: "ajax-profile-feed?username={{whosprofile}}&start=" + start,
                processData: false,
                contentType: "application/json",
                data: '',
                success: function(r) {
                    r = JSON.parse(r)
                    for (var i = 0; i < r.length; i++) {
                        r[i].URL += '-/quality/lightest/'
                        $('#loadposts').append('<div class="photo" data-liked=' + r[i].Liked + ' data-postid="' + r[i].PostID + '" data-likes="' + r[i].Likes + '" data-caption="' + r[i].Caption + '" style="background-color: rgb(' + r[i].MainColour + '); background-image:url(' + r[i].URL + ')"></div>')
                    }
                    $('.photo').each(function() {
                        $(this).off('click')
                        $(this).click(function() {
                            $('#cap').html($(this).data('caption'))
                            $('#likephoto').data('postid', $(this).data('postid'))
                            if ($(this).data('caption') == "") {
                                $('#cap').html("")
                            }
                            $('#likes').html($(this).data('likes'))
                            if ($(this).data('liked') == true) {
                                $('#likephoto').css('color', '#440e96')
                                $('#likephoto i').attr('class', 'fa fa-heart')
                            } else {
                                $('#likephoto').css('color', '#333')
                                $('#likephoto i').attr('class', 'fa fa-heart-o')
                            }
                            var s = $(this).css('background-image').split("url(\"")[1]
                            var tmpImg = new Image();
                            tmpImg.src = s.slice(0, s.length - 21);
                            tmpImg.onload = function() {
                                $('#detailphoto').attr('src', tmpImg.src)
                                $('.photo-viewer').show()
                                $('#upload-div').hide()
                                $('.overlay').fadeToggle('fast')
                                $('body').css('overflow', 'hidden')
                            };
                        })
                    })
                },
                error: function(r) {}
            });
            start += 3;
        }
        $(document).ready(function() {
            $(window).scroll()
            getPosts()
        })
        $('#likephoto').click(function() {
            $.ajax({
                type: "GET",
                url: "ajax-like-photo?id=" + $('#likephoto').data('postid'),
                processData: false,
                contentType: "application/json",
                data: '',
                success: function(r) {
                    if (JSON.parse(r).Status == 'Success') {
                        $('[data-postid]').each(function() {
                            if ($(this).data('postid') == $('#likephoto').data('postid')) {
                                if ($(this).data('liked') == false) {
                                    $(this).data('liked', true)
                                    $('#likephoto').css('color', '#440e96')
                                    $('#likephoto i').attr('class', 'fa fa-heart')
                                } else {
                                    $(this).data('liked', false)
                                    $('#likephoto').css('color', '#333')
                                    $('#likephoto i').attr('class', 'fa fa-heart-o')
                                }
                            }
                        })
                    }
                },
                error: function(r) {}
            })
        })
        var working = false;
        $(window).scroll(function() {
            if ($(this).scrollTop() + 1 >= $('body').height() - $(window).height()) {
                if (working == false) {
                    working = true;
                    getPosts();
                    setTimeout(function() {
                        working = false;
                    }, 4000)
                }
            }
        });
