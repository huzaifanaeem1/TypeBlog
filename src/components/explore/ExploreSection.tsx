// import React from "react";
// import ExploreCard from "./ExploreCrad";
// import SectionHeader from "../SectionHeader";


// const ExploreSection = () => {
//   return (
//     <section className="text-white body-font bg-black/75">
//       <div className="container px-5 py-20 mx-auto ">
//         <div className="items-center text-center pt-10 pb-20">
//           <SectionHeader
//             heading="Explore"
//             tagline="Transform Your Development Process: Discover Core Features and Tools That Will Elevate Your Skills!"
//           />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           <ExploreCard
//             category="FUNDAMENTALS"
//             title="TypeScript Basics"
//             desc="Discover the foundational concepts of TypeScript, including its syntax, benefits, and how it enhances JavaScript by adding type safety and modern features."
//             btnText="Start with TypeScript"
//           />
//           <ExploreCard
//             category="VARIABLES"
//             title="Variables and Constants"
//             desc="Learn how to declare variables and constants using let, const, and var, with type annotations for better code quality."
//             btnText="Master Variables"
//           />
//           <ExploreCard
//             category="FUNCTIONS"
//             title="Functions in TypeScript"
//             desc="Explore how to define functions with typed parameters and return values, and understand how TypeScript helps in enforcing proper function signatures."
//             btnText="Explore Functions"
//           />
//           <ExploreCard
//             category="DATA STRUCTURES IN TS"
//             title="Arrays and Tuples"
//             desc=" Understand how to work with arrays and tuples in TypeScript, and how to define their types for precise and error-free data handling."
//             btnText="Learn Arrays & Tuples"
//           />
//           <ExploreCard
//             category="TYPE FEATURES"
//             title="Union and Intersection Types"
//             desc="Dive into advanced types like union and intersection, which allow for more flexible and precise data handling by combining multiple types."
//             btnText="Explore Union & Intersection"
//           />
//           <ExploreCard
//             category="(OOP)"
//             title="Classes and Objects"
//             desc=" Learn the principles of object-oriented programming by working with classes and objects in TypeScript, including inheritance and encapsulation."
//             btnText="Understand OOP Concepts"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreSection



import React from "react";

import categories from "@/data/categoriesData";
import SectionHeader from "../SectionHeader";
import ExploreCrad from "./ExploreCrad";

const ExploreSection = () => {
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="Explore"
            tagline="Dive into a world of knowledge and innovation with our expertly crafted articles!"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <ExploreCrad
              key={category.id}
              category={category.name}
              title={category.title}
              desc={category.description}
              btnText={category.btnText}
              btnLink={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;