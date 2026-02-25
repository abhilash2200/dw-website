"use client";

import { useState, useEffect } from "react";
import { TextField, MenuItem, CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import { useMyContext } from "@/app/context/MyContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useBlogDetailLoading } from "../context/BlogDetailContext";
import SkeletonLeadForm from "./SkeletonLeadForm";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const services = [
  { id: 1, name: "Digital Marketing" },
  { id: 2, name: "SEO Services" },
  { id: 3, name: "SMO Services" },
  { id: 4, name: "Website Development" },
  { id: 5, name: "PPC Marketing" },
  { id: 6, name: "Mobile App Development" },
  { id: 7, name: "Logo & Graphic Design" },
  { id: 8, name: "Facebook Ad Services" },
  { id: 9, name: "Content Writing Services" },
  { id: 10, name: "Software Development" },
  { id: 11, name: "Bulk Message Services" },
];

const brandColor = "#5A53F4";
const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "#e5e7eb",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#d1d5db",
    },
    "&.Mui-focused fieldset": {
      borderColor: brandColor,
      borderWidth: "2px",
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#6b7280",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: brandColor,
  },
  "& .MuiInputBase-input": {
    fontSize: "0.875rem",
    padding: "10px 14px",
  },
  marginBottom: "15px",
};

export default function LeadForm() {
  const { isLoading } = useBlogDetailLoading();
  const { api } = useMyContext();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utm_source");
  const campaign = searchParams.get("campaign");

  const initialData = { name: "", phone: "", email: "", location: "", service: "" };
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openWarningSnackbar, setOpenWarningSnackbar] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentBlogsLoading, setRecentBlogsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        const list = data?.data ?? [];
        setRecentBlogs(Array.isArray(list) ? list.slice(0, 5) : []);
      } catch (err) {
        setRecentBlogs([]);
      } finally {
        setRecentBlogsLoading(false);
      }
    };
    fetchRecentBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      FullName: formData.name,
      EmailId: formData.email,
      MobileNo: formData.phone,
      Address: formData.location,
      PostalCode: "",
      Query: "",
      EnquirySource: "website",
      Remarks: "Blog sidebar lead",
      EnquiryType: formData.service,
      UTMSource: utmSource || pathname,
      AlternateNo: "",
      Education: "",
      InstituteName: "",
      Position_Applied_For: "",
      CurrentLocation: "",
      Preferred_Location: "",
      Technical_Score: "",
      DataCategory: "Service",
      InterestedService: formData.service,
    };

    if (campaign) payload.Campaign = campaign;

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.status === 0) {
        const nameParam = formData.name ? `?name=${encodeURIComponent(formData.name)}` : "";
        router.push(`/thank-you${nameParam}`);
      } else {
        setOpenWarningSnackbar(true);
        setFormMessage(result.message || "Something went wrong.");
        setIsSubmitting(false);
      }
    } catch (e) {
      setOpenWarningSnackbar(true);
      setFormMessage(e.message || "Something went wrong.");
      setIsSubmitting(false);
    }
  };

  const handleCloseWarningSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenWarningSnackbar(false);
  };

  if (isLoading) {
    return <SkeletonLeadForm />;
  }

  return (
    <div
      className="blog-detail-lead w-full shrink-0 lg:w-[280px] xl:w-[300px] rounded-lg"
      aria-label="Lead generation"
    >
      <div className="mb-5 bg-[#CBC9FF] py-2 clipPath rounded-tl-lg rounded-tr-lg">
        <p className="font-semibold text-[18px] text-center">
          Enquiry Now
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <TextField
          size="small"
          fullWidth
          id="blog-lead-name"
          name="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
          sx={inputSx}
        />
        <TextField
          size="small"
          fullWidth
          id="blog-lead-email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          required
          sx={inputSx}
        />
        <TextField
          size="small"
          fullWidth
          id="blog-lead-phone"
          name="phone"
          label="Phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          required
          inputProps={{ maxLength: 10 }}
          sx={inputSx}
        />
        <TextField
          size="small"
          fullWidth
          id="blog-lead-location"
          name="location"
          label="Location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          variant="outlined"
          sx={inputSx}
        />
        <TextField
          size="small"
          fullWidth
          id="blog-lead-service"
          name="service"
          label="Service"
          select
          value={formData.service}
          onChange={handleChange}
          variant="outlined"
          required
          sx={inputSx}
        >
          {services.map((val) => (
            <MenuItem key={val.id} value={val.name}>
              {val.name}
            </MenuItem>
          ))}
        </TextField>
        <button
          type="submit"
          className="mt-3 w-full bg-[#11009E] text-white hover:bg-[#4a43e0] active:bg-[#3d36c4] transition-all duration-200 py-3 rounded-sm text-sm font-medium shadow-sm hover:shadow disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <CircularProgress size={18} sx={{ color: "white" }} />
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Recent Blog Section */}
      <div className="mt-6 pt-5 border-t border-[#e5e7eb]">
        <p className="font-semibold text-[18px] text-[#11009E] mb-3">
          Recent Blogs
        </p>
        {recentBlogsLoading ? (
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 bg-[#e5e7eb] rounded animate-pulse" />
            ))}
          </div>
        ) : recentBlogs.length > 0 ? (
          <ul className="space-y-3">
            {recentBlogs.map((post) => (
              <li key={post.PostUrl}>
                <Link
                  href={`/blogs/${post.PostUrl}`}
                  className="group flex gap-2 text-sm text-[#374151] hover:text-[#11009E] transition-colors"
                  title={post.PostTitle}
                >
                  <CalendarMonthOutlinedIcon className="shrink-0 mt-0.5 text-[#6b7280]" fontSize="small" />
                  <span className="line-clamp-2 group-hover:underline">
                    {post.PostTitle}
                  </span>
                </Link>
                <p className="text-xs text-[#6b7280] ml-6 mt-0.5">
                  {post.PostDate?.split("T")[0]?.replaceAll("-", "/")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[#6b7280]">No recent blogs.</p>
        )}
      </div>

      <Snackbar
        open={openWarningSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseWarningSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseWarningSnackbar} severity="warning" variant="filled">
          {formMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
