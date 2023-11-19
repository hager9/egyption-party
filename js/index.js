
$(".openSideBar").click(function () {
    $("#sideBar").animate({ "width": "250px" } , 300)
    // $("#homeContent").animate({"marginLeft":"250px"}, 300)
})


$(".closeBtn").click(function () {
    $("#sideBar").animate({ "width": "0px" } , 300)
    // $("#homeContent").animate({"marginLeft":"0px"}, 300)
})

$("a[href ^= '#']").click(function (e) {
    let aHref = e.target.getAttribute("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 500);
})

///////////////////

$(".itemHeader").click(function (e) {
    $(e.target).next().slideToggle()
    $(".itemContent").not($(e.target).next()).slideUp()
})

///////////////////


let countDownDate = new Date("Jan 5, 2026, 15:37:25")

let x = setInterval(function () {

    let currentDate = new Date();

    var distance = countDownDate - currentDate;

    document.getElementById("dayes").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)) + " D"
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " H"
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " M"
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000) + " S"

    if (distance < 0) {
        clearInterval(x);
    }

}, 1000);


///////////////////


$("textarea").keyup(function (e) { 
    $("#countDown").text(
        100 - ($("textarea").val().length) <= 0 ? "your available character finished" : 100 - ($("textarea").val().length)
    )
});


