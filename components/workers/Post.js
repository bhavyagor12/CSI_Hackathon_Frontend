import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, image, description, location }) {
  return (
    <div className="bg-white my-7 border rounded-sm ">
      <div className="flex items-center p-5">
        <img
          src={image}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={image} className="object-cover w-full " />

      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex flex-col">
          <p className="truncate">
            <span className="font-bold mr-1">{username}: </span>
            {description}
          </p>
          <p className="truncate">
            <span className="font-bold mr-1">Location: </span>
            <Link href="">{location}</Link>
          </p>
        </div>

        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
}

export default Post;
