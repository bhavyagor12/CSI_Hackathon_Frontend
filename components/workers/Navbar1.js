import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  SearchIcon,
  UserIcon,
  NewspaperIcon,
  MapIcon,
  DocumentReportIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
function Navbar1() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5  lg:mx-auto">
        {/* LEFT*/}
        <div className="relative hidden lg:inline-grid w-24">
          <span className="text-blue-500">BOBtheBuilder</span>
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* RIGHT*/}
        <div className="flex items-center justify-end space-x-4">
          <Link href="/workers">
            <HomeIcon className="navBtn" />
          </Link>
          <Link href="/reports">
            <DocumentReportIcon className="navBtn" />
          </Link>
          <Link href="/map">
            <MapIcon className="navBtn" />
          </Link>
          <Link href="/newsPage">
            <NewspaperIcon className="navBtn" />
          </Link>
          <Link href="/profile">
            <UserIcon className="navBtn" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
