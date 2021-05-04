$(function () {
    
    /* vyhledání aktivního menu **/
    var activeli = $(".sidebar-menu").find(".active");
    $(activeli).parent().parent().addClass("active");
    $(".sidebar-menu ul").hide();
    $(".sidebar-menu .active ul").show();

    /** fotogalerie*/
    if (typeof imageSlider !== "undefined")
        imageSlider.SetClientVisible(false);

    /** vyber z responsivniho menu */
    /*$("#responsiveMainMenu").change(function () {
        var url = $(this).val();
        window.location.href = url;
    }); */
});

/** otevření dialogu s obŕázkem*/
function showGallery(position) {
    $("#GalleryImage").show();
    $("#GalleryImage").css("visibility", "visible");
    $("#blockContent").show();
    imageSlider.SetVisible(true);
    imageSlider.SetActiveItemIndex(position);
}
/** zavření dialogu s obrázkem */
function CloseDialog() {

    $("#GalleryImage").hide();
    $("#GalleryImage").css("visibility", "hidden");
    $("#blockContent").hide();
}
/** funkce zobrazení formuláře*/
function showForm() {
    $('html, body').animate({
        scrollTop: $(".questionform-holder").offset().top
    }, 2000);
    return false;
}
/*tlačítka slideru*/
function nextItem() {
    var owl = $(".owl-carousel").data('owlCarousel');
    owl.next();
}
function prevItem() {
    var owl = $(".owl-carousel").data('owlCarousel');
    owl.prev();
}