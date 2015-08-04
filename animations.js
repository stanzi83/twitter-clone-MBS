/**
 * Created by Michele on 7/22/2015.
 */
$(document).ready(function(){
    $('#char-count').hide();
    $('.button').hide();
    $('.tweet-compose').on('click', function() {
        $(this).css("height", "5em");
        $('.button').show();
        $('#char-count').show();
    });

    $('.tweet-compose').on('keyup', function() {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#char-count').text(' you have reached the limit');
        } else {
            var char = max - len;
            $('#char-count').text(char + ' characters left');
        }
        var keyCount = $('.tweet-compose').val().length;
        if (keyCount <= 130) {
            $('.tweet-compose').css('color', 'black');
        } else {
            $('.tweet-compose').css('color', 'red');
        }
        var buttonOff = $('.tweet-compose').val().length;
        if (buttonOff > 140) {
            $('#tweet-submit').attr('disabled', 'disabled');
        } else {
            $('#tweet-submit').removeAttr('disabled');
        }
    });
    $('.button').on('click', function() {
        var newTweet = $('.tweet-compose').val().length;
        if (newTweet >= 1) {
            $('#stream').prepend($('.tweet-compose'));
        }
    });
});








