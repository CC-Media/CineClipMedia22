/*global $, window, WOW*/

$(function() {

    "use strict";

    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        progressCheck = false,
        factsCheck = false;


    /*========== Loading  ==========*/
    $('.preloader').delay(1400).fadeOut(500, function() {
        $(this).remove();
    });

    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {

        if (win.scrollTop() > 100) {
            navBar.addClass("active-nav fadeInDown animated");
        } else {
            navBar.removeClass("active-nav fadeInDown animated");
        }

    }

    activeNavbar();

    win.on("scroll", function() {
        activeNavbar();
    });

    /*========== Mobile Menu  ==========*/
    $(".navbar .menu-toggle").on("click", function() {
        navBar.toggleClass("menu-active");
    });

    /*========== Vertical Menu  ==========*/
    $(".vertical-nav .toggle-menu").on("click", function() {
        $(this).parent().toggleClass("open");
    });

    /*========== Typed  ==========*/
    $(".home p span").typed({
        strings: ["Social-Media-Inhalte", "FPV-Drohnenaufnahmen", "360°-Rundgänge"],
        cursorChar: "",
        typeSpeed: 40,
        loop: true,
        backSpeed: 20
    });

    /*========== Start Scroll For Link To Go Section  ==========*/
    $(".home .arrow a, .skills .skills-left .main-btn").on("click", function(e) {
        e.preventDefault();
        var selector = $(this);
        htmlBody.animate({
            scrollTop: $(selector.attr("href")).offset().top
        }, 800);
    });

    /*========== Smooth Scroll  ==========*/
    $(".navbar .navbar-nav > li:not('.nav-brand') > a, .vertical-nav .mini-menu li a").on("click", function(e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: $($(this).data('value')).offset().top
        }, 600);
    });

    /*========== Add Class Active to Menu Links on Scrolling  ==========*/
    win.on("scroll", function() {
        $("section").each(function() {
            if (win.scrollTop() >= $(this).offset().top - 1) {
                $(".navbar .navbar-nav > li > a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });

    /*========== Add Class Active to Vertical Menu Links on Scrolling  ==========*/
    $("section").each(function() {
        if (win.scrollTop() >= $(this).offset().top - 1) {
            $(".vertical-nav .mini-menu li a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
        }
    });
    win.on("scroll", function() {
        $("section").each(function() {
            if (win.scrollTop() >= $(this).offset().top - 1) {
                $(".vertical-nav .mini-menu li a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });


    /*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }

    scrollUp();

    win.on("scroll", function() {
        scrollUp();
    });

    scrollToTop.on("click", function(e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });

    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();
});