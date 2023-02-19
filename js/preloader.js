function counter() {
    let count = setInterval(function () {
        let c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c === 100) {
            clearInterval(count)
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }
    }, 45)
}
counter()
