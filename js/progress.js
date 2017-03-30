/*
* Progress Bar
*/

'use strict';

function progressBar(selector) {
    $(selector).each(function() {
        const progressPercent = $(this).find('.progress__percent');
        const progressBar = $(this).find('.progress__bar');
        const percent = parseFloat(progressPercent.text());
        progressBar.css('width', percent + '%');
    });
}
