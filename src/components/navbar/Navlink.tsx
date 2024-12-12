
"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

const NavLink = ({
  children,
  slug,
  onclick,
}: {
  children: ReactNode;
  slug: string;
  onclick?: () => void;
}) => {
  return (
    <Link
      href={slug}
      className="text-lg font-medium ring-secondary hover:text-primary hover:underline rounded-lg duration-300 px-3 py-1"
      onClick={onclick}
    >
      {children}
    </Link>
  );
};

export default NavLink;