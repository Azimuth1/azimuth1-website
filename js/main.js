function setHash() {
    function setPageLoc(rel) {
        if (!rel) {
            return;
        }
        $('.navbar-nav li').removeClass('active');
        rel.addClass('active');
    }

    var relPath = window.location.hash;
    var $this = $('.navbar-nav li[data-slide="' + relPath + '"]');
    setLoc($this);

    $('.navbar-nav li a').click(function(e) {
        var $this = $(this).parent();
        if (window.location.pathname !== '/') {
            var attr = $this.attr('data-slide');
            window.location.href = window.location.origin + attr;
        }

        setPageLoc($this);
        //e.preventDefault();
    });
}

function setScroll() {
    var links = $('.nav').find('li');
    links.click(function(e) {
        //e.preventDefault();
        dataslide = $(this).attr('data-slide');

        $('html, body').animate({
            scrollTop: $(dataslide).offset().top
        }, 500);

    });
}
$(function() {

    $('.carousel').carousel({
        interval: 2000
    });

    setScroll();
    setHash();

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
