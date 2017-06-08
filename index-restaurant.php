<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Навигация Гранд | Рестораны</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="/common/jquery/OwlCarousel/css/owl.carousel.css">
    <link rel="stylesheet" href="/common/jquery/OwlCarousel/css/owl.theme.green.css">
    <link rel="stylesheet" href="/grandTitul/css/main.css">
</head>
<body>

<main class="main-page">
    <div class="container">
        <section class="departments">

           <?
           include "template/form-search.html";
           ?>


            <?
           //include "template/first-page.html";
           
           include "template/navigation.html";

           include "template/restaurant.php";

           ?>

        </section>
    </div>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/common/bootstrap/js/bootstrap.min.js"></script>
<script src="/common/jquery/OwlCarousel/js/owl.carousel.js"></script>
<script>
    $(function () {
        $("#grand-carousel").owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            slideSpeed: 500,
            autoplay: true,
            autoplayTimeout: 4500,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false

        });
    });
</script>
</body>
</html>

