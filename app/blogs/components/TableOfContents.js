"use client";

import { useEffect, useState } from "react";
import { useBlogDetailLoading } from "../context/BlogDetailContext";
import SkeletonTableOfContents from "./SkeletonTableOfContents";

export default function TableOfContents() {
  const { isLoading, blogId } = useBlogDetailLoading();
  const [toc, setToc] = useState([]);
  const [tocLoading, setTocLoading] = useState(true);

  useEffect(() => {
    if (blogId == null) {
      setToc([]);
      setTocLoading(false);
      return;
    }
    setTocLoading(true);
    const fetchToc = async () => {
      try {
        const res = await fetch(`/api/blogs/toc?id=${encodeURIComponent(blogId)}`);
        const data = await res.json();
        const list = data?.data ?? (Array.isArray(data) ? data : []);
        setToc(Array.isArray(list) ? list : []);
      } catch {
        setToc([]);
      } finally {
        setTocLoading(false);
      }
    };
    fetchToc();
  }, [blogId]);

  const getTitle = (item) =>
    item?.Title ?? item?.title ?? item?.HeadingText ?? item?.heading ?? "";
  const getAnchor = (item) =>
    item?.Anchor ?? item?.anchor ?? item?.Slug ?? item?.slug ?? item?.Id ?? item?.id ?? "";

  if (isLoading) {
    return <SkeletonTableOfContents />;
  }

  return (
    <nav
      className="blog-detail-toc w-full shrink-0 lg:w-[240px] xl:w-[260px] rounded-lg border border-gray-200 bg-gray-50/80 p-4"
      aria-label="Table of contents"
    >
      <p className="text-xl font-semibold text-[#11009E] mb-3">
        Table of Contents
      </p>
      {tocLoading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      ) : toc.length === 0 ? (
        <p className="text-sm text-gray-500">No sections available.</p>
      ) : (
        <ul className="space-y-4 list-none pl-0">
          {toc.map((item, index) => {
            const title = getTitle(item);
            const anchor = getAnchor(item);
            const href = anchor ? `#${String(anchor).replace(/^#+/, "")}` : null;
            if (!title && !anchor) return null;
            return (
              <li key={index} className="rounded-md overflow-hidden">
                {href ? (
                  <a
                    href={href}
                    className="group flex items-start gap-2 py-2 -mx-3 rounded-md text-sm text-[#374151] hover:text-[#11009E] hover:bg-[#11009E]/8 border-l-2 border-transparent hover:border-[#11009E] transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-[#11009E]/50 group-hover:text-[#11009E] text-xs font-medium tabular-nums shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="line-clamp-2 group-hover:underline underline-offset-2 decoration-[#11009E]/60">
                      {title || anchor}
                    </span>
                  </a>
                ) : (
                  <span className="flex items-start gap-4 text-sm text-gray-600 cursor-pointer">
                    {title || anchor}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
