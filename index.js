var width;
var height;
var color;

$('#sizePicker').submit( function (event){
    event.preventDefault();
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();

    $('#pixelCanvas').html('');

    makeGrid(height, width);
    colorListener();
});

function makeGrid(h, w) {
    for(var i = 1; i < h; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    };
    for(var i = 1; i < w; i++) {
        $('tr').append('<td></td>');
    };
};

function colorListener() {
    $('td').click( function (event) {
        color = $('#colorPicker').val();
        if($(this).attr('style'))
      {
        $(this).removeAttr('style');
      }
    else
      $(this).attr('style', 'background-color:'+color);
    });
};
