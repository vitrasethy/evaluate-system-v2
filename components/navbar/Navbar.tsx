"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hamburger } from "./hamburger";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-[#014164] z-50">
      <div>
        <div className="Desktop text-white h-20 justify-between items-center hidden md:flex mx-5">
          <div>
            <Link href="/">
              <Image src="/logoFE.webp" alt="" width={50} height={50} />
            </Link>
          </div>
          <div className="flex justify-around w-2/2 focus:outline-none focus:ring uppercase">
          <Link
              className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring"
              href={"/award"}
            >
             Result
            </Link>
            <Link
              className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring"
              href={"/events/e-day/1/evaluate"}
            >
             My Evaluation
            </Link>
            <Link
              className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring"
              href={"/logout"}
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="Mobile text-white flex h-20 items-center ml-5 justify-between md:hidden transition duration-200 z-50">
          <Link href="/">
            <Image src="/logoFE.webp" alt="" width={50} height={50} />
          </Link>
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
