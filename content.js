var host = window.location.hostname;
var skipTime = 60;

host = host.replace('www.', '');

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {

            // console.log(host);

            if(host == 'player.pl') {
                /* Skip ads on player.pl */
                jQuery('.ima-ad-container').find('video')[0].currentTime = skipTime;
                console.log('Skipped! ;-)');
            }

            if(host == 'vod.tvp.pl') {
                // document.getElementById('JS-TVPlayer').contentWindow.document.getElementById('tvplayer').contentWindow.document.getElementsByTagName('video')[0].currentTime = skipTime;
                $('.playerContainer').find('video').each(function(i){ if(!$(this).hasClass('tp2-layer')) { console.log($(this)[0].currentTime = 60); } });
                console.log('Skipped! ;-)');
            }

            if(host == 'ipla.tv') {
                jQuery('.cpp2-ads-container').find('video')[0].currentTime = skipTime;
                console.log('Skipped! ;-)');
            }
        }
    }
);