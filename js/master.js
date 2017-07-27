$(document).ready(function() {
    var car = $('.carousel').carousel({
        interval: 10000
    });

    var clickEvent = false;
    $('.carousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });

    $(document).on('click', '.open_video', function(e) {
        var ref = $(this).data('ref');
        $('.slide_1_content').fadeOut('slow');
        $('#' + ref).fadeIn('slow');
        $('.carousel').carousel('pause');
    });

    $(document).on('click', '.close_video', function(e){
        var ref = $(this).data('ref');
        $('#' + ref).fadeOut('slow');
        $('.slide_1_content').fadeIn('slow');
        $('.carousel').carousel('cycle');
    });
});