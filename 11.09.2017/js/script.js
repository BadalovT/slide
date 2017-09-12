 $(document).ready(function () {
  var index = $(".main_images.active").index();
    var sliderInterval = setInterval(next, 3000);

    $(".lists .item").mouseover(function () {
        index = $(this).index();
        $(".main_images.active").removeClass("active");
        $(".main_images").eq(index).addClass("active");

        $(".lists .item.active").removeClass("active");
        $(this).addClass("active");
    });


    $(".slider").hover(function () {
        clearInterval(sliderInterval);
    }, function () {
        sliderInterval = setInterval(next, 3000);
    });

    function next() {
        index++;
        if ($(".main_images").eq(index).length == 0) {
            index = 0;
        }
        $(".main_images.active").removeClass("active");
        $(".main_images").eq(index).addClass("active");

        $(".lists .item.active").removeClass("active");
        $(".lists .item").eq(index).addClass("active");
    }
});