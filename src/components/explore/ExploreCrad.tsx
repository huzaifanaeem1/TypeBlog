// import React from "react";
// import Button from "../Button";


// const ExploreCard = ({
//   category,
//   title,
//   desc,
//   btnText,
// }: {
//   category: string;
//   title: string;
//   desc: string;
//   btnText: string;
// }) => {
//   return (
//     <div className="p-4 ">
//       <div className="h-full bg-secondary/75 bg-opacity-100 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
//         <div className="h-44">
//           <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
//             {category}
//           </h2>
//           <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
//             {title}
//           </h1>
//           <p className="leading-relaxed mb-3">{desc}</p>
//         </div>
//         <Button type="button" className="border-2 border-white">
//           <a className="inline-flex justify-center items-center">
//             {btnText}
//             {/* <svg
//               className="w-4 h-4 ml-2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//               fill="none"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg> */}
//           </a>
//         </Button>
//         <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
//           <span className="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-white">
//             {/* <svg
//               className="w-4 h-4 mr-1"
//               stroke="currentColor"
//               stroke-width="2"
//               fill="none"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//               <circle cx="12" cy="12" r="3"></circle>
//             </svg> */}
//             1.2K
//           </span>
//           <span className="text-gray-200 inline-flex items-center leading-none text-sm">
//             {/* <svg
//               className="w-4 h-4 mr-1"
//               stroke="currentColor"
//               stroke-width="2"
//               fill="none"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//             </svg> */}
//             6
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreCard;


import React from "react";
import Button from "../Button";
import { FaCommentDots, FaShare } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const ExploreCard = ({
  category,
  title,
  desc,
  btnText,
}: {
  category: string;
  title: string;
  desc: string;
  btnText: string;
}) => {
  return (
    <div className="p-4 ">
      <div className="h-full bg-secondary/75 bg-opacity-100 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative transition-transform duration-300 hover:scale-105">
        <div className="h-44 pt-2">
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-2">
            {category}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{desc}</p>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="button" className="border-2 border-white py-2 px-6">
            <a className="inline-flex justify-center items-center">{btnText}
            <FaArrowCircleRight className="w-4 h-4 ml-1"/>
            </a>
          </Button>
        </div>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
  <span className="mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-white">
    <FcLike className="w-4 h-4 mr-1" />
    2.25K
  </span>
  <span className="mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-white">
    <FaCommentDots className="w-4 h-4 mr-1" />
    900
  </span>
  <span className="text-white inline-flex items-center leading-none text-sm">
    <FaShare className="w-4 h-4 mr-1" />
    15K
  </span>
</div>

      </div>
    </div>
  );
};

export default ExploreCard;
