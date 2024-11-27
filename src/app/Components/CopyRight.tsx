import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div>
      <div className="flex w-full h-auto justify-center gap-4 sm:gap-7 text-zinc-500 items-center mt-20 sm:mt-0">
        <Link href="/">License</Link>
        <div className="w-[0.1px] h-5 bg-black"></div>
        <Link href="/">Style Guide</Link>
        <div className="w-[0.1px] h-5 bg-black"></div>
        <Link href="/">Customize</Link>
      </div>
      <div className="flex flex-col text-center sm:text-start sm:flex-row w-full justify-center text-zinc-500 my-7 gap-3">
        <p className="text-black">Copyright ©</p>
        <Link href="/">Design & Developed by <span className="text-black">Lucas Gusso</span></Link>
        <Link href='/'>Powered by <span className="text-black">Webflow</span></Link>
      </div>
    </div>
  );
};

export default CopyRight;
