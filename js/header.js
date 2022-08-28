$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .dop__supstar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});