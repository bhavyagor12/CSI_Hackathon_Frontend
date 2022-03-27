import React from "react";

import Image from "next/image";
import Link from "next/link";
const NewsItem = ({ data }) => {
  return (
    <div className="flex items-end">
      <Link href={data.url}>
        <div className="flex flex-col-2 w-full">
          <div class=" w-200  max-w-sm  overflow-hidden rounded-xl bg-gray-700 shadow-lg mb-40px">
            <div class="px-6 py-4">
              <div class="text-blue mb-2 text-xl text-white">{data.title}</div>
              <p class="text-base text-gray-300 ">{data.source.name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
