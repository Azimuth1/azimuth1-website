    function page_scroll() {
        $('html, body').animate({
            scrollTop: '0px'
        }, 800);
    }

    function scroll_bottom() {
        var percentageToScroll = 100;
        var height = $(document).innerHeight();
        var scrollAmount = height * percentageToScroll / 100;
        var overheight = jQuery(document).height() - jQuery(window).height();
        jQuery('html, body').animate({
            scrollTop: scrollAmount
        }, 900);
    }

    function setLoc(rel) {
        if (!rel) {
            return;
        }
        $('.navbar-nav li').removeClass('active');
        rel.addClass('active');
    }
    $(function() {

        $('.carousel').carousel({
            interval: 2000
        });

        var relPath = window.location.hash
        var $this = $('.navbar-nav li[data-slide="' + relPath + '"]');
        setLoc($this);

        $('.navbar-nav li a').click(function(e) {
            var $this = $(this).parent();
            if (window.location.pathname !== '/') {
                var attr = $this.attr('data-slide')
                window.location.href = window.location.origin + attr;
                return
                //setLoc($this);
            }
            var $this = $(this).parent();
            setLoc($this);
            //e.preventDefault();
        });

        addthis.layers({
            'theme': 'transparent',
            'share': {
                'position': 'left',
                'numPreferredServices': 5
            },
            'follow': {
                'services': [{
                    'service': 'twitter',
                    'id': 'azimuth1tech'
                }, {
                    'service': 'linkedin',
                    'id': 'azimuth1',
                    'usertype': 'company'
                }]
            }
        });

        var links = $('.nav').find('li');

        //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
        links.click(function(e) {
            //e.preventDefault();
            dataslide = $(this).attr('data-slide');

            $('html, body').animate({
                scrollTop: $(dataslide).offset().top
            }, 500);

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

        /*$('#slider1').responsiveSlides({
            maxwidth: 941,
            speed: 500
        });*/
        /*$('#container_box').isotope({
            layoutMode: 'fitRows'
        });*/
        /*var $container = $('#container_box');
        $container.isotope({
            masonry: {
                columnWidth: 120
            }
        });
        var $optionSets = $('#options .option-set'),
            $optionLinks = $optionSets.find('a');
        $optionLinks.click(function() {
            var $this = $(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[key] = value;
            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                // changes in layout modes need extra logic
                changeLayoutMode($this, options)
            } else {
                // otherwise, apply new options
                $container.isotope(options);
            }
            return false;
        });
        // Sites using Isotope markup
        var $sites = $('#sites'),
            $sitesTitle = $(''),
            $sitesList = $('');
        $sites.append($sitesTitle).append($sitesList);
        $sitesList.isotope({
            layoutMode: 'cellsByRow',
            cellsByRow: {
                columnWidth: 200,
                rowHeight: 400
            }
        });
        var ajaxError = function() {
            $sitesTitle.removeClass('loading').addClass('error').text('Could not load sites using Isotope :(');
        };
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        addthis.layers({
            'theme': 'transparent',
            'share': {
                'position': 'left',
                'numPreferredServices': 5
            },
            'follow': {
                'services': [{
                    'service': 'twitter',
                    'id': 'azimuth1tech'
                }, {
                    'service': 'linkedin',
                    'id': 'azimuth1',
                    'usertype': 'company'
                }]
            }
        });
        $('.itemoverlay').hover(function() {
            $(this).filter(':not(:animated)').slideUp();
        }, function() {
            $(this).slideUp();
        });*/
    });
