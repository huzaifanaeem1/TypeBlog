import React from "react";

const SectionHeader = ({
  heading,
  tagline,
}: {
  heading: string;
  tagline: string;
}) => {
  return (
    <>
      <h1 className="title-font text-white text-6xl sm:text-7xl font-bold">
        {heading}
      </h1>
      {/* <p className="text-primary mt-2">{tagline}</p> */}
      <p className="text-primary mt-2">{tagline}</p>

    </>
  );
};

export default SectionHeader;