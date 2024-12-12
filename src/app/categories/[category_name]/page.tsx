import CategoryComp from "@/components/categories/CategoryComp";


export default async function Page({
  params,
}: {
  params: Promise<{ category_name: string }>;
}) {
  const slug = (await params).category_name;
  return (
    <>
      <CategoryComp slug={slug} />
    </>
  );
}