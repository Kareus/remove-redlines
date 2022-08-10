var obs = new MutationObserver(function (mutations, observer) {

    //find red lines
    var lines = document.querySelectorAll("ytd-thumbnail-overlay-resume-playback-renderer");

    //remove the lines
    for (var i = 0; i < lines.length; i++)
    {
        lines[i].parentNode.removeChild(lines[i]);
    }
});

//real-time check due to dynamic load
obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });