import React from "react";
import Link from "next/link";
function Projects() {
  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-xl font-bold ">
          <span className="mr-2 text-black ">PROJECTS</span>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <form class="w-full max-w-lg">
          <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-first-name"
              >
                Project Name
              </label>
              <input
                class="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder=""
              />
              <p class="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full px-3 md:w-1/2">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-last-name"
              >
                Client Name
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="w-full px-3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-password"
              >
                Description
              </label>
              <input
                class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="text"
                placeholder=""
              />
              <p class="text-xs italic text-gray-600">
                A DETAILED DESC IS HELPFUL
              </p>
            </div>
          </div>
          <div class="-mx-3 mb-2 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-city"
              >
                Total Workers
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                type="numbers"
                placeholder=""
              />
            </div>
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-zip"
              >
                Start date
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="date"
                placeholder=""
              />
            </div>

            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-zip"
              >
                Duration of contract
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="text"
                placeholder=""
              />
            </div>
            <div class="m-6 mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <div className="my-10">
                <div className="flex justify-between">
                  <button className="mr-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">ADD</Link>
                  </button>
                  <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">UPDATE</Link>
                  </button>
                  <button className="ml-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">DELETE</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Projects;
