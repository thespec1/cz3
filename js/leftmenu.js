
$(function () {
    var clickLink = true;
    if (!clickLink) {
        var wi = $(window).width();
        //alert(wi);
        // Hide submenus
        $(".sidebar-menu ul").hide();

        // Toggle nested <ul> (siblings of the link)
        $(".sidebar-menu > li.sub > a").click(function (e) {
            $(this).siblings("ul").slideToggle();
            e.preventDefault();
        });
    }
});      


       
