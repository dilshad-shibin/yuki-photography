(function() {
    //strict mode on
    "use strict";


    /*
        1.    Toogel Nav Responsive Function 
    */
    // varibials
    var value = false;

    var menu = document.querySelector(".reponsive_menu");

    var btn = document.querySelector(".menu-toggel");

    //console.log(menu);
    btn.addEventListener("click", function(event) {
        if (value === false) {
            menu.style.display = "block";
            TweenMax.to(".line-1", 0.1, {
                y: 10,
                rotation: 45,
                ease: Power0.easeOut
            });
            TweenMax.to(".line-2", 0.1, { autoAlpha: 0 });
            TweenMax.to(".line-3", 0.1, {
                y: -10,
                rotation: -45,
                ease: Power0.easeOut,
                delay: "-0.1"
            });
            value = true;
        } else if (value === true) {
            menu.style.display = "none";
            TweenMax.to(".line-1", 0.1, { rotation: 0, y: 0 });
            TweenMax.to(".line-2", 0.1, { autoAlpha: 1 });
            TweenMax.to(".line-3", 0.1, { rotation: 0, y: 0 });
            value = false;
        }
    });

    /*
        2.  Counter Up  // ScrollMagic & countTo Plugin
    */

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: ".stat-sec",
            reverse: false,
            triggerHook: 0.8
        })
        .on("enter", function() {
            $(".timer").countTo();
        })
        .addTo(controller);

})();