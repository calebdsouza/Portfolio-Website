function toggleDisplay(id) {
    'use strict';
    $("#" + id).slideToggle("slow");
}

/* MENU FUNCTIONS */

$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        if ($("body").scrollTop() > 10) {
            $("#nav li a").css("font-size", "2.3vh");
            $("#Header").css("background", "rgba(0,0,0, 0.8)");
            $("#Header").css("height", "9vh");
            $("#nav li a").css("padding", "1.5vh 1vw");
            $("#Header").css("border-bottom", "1px solid white");
            $("#mobileMenuButton").css("margin", "2vh 3vw");
        } else {
            $("#nav li a").css("font-size", "3vh");
            $("#Header").css("background", "transparent");
            $("#Header").css("height", "15vh");
            $("#nav li a").css("padding", "4vh 1vw");
            $("#Header").css("border-bottom", "none");
            $("#mobileMenuButton").css("margin", "3vh 3vw");
        }
    });
});
/**
 * depending if the width of the current window is greater than 800px,
 * hide the mobible nav menu. 
 */
$(document).ready(function () {
    'use strict';
    var $window = $(window);
    function checkWidth() {
        // Get the current width of this window
        var windowSize = $(window).width();
        // Check if the width of this windo is greater than 800px
        if (windowSize > 800) {
            $("#mobileNav").css("display", "none");
        }//end if 
    }// end checkWidth
    
    // Execute on load
    checkWidth();
                    
    // Bind event listener
    $(window).resize(checkWidth);
});

/**
 * Depending on the state of the mobile nav toggle it's display.
 */
$(document).ready(function(){
    $("#mobileMenuButton").click(function(){
        $("#mobileMenuButton").toggleClass("mobileMenuButtonAnimation");
    });
});

/**
 * Active Menu Link Function
 * When any menu link on the menu is active, change the CSS to show it is active.
 */
$(document).ready(function () {
    'use strict';
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $("#nav ul li a").each(function () {
        if ($(this).attr("href") === pgurl || $(this).attr("href") === '') {
            $(this).addClass("active");
        }
    });
});

/**
 * Scroll To Top Button
 * Depending if whether or not the scrollTop value is greter than or less than and equal to 500px
 * the scroll to top button will be displayed or not
 */
$(document).ready(function () {
    'use strict';
    function scrollFunction() {
        // Check if the scroll top value of the windo is more than 500px 
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            //Display scroll to top buttion
            document.getElementById("scrollToTopButton").style.display = "block";
        } else {
            //Hide scroll to top button
            document.getElementById("scrollToTopButton").style.display = "none";
        }
    }
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };
});

/**
 * Smooth Scrolling 
 */
$(document).ready(function () {
    'use strict';
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
        // On-page links
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    && location.hostname === this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({scrollTop: target.offset().top}, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
});

/**
 * @desc Blur the background based on the how far the user has 
 *       scrolled down the page.
 */
$(document).ready(function() {
    $(document).scroll(function() {
        // Get the scroll value 
        var scrollVal = $(document).scrollTop(),
                // Calulate the desired opacity value
                opacityVal =  (scrollVal/600);
        // Check if the scroll value is more than 726
        if(scrollVal < 726) {
            // Then blur the background according to the current opacity value
            $('.backgroundBlurEffect').css('opacity', opacityVal);
            // Print scroll value: alert($(document).scrollTop());
        }
        else { 
            // Else remove the blured background effect
            $('.backgroundBlurEffect').css('opacity', 10000);
            
        }
    
    });
});