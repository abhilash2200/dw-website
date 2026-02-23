"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as he from "he";
import Image from "next/image";
import { externalImageLoader } from "@/app/lib/utils";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SkeletonBlog from "../SkeletonBlog";

export default function BlogDetails({ slug: slugProp, isPreview = false }) {
  const pathname = usePathname();
  const slug = (slugProp ?? pathname.replace(/^\/blogs\/preview\/?/, '').replace(/^\/blogs\/?/, '')) || '';

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const previewParam = isPreview ? '&preview=true' : '';
        const res = await fetch(
          `/api/blogs/${encodeURIComponent(slug)}?url=${encodeURIComponent(slug)}${previewParam}`
        );
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [slug, isPreview]);

  const rowData =
    Array.isArray(post?.data) && post?.data[0]?.Postdescription
      ? post.data[0].Postdescription
      : "";
  const decodedContent = he.decode(rowData);

  if (!post) {
    return <SkeletonBlog />;
  }
  const hasData = Array.isArray(post?.data) && post.data.length > 0;
  if (!hasData) {
    return <p>{post?.message || 'Post not found.'}</p>;
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
          <p className='text-[#565656] flex items-center gap-1'><CalendarMonthOutlinedIcon/> {post?.data[0]?.PostDate?.split("T")[0]?.replaceAll("-", "/") ?? ''}</p>
        </div>
      </div>
      <h1 className="text-[25px] lg:text-[30px] font-bold">{post?.data[0]?.PostTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: decodedContent }}></div>
    </div>
  );
}
