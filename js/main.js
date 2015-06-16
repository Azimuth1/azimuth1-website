    function setPageLoc(rel) {
        if (!rel) {
            return;
        }
        $('.navbar-nav li')
            .removeClass('active');
        rel.addClass('active');
    }

    function setHash() {
            var relPath = window.location.hash;
            var $this = $('.navbar-nav li[data-slide="' + relPath + '"]');
            setPageLoc($this);
        }
        (function ($) {
            $(document).ready(function () {
                // hide .navbar first
                //      $(".navbar").hide();
                // fade in .navbar
                $(function () {
                    $(window).scroll(function () {
                        // set distance user needs to scroll before we fadeIn navbar
                        if ($(this).scrollTop() > 100) {
                            $('.navbar').fadeOut();
                        } else {
                            $('.navbar').fadeIn();
                        }
                    });
                    $('.gallery .item').hover(

                        function () {
                            $(this).find('.info').animate({
                                opacity: 0.7
                            }, 300);
                        },
                        function () {
                            $(this).find('.info').animate({
                                opacity: 0
                            }, 100);
                        }
                    );
                    var relPath = window.location.hash || '#home';
                    var pathName = window.location.pathname.replace('.html', '');
                    console.log(pathName)
                    relPath = pathName.indexOf('/about') !== -1 ? '#about' : relPath;
                    relPath = pathName.indexOf('/blog') !== -1 ? '#blog' : relPath;
                    relPath = pathName.indexOf('/portfolio') !== -1 ? '#portfolio' : relPath;
                    console.log(relPath)
                    $('.navbar-nav li')
                        .removeClass('active');
                    $('[data-slide="' + relPath + '"]')
                        .addClass('active');
                    $('.navbar-nav li a')
                        .click(function (e) {
                            //e.preventDefault()
                            var $this = $(this)
                                .parent();
                            var attr = $this.attr('data-slide');
                            /*if (attr === '#blog') {
                                return;
                            }*/
                            console.log(window.location.pathname)
                            if (window.location.pathname !== '/') {
                                var attr = $this.attr('data-slide');
                                console.log(window.location.origin + pathName + attr)
                                window.location.href = window.location.origin + pathName + attr;
                            } else {
                                //alert('!')
                                    //e.preventDefault()
                                $('html,body')
                                    .animate({
                                        scrollTop: ($(attr)
                                            .offset()
                                            .top - 0)
                                    }, 500);
                            }
                        });
                    ! function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0],
                            p = /^http:/.test(d.location) ? 'http' : 'https';
                        if (!d.getElementById(id)) {
                            js = d.createElement(s);
                            js.id = id;
                            js.src = p + '://platform.twitter.com/widgets.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, 'script', 'twitter-wjs');
                });
            });
        }(jQuery));
    /*
        $(function() {
          

            $('.gallery .item').hover(

                function() {
                    $(this).find('.info').animate({
                        opacity: 0.6
                    }, 300);
                },
                function() {
                    $(this).find('.info').animate({
                        opacity: 0
                    }, 100);
                }
            );
            var relPath = window.location.hash || '#home';
            var pathName = window.location.pathname.replace('.html', '');
            console.log(pathName)
            relPath = pathName === '/about' ? '#about' : relPath;
            relPath = pathName.indexOf('/blog') !== -1 ? '#blog' : relPath;
            relPath = pathName.indexOf('/portfolio') !== -1 ? '#portfolio' : relPath;
            console.log(relPath)
            $('.navbar-nav li')
                .removeClass('active');
            $('[data-slide="' + relPath + '"]')
                .addClass('active');
            $('.navbar-nav li a')
                .click(function(e) {
                    //e.preventDefault()
                    var $this = $(this)
                        .parent();
                    var attr = $this.attr('data-slide');
                    if (attr === '#blog') {
                        return;
                    }
                    if (window.location.pathname !== '/') {
                        var attr = $this.attr('data-slide');
                        window.location.href = window.location.origin + attr;
                    } else {
                        //e.preventDefault()
                        $('html,body')
                            .animate({
                                scrollTop: ($(attr)
                                    .offset()
                                    .top - 50)
                            }, 500);
                    }
                });
            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'twitter-wjs');



        });
    */
