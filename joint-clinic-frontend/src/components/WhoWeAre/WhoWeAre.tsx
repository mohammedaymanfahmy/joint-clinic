"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./whoWeAre.css";
import Profile from "../icons/Profile";
import FeatureCard from "../molecules/featureCard";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
    const memberinfo = [
        { name: "Bryan", major: "BranchChiropractor Aqiq Branch", fill: "#d5ece3" },
        { name: "Saad Al Omar", major: "Chiropractor Aqiq Branch", fill: "#167c4f" },
        { name: "Abdallah El Mahya", major: "Physiotherapy Specialist Aqiq Branch", fill: "#112a4d" },
        { name: "Mohammed Alzahrani", major: "Physiotherapy Specialist Aqiq Branch", fill: "#ee3124" },
        { name: "Aly El Sennedy", major: "Physiotherapy Specialist Aqiq Branch", fill: "#fdb515" },
    ];

    const cards = [
        {
            title: "HOLIDAY HOURS UPDATE",
            desc: "Our clinic will be closed on Friday, Sept 25, for maintenance. Online services remain available.",
        },
        {
            title: "NEW SPECIALIST JOINS OUR TEAM",
            desc: "Welcome Dr. Hany, our new physiotherapy expert specializing in sports injury recovery.",
        },
        {
            title: "YOUR RECOVERY UPDATES",
            desc: "Learn about new features added to improve your recovery tracking.",
        },
        {
            title: "Effortless Recovery",
            desc: "Book physiotherapy sessions, access your medical reports, and follow your personalized exercise plan – all in one secure platform."
        }
    ];


    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const indicatorRef = useRef(null);
    const membersRef = useRef(null);
    const chooseUsRef = useRef(null);

    React.useEffect(() => {
        const section = sectionRef.current;
        const circle = circleRef.current;
        const title = titleRef.current;
        const paragraph = paragraphRef.current;
        const indicator = indicatorRef.current;
        const members = membersRef.current;
        const chooseUs = chooseUsRef.current;

        if (!section || !circle || !title || !paragraph || !indicator || !members || !chooseUs) return;

        //
        // ───────────────────────────────────────────────
        // MASTER TIMELINE — كل شيء يحدث بالتتابع
        // ───────────────────────────────────────────────
        //
        const master = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=20000",  // المسافة اللي تمشي فيها الأنيميشن
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
        // ظهور Members
        master
            .from(members, { opacity: 0, y: 50, duration: 1.5 });
        // اخفاء Members
        master
            .to(members, { opacity: 0, y: -50, duration: 1.5 });
        // ظهور Choose Us
        master
            .from(chooseUs, { opacity: 0, y: 50, duration: 1.5 });


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
            <section
                className="team_section absolute bottom-[120px]"
                ref={membersRef}
            >
                <h1 className="text-[60px] md:text-[100px] font-bold font-['IBM_Plex_Sans'] text-[#fff] text-center">
                    Meet Our Team
                </h1>

                <div
                    className="members translate-y-20 w-full m-auto grid grid-cols-3 md:grid-cols-5 mt-10 overflow-hidden transition-all"
                >
                    {memberinfo.map((member, index) => (
                        <div key={index} className="flex flex-col items-center mb-4">
                            <Profile fill={member.fill} className="w-[60px] mb-[10px]" />

                            <h4 className="text-[15px] md:text-[20px] w-[250px] text-[#fff] font-bold text-center">
                                {member.name}
                            </h4>

                            <p className="text-[16px] w-[160px] text-center text-[#fff]">
                                {member.major}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="chooseUs text-center absolute bottom-[30px]" ref={chooseUsRef}>
                <h2 className={`text-[40px] md:text-[64px] mb-[50px] font-bold font-['IBM_Plex_Sans'] text-[#fff]`} >
                    Why Choose Us?
                </h2>
                <div className="cards mx-auto grid w-full grid-cols-2 md:grid-cols-4">
                    {cards.map((card, index) => {
                        return <FeatureCard key={index} title={card.title} description={card.desc} />
                    })}
                </div>
            </section>
        </section>
    );
}

export default WhoWeAre;
