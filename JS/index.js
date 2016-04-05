/**
 * Created by stardust on 2016/3/29.
 */

$("#fullpage").fullpage({
    //sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    autoScrolling: true,
    scrollBar: true,
    fitToSection: false,
});

$(document).ready((function () {
    $(".img-hover").each(function (index, img) {
        var url = img.src;
        url = url.substring(0, url.indexOf(".png"));

        var suffix = false;
        var index = url.indexOf("@2x");
        if(index > 0){
            suffix = true;
            url = url.substring(0, index);
        }

        $(img).hover(function () {
                if(suffix){
                    img.src = url + "_hover@2x.png";
                }
                else {
                    img.src = url + "_hover.png";
                }
            },
            function () {
                if(suffix){
                    img.src = url + "@2x.png";
                }
                else{
                    img.src = url + ".png";
                }
            }
        )
    })
}));

//adding the action to the button
$(document).on('click', '#moveUp', function(){
    $.fn.fullpage.moveSectionUp({

    });
});

$(document).on('click', "#mt-play-btn", function () {
    var video = $("#mt-video-1").get(0);
    video.play();
    $("#mt-video-cover-1").addClass("hide");
})