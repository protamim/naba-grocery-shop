import { blog1 } from "@/assets/home";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar } from "react-icons/bs";
import { MdComment } from "react-icons/md";

const BlogCard = ({ image, title, desc, category, pubDate, numOfComment }) => {
  return (
    <>
      <div className="pl-4 flex-grow-0 flex-shrink-0 basis-full sm:basis-[calc(100%/2)] md:basis-[calc(100%/3)]">
        {/* Blog Card */}
        <div className="bg-white p-4 rounded-md group overflow-hidden flex flex-col gap-y-5 justify-between">
          {/* Card Header */}
          <div className="rounded-md overflow-hidden">
            <Image
              src={image}
              width={520}
              height={330}
              alt="naba blog"
              className="rounded-md w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          {/* Card Body */}
          <div className="flex flex-col gap-y-5">
            {/* category */}
            <Link
              href="#"
              className="bg-slate-100 py-1 px-3 capitalize rounded-full text-sm text-green-800 transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white max-w-max"
            >
              <button>{category}</button>
            </Link>
            {/* Blog Title */}
            <h4 className="text-2xl text-black font-medium">{title}</h4>
            {/* Short Description */}
            <p className="text-stone-700 text-base">{desc}</p>
            {/* Info */}
            <div className="flex items-center justify-between">
              {/* Publish date */}
              <div className="flex items-center gap-x-2 justify-between text-stone-700">
                <span>
                  <BsCalendar />
                </span>
                <h5>{pubDate}</h5>
              </div>
              {/* Number of comments */}
              <div className="flex gap-x-2 justify-between items-center text-stone-700">
                <span>
                  <MdComment />
                </span>
                <Link
                  href="#"
                  className="transition-all duration-300 ease-in-out hover:text-green-700"
                >
                  {" "}
                  {numOfComment} Comment
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Blog card end */}
      </div>
    </>
  );
};

export default BlogCard;
