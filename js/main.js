$(document).ready(function(){
    // alert(111);
    gnb();
})

function gnb() {
    var spd = 0.5,
        eft = Power4.easeOut;
    $('#gnb >ul >li >.nv1').on('mouseenter', function(){
        TweenLite.to($('header').css('overflow','inherit').addClass('open'), spd, {ease: eft, height: 425})
        TweenLite.to($('.nv2'), spd, { ease: eft, top: 0, opacity:1})
    })
    $('#gnb').on('mouseleave', function () {
        TweenLite.to($('header').css('overflow', 'hidden'), spd, {
            ease: eft, height: 165,
            onComplete: function () {
                $('header').removeClass('open')
            }
        })
        TweenLite.to($('.nv2'), spd, { ease: eft, top: -20, opacity: 0 })
    })
}