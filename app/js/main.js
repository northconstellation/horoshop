$(document).ready(function(){

    $("#showHideContent").click(function () {
        if ($(".hidden-block").is(":hidden")) {
            $(".hidden-block").show();
            $("#showHideContent").hide();
        } else {
            $(".hidden-block").hide();
        }
        return false;
    });

    $(".tab-item:first").addClass("active");
    $(".tab-contant_container .tab:first").addClass("active");
    $(".b-blockitem li").click(function() {
        event.preventDefault();
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".b-blockitem li.active").removeClass("active");
            $(".tab-contant_container .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tab-contant_container").children(".tab")[i]).fadeIn(1).addClass("active");
        }
    });
});