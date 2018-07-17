$(function() {
    var topBtn = $('#tile-top');    

    topBtn.click(function () {
        $('#main').animate({
            scrollTop: 0
        }, 460);
        return false;
    });
});