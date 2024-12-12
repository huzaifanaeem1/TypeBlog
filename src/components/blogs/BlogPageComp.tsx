"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import blogs from "@/data/blogsData";
import { Blog } from "@/data/blogsData";
import { Button } from "../";

type Comment = {
  name: string;
  comment: string;
};

const BlogPageComp = ({ slug }: { slug: string }) => {
  const [blog, setBlog] = useState<Blog | undefined>(undefined);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    { name: "Mansoor", comment: "Great insight, very helpful!" },
    { name: "Humza", comment: "Great work!" },
    { name: "Muzammil", comment: "Excellent!" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, { name, comment }]);
    setName("");
    setComment("");
  };

  useEffect(() => {
    setBlog(blogs.find((blog) => blog.slug === slug));
  }, [slug]);

  return blog ? (
    <section>
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8 mt-20">
          <Image
            src={blog.imgUrl}
            alt={blog.title}
            width={600}
            height={288}
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg mb-6">{blog.description}</p>
          {/* Render HTML Content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-base leading-relaxed space-y-4"
          />
        </div>

        <div className="w-full ">
          <h3 className="text-2xl font-semibold text-primary ">Comments</h3>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex justify-center items-center flex-col gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
              <textarea
                placeholder="Enter your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
              <Button type="submit" className="border-2 border-primary">
                Submit
              </Button>
            </div>
          </form>
          <ul className="mt-8 space-y-4">
            {comments.map((c, index) => (
              <li key={index}>
                <div className="w-full border-2 border-primary p-4 rounded-lg">
                  <h4 className="text-primary font-semibold">{c.name}</h4>
                  <h5>{c.comment}</h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  ) : (
    <div>No blog found</div>
  );
};

export default BlogPageComp;