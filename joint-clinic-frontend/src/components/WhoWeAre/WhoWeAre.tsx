"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Profile from "@/components/icons/Profile";

import circle from "@assets/figures/circle.svg";
import circle2 from "@assets/figures/circle-2circles.svg";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const circleRef = useRef<HTMLDivElement | null>(null);
  const circle2Ref = useRef<HTMLDivElement | null>(null);

  const whoRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);

  const memberinfo = [
    { name: "Bryan", major: "BranchChiropractor Aqiq Branch", fill: "#d5ece3" },
    { name: "Saad Al Omar", major: "Chiropractor Aqiq Branch", fill: "#167c4f" },
    { name: "Abdallah El Mahya", major: "Physiotherapy Specialist Aqiq Branch", fill: "#112a4d" },
    { name: "Mohammed Alzahrani", major: "Physiotherapy Specialist Aqiq Branch", fill: "#ee3124" },
    { name: "Aly El Sennedy", major: "Physiotherapy Specialist Aqiq Branch", fill: "#fdb515" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const pinDistance = window.innerHeight * 2;
    sectionRef.current.style.minHeight = `${pinDistance}px`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${pinDistance}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Stage 1 — circle intro
    tl.from(circleRef.current, { opacity: 0, scale: 0.7 });

    // Stage 2 — move circle slightly up + show WhoWeAre
    tl.to(circleRef.current, { y: -80 }, "-=0.6");
    tl.from(whoRef.current, { opacity: 0, y: 20 }, "-=0.4");

    // Stage 3 — fade into circle2
    tl.to(circleRef.current, { opacity: 0 });
    tl.from(circle2Ref.current, { opacity: 0 }, "-=0.5");

    // Stage 4 — show team
    tl.from(teamRef.current, { opacity: 0, y: 20 }, "-=0.2");

    return () => ScrollTrigger.getAll().forEach((s) => s.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-visible">
      <div className="relative h-screen w-full flex flex-col items-center justify-center gap-12">

        {/* CIRCLE 1 */}
        <div ref={circleRef} className="flex items-center justify-center">
          <Image src={circle} alt="circle" width={200} height={200} />
        </div>

        {/* WHO WE ARE */}
        <div ref={whoRef} className="text-center opacity-0 max-w-[600px]">
          <h2 className="text-[50px] md:text-[70px] font-bold mb-4">Who We Are</h2>
          <p className="text-[18px] md:text-[20px] font-medium">
            At Joint Clinic, we believe recovery should be simple, secure, and effective.
          </p>
        </div>

        {/* CIRCLE 2 (initially hidden) */}
        <div ref={circle2Ref} className="opacity-0 flex items-center justify-center">
          <Image src={circle2} alt="circle2" width={200} height={200} />
        </div>

        {/* TEAM */}
        <div ref={teamRef} className="opacity-0 flex flex-col items-center text-center">
          <h1 className="text-[50px] md:text-[80px] font-bold">Meet Our Team</h1>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-6">
            {memberinfo.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Profile fill={m.fill} className="w-[60px] mb-2" />
                <h4 className="font-bold">{m.name}</h4>
                <p className="text-sm w-[150px]">{m.major}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
