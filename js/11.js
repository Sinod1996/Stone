var menu_bac = 0;
function bacel_menyu() {
    if(menu_bac == 0){$('#menu').slideDown(300); menu_bac = 1;
        $('.nkari_div img').css('transform', 'rotateY(90deg)');
    $('.nkari_div img').attr('src', '../images/xach1.png');
       $('.nkari_div img').css('transform', 'none');
    }
    else{$('#menu').slideUp(300); menu_bac = 0; $('.nkari_div img').attr('src', '../images/vypad_menu.png');}
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
        $('#petqm').css('display', 'block');
        $('.div_slaqver').css('display', 'block');
    }
    if ($(this).scrollTop() < 450)
    {$('#petqm').css('display', 'none')
        $('.div_slaqver').css('display', 'none');}
});
$(function(){
    $("#petqm").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });});
