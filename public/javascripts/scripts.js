$(document).ready(function() {

  // get the content area
  var $contentArea = $('#memes');

  // this is the submit function for the form
  $('#newComment').on('submit',function(event) {

    // stop the page from refreshing
    event.preventDefault();

    // gets the data from the form, based on element's "name" property
    var data = $(this).serializeArray();

    // new empty object
    var newComment = {};

    // put the form's matching input values into the properties of the object
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'name') {
        newComment.message = data[i].value;
      } else if (data[i].name === 'type') {
        newComment.type = data[i].value;
      }
    }

    // finally, make an ajax call to /kittehs, using the POST method, and send the data
    $.ajax({url: '/comments',
      type: 'post',
      data: newcomments
    }).done(function(data) {

      // when ajax is done, display the data by appending it to the DOM
      console.log(data);

      $h2 = $('<h2>');
      $h2.text(data.name);

      $h3 = $('<h3>');
      $h3.text(data.type);

      $contentArea.append($h2);
      $contentArea.append($h3);
    });

    // reset the form
    $(this)[0].reset();
  });
});
