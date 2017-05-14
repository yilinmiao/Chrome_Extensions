/**
 * Created by ymiao on 5/14/17.
 */
$(function() {
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val())
    })
});