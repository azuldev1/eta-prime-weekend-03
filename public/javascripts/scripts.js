$(document).ready(function() {

  // this is the submit function for the form
  $('.newComment').on('submit',function(event) {

    // stop the page from refreshing
    event.preventDefault();

    // gets the data from the form, based on element's "name" property
    var data = $(this).serializeArray();

    // new empty object
    var newComment = {};

    // put the form's matching input values into the properties of the object
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'message') {
        newComment.message = data[i].value;
      } else if (data[i].name === 'id') {
        newComment.imageId = data[i].value;
      }
    }

    // finally, make an ajax call to /kittehs, using the POST method, and send the data
    $.ajax({url: '/comments',
      type: 'post',
      data: newComment
    }).done(function(data) {

      // when ajax is done, display the data by appending it to the DOM
      console.log(data);

      $li = $('<li>');
      $li.text(data.message);

      var $contentArea = $('#content' + newComment.imageId);
      $contentArea.append($li);
    });

    // reset the form
    $(this)[0].reset();
  });
});
