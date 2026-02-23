"use client";

import { Skeleton } from "@mui/material";

export default function SkeletonLeadForm() {
  return (
    <div className="w-full shrink-0 lg:w-[280px] xl:w-[300px] rounded-lg border border-gray-200 bg-gray-50/80 p-4">
      <Skeleton variant="rounded" sx={{ width: "70%", height: 16, mb: 2 }} />
      <Skeleton variant="rounded" sx={{ width: "100%", height: 40, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "100%", height: 40, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "100%", height: 40, mb: 1.5 }} />
      <Skeleton variant="rounded" sx={{ width: "100%", height: 44, mt: 1 }} />
    </div>
  );
}
