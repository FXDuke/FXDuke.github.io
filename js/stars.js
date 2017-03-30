/**
* Stars Rating
*/

'use strict';

function starsRating(selector) {
    $(selector).each(function() {
        let rating = parseFloat($(this).find('span').text()) * 20;
        $(this).find('span').css('width', rating + '%');
    });
}
