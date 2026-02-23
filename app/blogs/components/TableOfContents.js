"use client";

import { useBlogDetailLoading } from "../context/BlogDetailContext";
import SkeletonTableOfContents from "./SkeletonTableOfContents";

export default function TableOfContents() {
  const { isLoading } = useBlogDetailLoading();

  if (isLoading) {
    return <SkeletonTableOfContents />;
  }

  return (
    <nav
      className="blog-detail-toc w-full shrink-0 lg:w-[240px] xl:w-[260px]"
      aria-label="Table of contents"
    >
      <p className="text-md text-gray-500">
        Table of Contents
      </p>
      {/* TODO: Populate from blog headings (h2/h3) for anchor links */}
    </nav>
  );
}
