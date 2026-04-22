const scroll = new LocomotiveScroll({
    el: document.querySelector('#body-section'),
    smooth: true
});

function moveWithPointer()
{
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

moveWithPointer();

// function shrinkCircle()
// {
//     var xprev = 0;
//     var yprev = 0;
//     var xscale = 1;
//     var yscale = 1;
//     var timout;

//     window.addEventListener("mousemove",function(dets){
//         clearTimeout(timout);

//         //it gives check nearest val and print min or max else print val
//         xscale = gsap.utils.clamp(.1,1.5,dets.clientX - xprev);
//         yscale = gsap.utils.clamp(.1,1.5,dets.clientY - yprev);

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         moveWithPointer(xscale,yscale);
//         timout = setTimeout(function(){
//             document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
//         },100);
//     });

// }
// shrinkCircle();

// function moveWithPointer(xscale,yscale)
// {
//     window.addEventListener("mousemove",function(dets){
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}. ${yscale})`;
//     })
// }

// moveWithPointer();