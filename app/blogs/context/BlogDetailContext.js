"use client";

import { createContext, useContext, useState } from "react";

const BlogDetailContext = createContext({
  isLoading: true,
  setLoading: () => {},
  blogId: null,
  setBlogId: () => {},
});

export function useBlogDetailLoading() {
  return useContext(BlogDetailContext);
}

export function BlogDetailProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [blogId, setBlogId] = useState(null);
  return (
    <BlogDetailContext.Provider value={{ isLoading, setLoading, blogId, setBlogId }}>
      {children}
    </BlogDetailContext.Provider>
  );
}
