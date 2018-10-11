// homepage 
//intro animation

$(".welcome-text_h1").delay(1000).css({
    top: -25,
    opacity: 0
}).animate({
    top: 0,
    opacity: 1
}, 1200);

$(".welcome-text_h2").delay(2000).css({
    top: -20,
    opacity: 0
}).animate({
    top: 0,
    opacity: 1
}, 1200);

$(".welcome-text_p").delay(3500).css({
    top: 0,
    opacity: 0
}).animate({
    top: 0,
    opacity: 1
}, 1200);