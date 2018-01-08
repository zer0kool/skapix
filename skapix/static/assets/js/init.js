 $(document).ready(function () {
 	$('.slider').slider();
	 $('<span>I am in ALPHA TESTING</span>').add($('<button class="btn-flat toast-action">Undo</button>'));
  Materialize.toast($toastContent, 10000);
 });
 $(document).ready(function () {
 	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
 	$('.modal').modal();
 });

 $('#delete').click(function () {
 	$.ajax({
 		type: "GET",
 		url: "ajax-delete-photo?id=" + $('.photo').data('postid'),
 		processData: false,
 		contentType: "application/json",
 		data: '',
 		success: function (r) {
 			if (JSON.parse(r).Following == true) {
 				$('#follow').html("Unfollow")
 			} else {
 				$('#follow').html("Follow")
 			}
 		},
 		error: function (r) {}
 	});
 });

 var $toastContent = $('<span>I am in ALPHA TESTING</span>').add($('<button class="btn-flat toast-action">Undo</button>'));
  Materialize.toast($toastContent, 10000);
