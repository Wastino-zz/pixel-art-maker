var width;
var height;
var color;

$('#sizePicker').submit( function (event){
    event.preventDefault();
     width = $('inputWidth').val();
     height = $('inputHeight').val();
    makeGrid(height, width);
});

function makeGrid(h, w) {
    for(let i = 0; i < h; i++) {
        $('pixelCanvas').append('<tr></tr>');
    };
    for(let i = 0; i < w; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        var color = $('colorPicker').val();
        if($(this).attr('css'))
      {
        $(this).removeAttr('css');
      }
    else
      $(this).css('background-color', color);
    });
};
