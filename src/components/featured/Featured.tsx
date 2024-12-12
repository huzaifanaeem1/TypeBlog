import React from "react";
import Link from "next/link";
import blogs from "@/data/blogsData";
import BlogCard from "../blogs/BlogCard";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const Featured = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="Featured Posts"
            tagline="Featured posts to inspire, educate, and elevate your understanding."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          {featuredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              desc={blog.description}
              slug={blog.slug}
              imgUrl={blog.imgUrl}
            />
          ))}
        </div>

        <div className="flex justify-center items-center  pt-16">
          <Link href="/blogs">
            <Button
              type={"button"}
              className="text-white bg-transparent hover:bg-secondary border-2 border-secondary shadow-lg px-8 py-3 rounded-full hover:scale-105 duration-200"
            >
              See all
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Featured;