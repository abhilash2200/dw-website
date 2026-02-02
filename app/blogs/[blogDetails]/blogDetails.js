// app/blogs/[slug]/BlogPage.js
"use client"; // This makes the component a client component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as he from "he";
import Image from "next/image";
import { externalImageLoader } from "@/app/lib/utils";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SkeletonBlog from "../SkeletonBlog";

export default function BlogDetails() {
  const slug = usePathname(); // Get the current path
  const productUrl = slug.slice(7);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${encodeURIComponent(productUrl)}?url=${encodeURIComponent(productUrl)}`);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [productUrl]);

  const rowData =
    Array.isArray(post?.data) && post?.data[0]?.Postdescription
      ? post.data[0].Postdescription
      : "";
  const decodedContent = he.decode(rowData);

  if (post?.data === null) {
    return <p>{post?.message}</p>;
  } else if (!post) {
    return <SkeletonBlog/>;
  }

  return (
    <div className="max-w-full w-[900px] block m-auto px-5 py-6">
      <div>
        <Image
          className="rounded bg-slate-200"
          src={`https://dwcrm.thenoncoders.in/${post?.data[0]?.PostHeaderImage}`}
          loader={externalImageLoader}
          width={1000}
          height={500}
          alt={post?.data[0]?.ThumbImageAlt || "digital wolf blogs"}
        />
        <div className='py-2 flex justify-between px-2 items-center'>
          <p className='text-[#565656] flex items-center gap-1'><CategoryOutlinedIcon fontSize='small'/> {post?.data[0]?.CategoryName}</p>
          <p className='text-[#565656] flex items-center gap-1'><CalendarMonthOutlinedIcon/> {post?.data[0]?.PostDate.split("T")[0].replaceAll("-", "/")}</p>
        </div>
      </div>
      <h1 className="text-[25px] lg:text-[30px] font-bold">{post?.data[0]?.PostTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: decodedContent }}></div>
    </div>
  );
}
