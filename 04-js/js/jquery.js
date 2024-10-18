// $('.btn1').on('click', function () {
//     $('.box1').hide();
// });

// $('.btn2').on('click', function () {
//     $('.box2').hide();
// });

// $(".btn1").mouseenter(function () {
//     $('.box1').hide();
// });

// $(".btn1").mouseleave(function () {
//     $('.box1').show();
// });

// 클릭하면 없어지고 다시 클릭하면 생기게 해줌
// $(selector).toggle(speed,function);
// $(".btn1").click(function () {
//     $('.box1').toggle("slow");
// });

// $(".btn1").on("click", function () {
//     $('.box1').toggle("slow");
// });

// $(selector).slideToggle(speed,callback);
// $(".btn1").on("click", function () {
//     $('.box1').slideToggle(5000);
// });
// $(".btn1").on({
//     mouseenter: function () {
//         $('.box1').slideDown(3000);
//     },
//     mouseleave: function () {
//         $('.box1').slideUp(3000);
//     }

// });

//애니메이션
// $(selector).animate({params},speed,callback);
// btn3을 클릭했을 때 box3이 1초동안 왼쪽으로 100px이동
// $(".btn3").on("click", function () {
//     $(".box3").animate({ left: '100px' }, 1000);
// });

// $(".btn1").on({
//     mouseenter: function () {
//         $('.box1').stop().slideDown(3000);
//     },
//     mouseleave: function () {
//         $('.box1').stop().slideUp(3000);
//     }

// });

// 로딩되면 bg-color를 변경하기
$("body").css({
    "background-color": "lightblue",
    "font-size": "20px",
});