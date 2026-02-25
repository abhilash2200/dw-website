"use client";

import TableOfContents from "./components/TableOfContents";
import LeadForm from "./components/LeadForm";

const HEADER_OFFSET = "5rem"; // 72px – align below sticky header

export default function BlogDetailLayout({ children }) {
  return (
    <div className="blog-detail-layout">
      <div className="mx-auto container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr_300px] xl:gap-10">
          {/* Left sidebar: Table of Contents – sticky below header */}
          <aside
            className="order-1 relative z-10 lg:sticky lg:self-start"
            style={{ top: HEADER_OFFSET }}
            aria-label="Table of contents"
          >
            <TableOfContents />
          </aside>

          {/* Main: Blog content – normal document flow */}
          <main className="order-2 min-w-0">
            {children}
          </main>

          {/* Right sidebar: Lead form – sticky below header */}
          <aside
            className="order-3 lg:sticky lg:self-start"
            style={{ top: HEADER_OFFSET }}
            aria-label="Lead generation"
          >
            <LeadForm />
          </aside>
        </div>
      </div>
    </div>
  );
}
