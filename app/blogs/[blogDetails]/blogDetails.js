"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import * as he from "he";
import Image from "next/image";
import { externalImageLoader } from "@/app/lib/utils";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SkeletonBlog from "../SkeletonBlog";
import { useBlogDetailLoading } from "../context/BlogDetailContext";

export default function BlogDetails({ slug: slugProp, isPreview = false }) {
  const pathname = usePathname();
  const slug = (slugProp ?? pathname.replace(/^\/blogs\/preview\/?/, '').replace(/^\/blogs\/?/, '')) || '';
  const { setLoading, setBlogId } = useBlogDetailLoading();

  const [post, setPost] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    const fetchPost = async () => {
      try {
        const previewParam = isPreview ? '&preview=true' : '';
        const res = await fetch(
          `/api/blogs/${encodeURIComponent(slug)}?url=${encodeURIComponent(slug)}${previewParam}`
        );
        const data = await res.json();
        setPost(data);
        const id = data?.data?.[0]?.PostId ?? data?.data?.[0]?.Id ?? null;
        setBlogId(id != null ? Number(id) : null);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, isPreview, setLoading, setBlogId]);

  const rowData =
    Array.isArray(post?.data) && post?.data[0]?.Postdescription
      ? post.data[0].Postdescription
      : "";
  const decodedContent = he.decode(rowData);

  // Assign ids to headings so TOC anchors (#1, #2, ...) match; preserve existing ids
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let nextId = 1;
    headings.forEach((el) => {
      if (!el.id) {
        el.id = String(nextId);
        nextId += 1;
      }
    });
  }, [decodedContent]);

  if (!post) {
    return <SkeletonBlog />;
  }
  const hasData = Array.isArray(post?.data) && post.data.length > 0;
  if (!hasData) {
    return <p>{post?.message || 'Post not found.'}</p>;
  }

  return (
    <article className="blog-detail-content">
      <div>
        <Image
          className="rounded bg-slate-200"
          src={`https://dwcrm.thenoncoders.in/${post?.data[0]?.PostHeaderImage}`}
          loader={externalImageLoader}
          width={1000}
          height={500}
          alt={post?.data[0]?.ThumbImageAlt || "digital wolf blogs"}
        />
        <div className="py-2 flex justify-between px-2 items-center">
          <p className="text-[#565656] flex items-center gap-1">
            <CategoryOutlinedIcon fontSize="small" /> {post?.data[0]?.CategoryName}
          </p>
          <p className="text-[#565656] flex items-center gap-1">
            <CalendarMonthOutlinedIcon />{" "}
            {post?.data[0]?.PostDate?.split("T")[0]?.replaceAll("-", "/") ?? ""}
          </p>
        </div>
      </div>
      <h1 className="text-[25px] lg:text-[30px] font-bold">{post?.data[0]?.PostTitle}</h1>
      <div
        ref={contentRef}
        className="blog-detail-body [&_h1]:scroll-mt-20 [&_h2]:scroll-mt-20 [&_h3]:scroll-mt-20 [&_h4]:scroll-mt-20 [&_h5]:scroll-mt-20 [&_h6]:scroll-mt-20"
        dangerouslySetInnerHTML={{ __html: decodedContent }}
      />
    </article>
  );
}
