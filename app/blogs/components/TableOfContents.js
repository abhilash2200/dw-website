"use client";

import { useCallback, useEffect, useState } from "react";
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

  const scrollToSection = useCallback((anchor, index) => {
    const id = String(anchor || "").replace(/^#+/, "");
    let el = id ? document.getElementById(id) : null;
    if (!el) {
      const container = document.querySelector(".blog-detail-body");
      const headings = container ? container.querySelectorAll("h2") : [];
      el = headings[typeof index === "number" ? index : 0];
    }
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (id) window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handleListClick = useCallback(
    (e) => {
      const button = e.target.closest("button[data-toc-anchor]");
      if (button) {
        e.preventDefault();
        e.stopPropagation();
        const anchor = button.getAttribute("data-toc-anchor");
        const index = parseInt(button.getAttribute("data-toc-index"), 10);
        scrollToSection(anchor, isNaN(index) ? 0 : index);
      }
    },
    [scrollToSection]
  );

  if (isLoading) {
    return <SkeletonTableOfContents />;
  }

  return (
    <nav
      className="blog-detail-toc w-full shrink-0 lg:w-[240px] xl:w-[260px]"
      style={{ position: "relative", zIndex: 999 }}
      aria-label="Table of contents"
    >
      <p className="text-xl font-medium text-[#11009E] mb-2">
        Table of Contents
      </p>
      {tocLoading ? (
        <div className="space-y-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      ) : toc.length === 0 ? (
        <p className="text-sm text-gray-500">No sections available.</p>
      ) : (
        <ul
          className="space-y-1 list-none pl-0 cursor-pointer"
          onClick={handleListClick}
          role="list"
        >
          {toc.map((item, index) => {
            const title = getTitle(item);
            const anchorFromApi = getAnchor(item);
            const anchor = anchorFromApi || String(index + 1);
            if (!title && !anchorFromApi) return null;
            return (
              <li key={index}>
                <button
                  type="button"
                  data-toc-anchor={anchor}
                  data-toc-index={index}
                  className="w-full text-left py-1 text-sm text-gray-600 hover:text-[#11009E] hover:underline cursor-pointer bg-transparent border-0"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(anchor, index);
                  }}
                >
                  {title || anchor}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
