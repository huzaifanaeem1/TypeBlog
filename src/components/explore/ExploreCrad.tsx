// import React from "react";
// import Button from "../Button";
// import { FaCommentDots, FaShare } from "react-icons/fa6";
// import { FaArrowCircleRight } from "react-icons/fa";
// import { FcLike } from "react-icons/fc";

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
//     <div className="p-4">
//       <div className="h-full bg-secondary/75 bg-opacity-100 px-6 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 rounded-2xl overflow-hidden text-center relative">
//         <div className="h-44 pt-2">
//           <h2 className="tracking-widest text-xs sm:text-sm title-font font-medium text-white mb-2">
//             {category}
//           </h2>
//           <h1 className="title-font text-lg sm:text-2xl font-medium text-white mb-3">
//             {title}
//           </h1>
//           <p className="leading-relaxed text-sm sm:text-base mb-3">{desc}</p>
//         </div>
//         <div className="flex justify-center mt-4 sm:mt-6">
//           <Button type="button" className="border-2 border-white py-2 px-4 sm:px-6 transition-transform duration-300 hover:scale-105">
//             <a className="inline-flex justify-center items-center">
//               {btnText}
//               <FaArrowCircleRight className="w-4 h-4 ml-1" />
//             </a>
//           </Button>
//         </div>
//         <div className="text-center mt-4 sm:mt-6 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
//           <span className="mr-2 sm:mr-3 inline-flex items-center leading-none text-xs sm:text-sm pr-2 sm:pr-3 py-1 border-r-2 border-white">
//             <FcLike className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
//             2.25K
//           </span>
//           <span className="mr-2 sm:mr-3 inline-flex items-center leading-none text-xs sm:text-sm pr-2 sm:pr-3 py-1 border-r-2 border-white">
//             <FaCommentDots className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
//             900
//           </span>
//           <span className="text-white inline-flex items-center leading-none text-xs sm:text-sm">
//             <FaShare className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
//             15K
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreCard;



import React from "react";

import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaCommentDots,FaShare } from "react-icons/fa";
import Link from "next/link";
import Button from "../Button";
import { FcLike } from "react-icons/fc";

const ExploreCard = ({
  category,
  title,
  desc,
  btnText,
  btnLink,
}: {
  category: string;
  title: string;
  desc: string;
  btnText: string;
  btnLink: string;
}) => {
  return (
    <div className="p-4  ">
      <div className="h-full border-2 border-primary bg-opacity-90 ring-primary  px-8 pt-16 pb-24 rounded-3xl overflow-hidden text-center relative">
        <div className="h-[190px]  md:h-40">
          <h2 className=" text-xs title-font font-medium text-txtcolor mb-1">
            {category}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-semibold text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3 text-primary">{desc}</p>
        </div>
        <div className="flex justify-center mt-4 sm:mt-6">
        <Button type="button" className="border-2 border-white py-2 px-4 sm:px-6 transition-transform duration-300 hover:scale-105">
          <Link
            href={`/categories/${btnLink}`}
            className=" inline-flex items-center"
          >
            {btnText}
            <HiOutlineArrowSmRight className="text-gray-300 w-5 h-5 mr-1" />
          </Link>
        </Button>
        </div>
        <div className="text-center mt-4 sm:mt-6 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
           <span className="mr-2 sm:mr-3 inline-flex items-center leading-none text-xs sm:text-sm pr-2 sm:pr-3 py-1 border-r-2 border-white">
             <FcLike className="text-gray-300 w-3 sm:w-4 h-3 sm:h-4 mr-1" />
             2.25K
           </span>
           <span className="mr-2 sm:mr-3 inline-flex items-center leading-none text-xs sm:text-sm pr-2 sm:pr-3 py-1 border-r-2 border-white">
             <FaCommentDots className="text-gray-300 w-3 sm:w-4 h-3 sm:h-4 mr-1" />
             900
           </span>
          <span className="text-gray-300 inline-flex items-center leading-none text-xs sm:text-sm">
             <FaShare className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
             15K
           </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;