// components/Marquee.tsx

import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function MarqueeComp() {
  return (
    <div className="overflow-hidden p-0.5 bg-[#9CCC3C] text-lg md:text-[2.5vmin]  whitespace-nowrap">
      <Marquee>
        Inclean Technologies: Your Trusted Partner in Custom HVAC Solutions,
        Expertly Crafted for Industrial & Commercial Needs.{" "}
        <Link href={"/contact"}>
          {" "}
          <span className=" font-bold border-b-1 ml-5 hover:text-blue-700 cursor-pointer">
            Contact Us Today!
          </span>
        </Link>
      </Marquee>
    </div>
  );
}
