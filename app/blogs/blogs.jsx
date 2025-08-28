"use client";
import { useEffect, useState } from "react";
import SubHeading from "../common/sub-heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { externalImageLoader } from "../lib/utils";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SkeletonBlogList from "./SkeletonBlogList";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      const myHeaders = new Headers();
      const username = "DwCrmApiUser";
      const password = "DW_CRMApi@32145@#";
      const token = process.env.API_TOKEN_KEY;
      const credentials = btoa(`${username}:${password}`);
      myHeaders.append("KeyToken", `${token}`);
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Basic ${credentials}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const res = await fetch(
        "https://dwapi.thenoncoders.in/api/v1/get_bloglist",
        requestOptions
      );
      const data = await res.json();
      setPosts(data);
    };

    fetchBlogList();
  }, []);

  if (!posts?.data) {
    return <SkeletonBlogList />;
  }

  return (
    <div className="container mx-auto px-5">
      <SubHeading text="Blogs" />
      <div>
        <div className="flex flex-wrap gap-y-5">
          {posts?.data?.map((post) => (
            <div key={post.PostUrl} className="w-[100%] lg:w-[33.33%] px-3">
              <div className="border-[1px] border-[#e1e1e1] shadow-lg rounded-lg p-2 pb-4">
                <div className="overflow-hidden">
                  <Link href={`/blogs/${post.PostUrl}`}>
                    <Image
                      className="w-full hover:scale-110 transition-all bg-slate-200 rounded-lg"
                      loader={externalImageLoader}
                      src={`https://dwcrm.thenoncoders.in/${post.PostImageThumb}`}
                      alt={post.ThumbImageAlt|| "digital wolf blogs"}
                      width={800}
                      height={500}
                    />
                  </Link>
                </div>
                <div>
                  <div className="py-2 flex justify-between px-2 items-center">
                    <p className="text-[#565656] flex items-center gap-1">
                      <CategoryOutlinedIcon fontSize="small" />
                      {post.CategoryName}
                    </p>
                    <p className="text-[#565656] flex items-center gap-1">
                      <CalendarMonthOutlinedIcon /> {post.PostDate.split("T")[0].replaceAll("-", "/")}
                    </p>
                  </div>
                  <div>
                    <Link
                      className="text-[22px] font-bold line-clamp-2"
                      href={`/blogs/${post.PostUrl}`}
                      title={post.PostTitle}
                    >
                      {post.PostTitle}
                    </Link>
                    <p className="py-1 line-clamp-2 h-[3.5rem] mb-3">
                      {post.PostShortDescription}
                    </p>
                  </div>
                  <div>
                    <Link
                      className="flex justify-evenly w-[180px] px-1 py-1.5 text-[18px] text-[#FFF] font-semibold bg-[#11009E] rounded-full hover:bg-[#3f31bb] transition-all"
                      href={`/blogs/${post.PostUrl}`}
                    >
                      Read More <ArrowRightCircleIcon width={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
