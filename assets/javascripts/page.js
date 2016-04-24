(function() {

    // Tracking
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-45302821-1', 'coldfrontconf.com');
    ga('send', 'pageview');

    // Twitter
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');    

	// Facebook
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=1396360133947588";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


    jQuery(function( $ ){

        $('header a').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
            
            $('#nav-trigger').prop('checked', false);

            $.scrollTo( this.hash, 500, {
                offset: { 
                    top: -1 * $('header').outerHeight()
                }
            });

        });

        $('.location').on('mousedown', function() {
            $(this).find('iframe').css('pointerEvents', 'all');
        });
        
        var elementButton = document.querySelector('.elevator');
        var elevator = new Elevator({
            element: elementButton,
            mainAudio: '/assets/music/elevator.mp3', // Music from http://www.bensound.com/
            endAudio:  '/assets/music/ding.mp3'
        });
    });

})();