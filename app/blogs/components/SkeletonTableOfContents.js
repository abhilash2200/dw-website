"use client";

import { Skeleton } from "@mui/material";

export default function SkeletonTableOfContents() {
  return (
    <div className="w-full shrink-0 lg:w-[240px] xl:w-[260px] rounded-lg border border-gray-200 bg-gray-50/80 p-4">
      <Skeleton variant="rounded" sx={{ width: "80%", height: 16, mb: 2 }} />
      <Skeleton variant="rounded" sx={{ width: "100%", height: 12, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "90%", height: 12, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "95%", height: 12, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "70%", height: 12, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "85%", height: 12 }} />
    </div>
  );
}
