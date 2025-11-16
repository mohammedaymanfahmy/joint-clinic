// "use client";
// import { useState } from "react";
// import SideBarLink from "@components/SideBar/SideBarLink";
// import Profile from "@components/icons/Profile";
// import Logo from "@components/icons/Logo";
// import { color } from "@/lib/constants/colors";
// import clsx from "clsx";
//
// const SideBar = () => {
//     const [isHovered, setHovered] = useState(false);
//
//     return (
//         <aside
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className={clsx(
//                 "absolute top-[127px] left-[65px] flex flex-col items-center justify-between transition-all duration-500 ease-in-out",
//                 "px-[32px] py-[31px] gap-[10px] h-[75vh] rounded-[48px] bg-white shadow-[10px_10px_11.2px_3px_rgba(0,0,0,0.25)]",
//                 isHovered ? "w-[260px]" : "w-[100px]"
//             )}
//         >
//             {/* Logo */}
//             <div
//                 className={clsx(
//                     "transition-all duration-500 ease-in-out",
//                     isHovered
//                         ? "self-end pr-[8px] pt-[4px] w-[91px]"
//                         : "self-center w-[80px]"
//                 )}
//             >
//                 <Logo
//                     fill={color.accent}
//                     style={{
//                         width: isHovered ? "91px" : "80px",
//                         transition: "width 0.5s ease-in-out",
//                     }}
//                 />
//             </div>
//
//             {/* Links */}
//             <div
//                 className={clsx(
//                     "flex flex-col items-start justify-center w-full gap-[40px] h-[75%] transition-all duration-500 ease-in-out",
//                     isHovered ? "items-start pl-[10px]" : "items-start"
//                 )}
//             >
//                 {Array(5)
//                     .fill(null)
//                     .map((_, i) => (
//                         <SideBarLink
//                             key={i}
//                             linkHref={"/"}
//                             Icon={Profile}
//                             title={"Profile"}
//                             expanded={isHovered}
//                         />
//                     ))}
//             </div>
//         </aside>
//     );
// };
//
// export default SideBar;

"use client";
import { useState } from "react";
import SideBarLink from "@components/SideBar/SideBarLink";
import Profile from "@components/icons/Profile";
import Logo from "@components/icons/Logo";
import { color } from "@/lib/constants/colors";
import clsx from "clsx";

const SideBar = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <aside
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx(
                // Base layout
                "absolute flex flex-col items-center justify-between transition-all duration-500 ease-in-out",
                // Position (responsive)
                "top-[100px] sm:top-[115px] md:top-[127px] left-[35px] sm:left-[50px] md:left-[65px]",
                // Sizing and spacing (responsive)
                "px-[20px] sm:px-[26px] md:px-[32px] py-[20px] sm:py-[26px] md:py-[31px] gap-[10px]",
                // Rounded corners and background (same look)
                "h-[70vh] sm:h-[73vh] md:h-[75vh] rounded-[36px] sm:rounded-[42px] md:rounded-[48px] bg-white shadow-[10px_10px_11.2px_3px_rgba(0,0,0,0.25)]",
                // Width animation (unchanged logic)
                isHovered ? "w-[220px] sm:w-[240px] md:w-[260px]" : "w-[80px] sm:w-[90px] md:w-[100px]"
            )}
        >
            {/* Logo */}
            <div
                className={clsx(
                    "transition-all duration-500 ease-in-out",
                    isHovered
                        ? "self-end pr-[4px] sm:pr-[6px] md:pr-[8px] pt-[4px]"
                        : "self-center"
                )}
            >
                <Logo
                    fill={color.accent}
                    style={{
                        width: isHovered
                            ? "80px"
                            : "70px", // slightly smaller base
                        transition: "width 0.4s ease-in-out",
                    }}
                />
            </div>

            {/* Links */}
            <div
                className={clsx(
                    "flex flex-col items-start justify-center w-full transition-all duration-500 ease-in-out",
                    " sm:gap-[24px] md:gap-[28px] xl:gap-[32px] 2xl:gap-[40px] h-[70%] sm:h-[73%] md:h-[75%]",
                    isHovered ? "items-start pl-[8px] sm:pl-[9px] md:pl-[10px]" : ""
                )}
            >
                {Array(7)
                    .fill(null)
                    .map((_, i) => (
                        <SideBarLink
                            key={i}
                            linkHref={"/"}
                            Icon={Profile}
                            title={"Profile"}
                            expanded={isHovered}
                        />
                    ))}
            </div>
        </aside>
    );
};

export default SideBar;
