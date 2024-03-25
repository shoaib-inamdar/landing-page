// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
//     // lerp:.02
// });

var tl=gsap.timeline()
tl.to(".yellow",{
    top:"-100%",
    duration:.5,
    delay:.4,
    ease:"expo.out"
})
tl.to(".loader video",{
    top:"-100%",
    duration:.5,
    delay:1.5,
    ease:"expo.out"
})
tl.to(".loader",{
    top:"-100%",
    duration:.5,
    // delay:.5,
    ease:"expo.out"
})
tl.to(".loader",{
    display:'none',
    opacity:0
})

var elems=document.querySelectorAll(".elem")
var page2=document.querySelector(".page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",()=>{
        var bgimg=ele.getAttribute("data-img")
        page2.style.backgroundImage=`url(${bgimg})`
    })
    ele.addEventListener("mouseout",()=>{
        var bgimg=ele.getAttribute("data-img")
        page2.style.backgroundImage='';
    })
})