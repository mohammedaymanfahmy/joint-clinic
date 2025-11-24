"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function usePinSection(sectionRef: React.RefObject<HTMLElement | null>)
{
useEffect(() => {
const el = sectionRef.current;
if (!el) return;
const st = ScrollTrigger.create({
trigger: el,
start: "top top",
end: "+=350%",
pin: true,
scrub: false,
pinSpacing: true,
});
return () => {
try {
st.kill();
ScrollTrigger.getAll().forEach((s) => s.kill());
} catch {}
};
}, [sectionRef]);
}