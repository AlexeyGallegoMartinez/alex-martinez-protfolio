"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavButtons({ lng }) {
  const router = useRouter();

  const handleLanguageChange = (newLang) => {
    router.push(`/${newLang}`); // Redirect to the new language route
  };
  return (
    <div className="flex gap-3">
      {" "}
      <Link
        className="relative z-10 my-5 font-medium text-center border border-[#CC5500] 
          text-white w-[15rem] rounded-full hover:bg-[#CC5500] px-3 lg:px-5 py-2
          transition duration-300 ease-in-out inline-block"
        href={`/${lng}/about`}
      >
        About me
      </Link>
      <Link
        className="relative z-10 my-5 font-medium text-center border border-[#CC5500] 
          text-white w-[15rem] rounded-full hover:bg-[#CC5500] px-3 lg:px-5 py-2
          transition duration-300 ease-in-out inline-block"
        href={`/${lng}/work`}
      >
        My Work
      </Link>
      <Link
        className="relative z-10 my-5 font-medium text-center border border-[#CC5500] 
          text-white w-[15rem] rounded-full hover:bg-[#CC5500] px-3 lg:px-5 py-2
          transition duration-300 ease-in-out inline-block"
        href={`/${lng}/blog`}
      >
        Blog Posts
      </Link>
    </div>
  );
}
