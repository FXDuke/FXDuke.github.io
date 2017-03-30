'use strict';

(function () {

    /////////////////////////////////////////////////////////////////////
    // Breadcrumbs
    //
    breadcrumbs('.breadcrumbs');

    /////////////////////////////////////////////////////////////////////
    // Stars Rating
    //
    starsRating('.stars');

    /////////////////////////////////////////////////////////////////////
    // Progress Bar
    //
    progressBar('.progress');

    /////////////////////////////////////////////////////////////////////
    // Progress Circle
    //
    progressCircle('.progress-circle', {
        lineWidth: 17,
        color_backgroud: '#e7e8e8',
        color_arc: '#ffa352',
        font: '21px "SourceSansPro ExtraLight"',
        fontColor: '#4e4e4e'
    });

    /////////////////////////////////////////////////////////////////////
    // Ion.RangeSlider
    //
    $('.slider').ionRangeSlider({
        hide_min_max: 'true',
        hide_from_to: 'true'
    });

    /////////////////////////////////////////////////////////////////////
    // Data for select2
    //
    const date = {
        day: [],
        month: [],
        year: []
    };

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // put objects to 'date' for Select2
    for (let i = 1; i <= 31; i++) {
        date.day.push(
            {id: i.toString(), text: i.toString()}
        );
    }

    for (let i = 1; i <= 12; i++) {
        date.month.push(
            {id: i.toString(), text: monthNames[i - 1]}
        );
    }

    for (let i = 1980; i < 2010; i++) {
        date.year.push(
            {id: i.toString(), text: i.toString()}
        );
    }

    const city = [
        {id: 'kiev',     text: 'Kiev'},
        {id: 'dnepr',    text: 'Dnepr'},
        {id: 'lviv',     text: 'Lviv'},
        {id: 'london',   text: 'London'},
        {id: 'new-york', text: 'New York'},
        {id: 'paris',    text: 'Paris'},
        {id: 'tokyo',    text: 'Tokyo'}
    ];

    /////////////////////////////////////////////////////////////////////
    // jQuery Validation Plugin
    //
    // this function requires month day and year selections
    $.validator.addMethod('FullDate', function() {
        //if all values are selected
        if ($('.reg-form__day').val() != '' && $('.reg-form__month').val() != '' && $('.reg-form__year').val() != '') {
            return true;
        } else {
            return false;
        }
    }, 'Select date of birth');

    $('.reg-form').validate({
        ignore: [],
        rules: {
            //Rules
            birth_day:    'FullDate',
            birth_month : 'FullDate',
            birth_year:   'FullDate'
        },
        groups: {
            dateofbirth: 'birth_day birth_month birth_year'
        },
        messages: {
            //messages
            name: 'Enter your name',
            birth_day: 'Select date of birth',
            birth_month : 'Select date of birth',
            birth_year: 'Select date of birth'
        },
        validClass: 'success',
        success: 'valid',
        errorElement: 'span'
    });

    // validate Select2 element when it close
    $('.reg-form__day, .reg-form__month, .reg-form__year').on('select2:select', function () {
        $(this).valid();
    });

    /////////////////////////////////////////////////////////////////////
    // Select2 - The jQuery replacement for select boxes
    // (if you want custom scrollbar you can use niceScrol, but it does not work properly on mobile devices)

    // var niceScrollOptions = {
    //     autohidemode: false,
    //     cursorcolor: '#666',
    //     cursorwidth: '10px',
    //     cursoropacitymax: 0.6
    // };

    $('.reg-form__day').select2({
        placeholder: 'day',
        data: date.day,
        minimumResultsForSearch: Infinity
    }).on('select2:open', function() {
        // $('.select2-results__options').niceScroll(niceScrollOptions);
    });

    $('.reg-form__month').select2({
        placeholder: 'month',
        data: date.month,
        minimumResultsForSearch: Infinity
    }).on('select2:open', function() {
        // $('.select2-results__options').niceScroll(niceScrollOptions);
    });

    $('.reg-form__year').select2({
        placeholder: 'year',
        data: date.year,
        minimumResultsForSearch: Infinity
    }).on('select2:open', function() {
        // $('.select2-results__options').niceScroll(niceScrollOptions);
    });

    $('.reg-form__city').select2({
        placeholder: '',
        data: city,
        minimumResultsForSearch: Infinity
    }).on('select2:open', function() {
        // $('.select2-results__options').niceScroll(niceScrollOptions);
    });

    /////////////////////////////////////////////////////////////////////
    // Carousel - Slick Slider
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        speed: 500,
        arrows: false,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                    fade: false
                }
            }
        ]
    });

    $('.user-list').slick({
        dots: false,
        arrows: true,
        speed: 300,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
})();
