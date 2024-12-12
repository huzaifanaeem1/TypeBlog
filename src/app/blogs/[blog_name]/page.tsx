import { BlogPageComp } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ blog_name: string }>;
}) {
  const slug = (await params).blog_name;
  return (
    <>
      <BlogPageComp slug={slug} />
    </>
  );
}