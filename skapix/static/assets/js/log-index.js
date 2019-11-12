 var start = 0;

 function getPosts() {
     "use strict";
     $.ajax({
         type: "GET",
         url: "ajax-photo-feed?&start=" + start,
         processData: false,
         contentType: "application/json",
         data: '',
         success: function (r) {
             r = JSON.parse(r)
             for (var i = 0; i < r.length; i++) {
                 r[i].URL += '-/quality/lightest/'
                 $('#loadposts').append('<div class="col s12 m6 l4"><div id="card" class="card z-depth-3"><div class="card-image"><img class="activator responsive-ima; background-color: rgb(' + r[i].MainColour + ')" src="' + r[i].URL + '"><span class="card-title"><label>' + r[i].Likes + ' Likes</label></span><a href="javascript:void(0)" class="btn-floating halfway-fab waves-effect waves-light red likephoto" data-liked=' + r[i].Liked + ' data-postid="' + r[i].PostID + '" data-likes="' + r[i].Likes + '"><i class="fa fa-heart-o"></i></a></div><div class="card-content"><p>' + r[i].Caption + '</p></div><div class="card-reveal"><span class="card-title white-text">Card Title<i class="material-icons right">close</i></span><p>' + r[i].Caption + '</p></div></div></div>')
             }
             $('.likephoto').each(function () {
                 if ($(this).data('liked') == true) {
                     $(this).css('color', '#440e96')
                     $('i', this).attr('class', 'fa fa-heart')
                 } else {
                     $(this).css('color', '#333')
                     $('i', this).attr('class', 'fa fa-heart-o')
                 }
                 $(this).off('click')
                 $(this).click(function () {
                     var but = $(this)
                     var buti = $('i', this)
                     $.ajax({
                         type: "GET",
                         url: "ajax-like-photo?id=" + $(this).data('postid'),
                         processData: false,
                         contentType: "application/json",
                         data: '',
                         success: function (r) {
                             if (JSON.parse(r).Status == 'Success') {
                                 if (but.data('liked') == false) {
                                     but.data('liked', true)
                                     but.css('color', '#440e96')
                                     buti.attr('class', 'fa fa-heart')
                                 } else {
                                     but.data('liked', false)
                                     but.css('color', '#333')
                                     buti.attr('class', 'fa fa-heart-o')
                                 }
                             }
                         },
                         error: function (r) {}
                     })
                 })
             })
         },
         error: function (r) {}
     });
     start += 3;
 }
 $(document).ready(function () {
     $(window).scroll()
     getPosts()
 })
 var working = false;
 $(window).scroll(function () {
     if ($(this).scrollTop() + 1 >= $('body').height() - $(window).height()) {
         if (working == false) {
             working = true;
             getPosts();
             setTimeout(function () {
                 working = false;
             }, 4000)
         }
     }
 });
