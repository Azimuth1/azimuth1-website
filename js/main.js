    function setPageLoc(rel) {
        if (!rel) {
            return;
        }
        $('.navbar-nav li').removeClass('active');
        rel.addClass('active');
    }

    function setHash() {
        var relPath = window.location.hash;
        var $this = $('.navbar-nav li[data-slide="' + relPath + '"]');
        setPageLoc($this);
    }
    $(function() {
        $('.navbar-nav li a').click(function(e) {
            var $this = $(this).parent();
            var attr = $this.attr('data-slide');
            if (window.location.pathname !== '/') {
                var attr = $this.attr('data-slide');
                window.location.href = window.location.origin + attr;
            } else {
                $('html,body').animate({
                    scrollTop: $(attr).offset().top
                }, 1000);
                //e.preventDefault();
            }
            setPageLoc($this);
        });
        $('.carousel').carousel({
            interval: 2000
        });
        //setScroll();
        //setHash();
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
