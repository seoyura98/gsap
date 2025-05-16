$(function () {

    /*header*/
    Splitting();

    /*visual*/
    gsap.timeline({
        scrollTrigger: {
            trigger: "#visual",
            start: "top top",
            end: "10% top",
            scrub: 2,
            pin: true,
            // markers: true,
        }
    })
        .to("#visual img", {
            scale: 0.5,
            opacity: 0.3,
            ease: "none",
            duration: 10
        }, 5)

        .to("#visual h2", {
            opacity: 1,
            ease: "none",
            duration: 10
        }, 5)


    /*con*/
    gsap.fromTo(
        "#con .inner",
        { y: 400 },
        {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#con .inner",
                start: "top 80%",
                end: "20% 30%",
                scrub: 2,
                // markers: true,
            },
        }
    );

    /*con01*/
    let list = gsap.utils.toArray("#con01 .list li");
    let listA = gsap.utils.toArray("#con01 .list li.a");
    let listB = gsap.utils.toArray("#con01 .list li.b");
    let listC = gsap.utils.toArray("#con01 .list li.c");
    gsap.to(list, {
        scrollTrigger: {
            trigger: "#con01",
            pin: true,
            scrub: 2,
            start: 'center center',
            end: '100% 0%',
            // markers: true
        },
        xPercent: -500,
        ease: "none",
    })

    gsap.to(listA, {
        rotation: 20,
        scrollTrigger: {
            trigger: "#con01",
            scrub: 2,
            end: "100%"
            // markers: true,
        },
    })
    gsap.to(listB, {
        rotation: -20,
        scrollTrigger: {
            trigger: "#con01",
            scrub: 2,
            end: "100%"
            // markers: true,
        },
    })
    gsap.to(listC, {
        rotation: 20,
        scrollTrigger: {
            trigger: "#con01",
            scrub: 2,
            end: "100%"
            // markers: true,
        },
    })


    /*con02 */
    gsap.timeline({
        scrollTrigger: {
            trigger: "#con02",
            start: "0% 100%",
            end: "0% 30%",
            scrub: 2,
            // markers: true,
        }
    })
        .fromTo(
            "#con02 .seventeen", { x: "-100%" }, { x: "0%", ease: "none", duration: 5 }
        )
        .fromTo(
            "#con02 .member", { x: "100%" }, { x: "0%", ease: "none", duration: 5 }
        )

    gsap.timeline({
        scrollTrigger: {
            trigger: "#con02 .wrap",
            start: "0% 100%",
            end: "0% 100%",
            scrub: 2,
            // markers: true,

        }
    })
        .to("body", { backgroundColor: "#f7cac9", color: "#222", ease: "none", duration: 5 }, 0)
        .to("#con02 .title", { position: "fixed", left: 0, top: 0, width: "100%", ease: "none", duration: 5 }, 0)

    gsap.timeline({
        scrollTrigger: {
            trigger: "#con02 .wrap",
            start: "100% 50%",
            end: "100% 0%",
            scrub: 2,
            // markers: true,
        }
    })
        .to(
            "#con02 .seventeen", { x: "-100%", ease: "none", duration: 5 }
        )
        .to(
            "#con02 .member", { x: "100%", ease: "none", duration: 5 }
        )

});