import { IBM_Plex_Sans } from "next/font/google";
import FeatureCard from "@/components/molecules/featureCard";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import Hero from "@/components/Hero/Hero";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
// import Pagination from "@/pages/pagination";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="con bg-[#9fd5e2]">
      <Hero font={ibmPlex} />
      <WhoWeAre />
      <MeetOurTeam />
      <ChooseUs />
      {/* {<Pagination total={5} />} */}
    </div>
  );
}
