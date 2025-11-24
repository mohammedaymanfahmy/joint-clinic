"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./whoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const indicatorRef = useRef(null);

    React.useEffect(() => {
    const section = sectionRef.current;
    const circle = circleRef.current;
    const title = titleRef.current;
    const paragraph = paragraphRef.current;
    const indicator = indicatorRef.current;

    if (!section || !circle || !title || !paragraph || !indicator) return;

    //
    // ───────────────────────────────────────────────
    // MASTER TIMELINE — كل شيء يحدث بالتتابع
    // ───────────────────────────────────────────────
    //
    const master = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2000",  // المسافة اللي تمشي فيها الأنيميشن
            scrub: true,
            pin: true,
            // markers: true,
        },
    });


    //
    // ─────── Timeline 1 (الدائرة تطلع + الكلام يظهر) ───────
    //
    master
        // حركة الدائرة
        .to(circle, { y: -150, rotate: 180 })

        // ظهور العنوان
        .from(title, { opacity: 0, y: 40 })

        // ظهور الفقرة
        .from(paragraph, { opacity: 0, y: 50 });


    //
    // ─────── Timeline 2 (الدائرة + الكلام يختفوا + indicator يظهر) ───────
    //
    master
        // إخفاء الدائرة
        .to(circle, { opacity: 0, scale: 0.6 })

        // إخفاء العنوان + الفقرة
        .to([title, paragraph], { opacity: 0, y: -40 })

        // ظهور indicator
        .from(indicator, {
            opacity: 0,
            scale: 0.4,
            y: 50,
            ease: "power2.out",
        });

}, []);


    return (
        <section ref={sectionRef} className="flex flex-col relative justify-center h-screen items-center">

            <section
                id="circle"
                ref={circleRef}
                className="bg-gradient-to-b absolute top-50% translate-y-[-50%] from-[#0D294D] to-[#1E5598]"
            ></section>
            <div ref={indicatorRef} className="indicator">
                <div className="dot left"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="dot right"></div>
                <div className="red-line"></div>
            </div>

            <h2
                ref={titleRef}
                className="text-[64px] mb-[50px] font-bold text-center text-[#fff]"
            >
                Who We Are
            </h2>

            <p
                ref={paragraphRef}
                className="text-[20px] text-center w-[73%] font-medium text-[#fff]"
            >
                At Joint Clinic, we believe recovery should be simple, secure, and
                effective. Our team of physiotherapists and specialists combine medical
                expertise with digital innovation to bring you a seamless care
                experience. From online booking and secure reports to guided exercises,
                we make every step of your recovery journey easier.
            </p>
            
        </section>
    );
}

export default WhoWeAre;
