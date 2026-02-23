"use client";

import { createContext, useContext, useState } from "react";

const BlogDetailContext = createContext({ isLoading: true, setLoading: () => {} });

export function useBlogDetailLoading() {
  return useContext(BlogDetailContext);
}

export function BlogDetailProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <BlogDetailContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </BlogDetailContext.Provider>
  );
}
