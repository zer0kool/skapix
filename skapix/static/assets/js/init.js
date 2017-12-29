 $(document).ready(function(){
      $('.slider').slider();
    });
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

 $('#delete').click(function() {
            $.ajax({
                type: "GET",
                url: "ajax-delete-photo?user={{whosprofile}}",
                processData: false,
                contentType: "application/json",
                data: '',
                success: function(r) {
                },
                error: function(r) {

                }
            });
        });
