// scrollTrigger
gsap.registerPlugin(ScrollTrigger)

// 연습
// gsap.to("누구를",{ 어떻게 })
// gsap.to(".green", {
//     left: "50%",
//     xPercent: -50,
// });

// gsap.to(".green", {
//     y: 200
// }, 1); 

// from -> css가 결과값으로
// gsap.fromTo(".green",
//     { x: 200, y: -100, opacity: 0 },
//     { x: 0, duration: 1, opacity: 1 }
// );



// gsap.from(".green", {
//     opacity: 0,
//     y: -300,
//     duration: 1.5,

// }, 1);


// header
// 윈도우가 스크롤 됐을 때 없어지게 하기
// window.addEventListener(이벤트,함수);
window.addEventListener(
    "scroll",
    // thirottle 과부하 줄이기
    _.throttle(function () {
        const scrolled = window.scrollY;
        console.log(`스크롤 값 : ${scrolled}`);

        if (scrolled > 80) {
            gsap.to("#header", { yPercent: -100 });
            // to-top보이게 하기
            gsap.to("#to-top", { x: -70 });

        } else {
            gsap.to("#header", { yPercent: 0 });
            gsap.to("#to-top", { x: 0 });

        }
    }));

// intro
// var tl = gsap.timeline();
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        pin: true, // pin the trigger element while active
        start: 'top 0', // tirgger기준, viewfort기준
        end: '+=800', // 300px만큼 애니메이션 됨
        scrub: 1, //부드럽게
        markers: true
    }
});

tl.fromTo(".green",
    { x: 200, y: -100, opacity: 0 },
    { x: 0, y: 0, duration: 1, opacity: 1 }
)
    .fromTo(".orange",
        { x: -200, opacity: 0, duration: 1 },
        { x: 0, opacity: 1 }
    )
    .fromTo(".yellow",
        { x: 300, opacity: 0, duration: 1 },
        { x: 0, opacity: 1 }
    )
    .to(".box-area", { rotation: 90, duration: 1 })

    .to(".green, .yellow, .orange", {
        borderRadius: "50%", duration: 1
    })

    .fromTo(".title",
        { y: 700, opacity: 0 },
        { y: 0, scale: 2, opacity: 1, duration: 1 }
    )
    .to(".box-area", { scale: 2, duration: 3, opacity: 0 }

    );


// grow
gsap.to(".grow",
    // grow가 뷰포트에 들어오면 실행
    {
        scrollTrigger: {
            trigger: '.sec-grow',
            pin: true, // pin the trigger element while active
            start: 'top 0', // tirgger기준, viewfort기준
            end: '+=500', // 300px만큼 애니메이션 됨
            scrub: 1, //부드럽게
            // markers: true
        }
        ,
        height: "100%",
        width: "100%",
        scale: 3
    },
);





