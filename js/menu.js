$(document).ready(function(){
 $('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #48ba3d), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
});
});