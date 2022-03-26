import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
import Link from "next/link";

export default function welcome() {
  return (
    <div className=" min-h-screen bg-[#0082EF] dark:bg-[#070045]  text-center">
      <Title
        title="ConstructW"
        name="welcome page"
        content="welcome to contructW"
      />
      <Firework />
      <Particle />
      <center>
        <div className="grid place-items-center justify-center  h-screen">
          <div className="flex flex-col align-center  fixed w-auto h-100 bg-[#0082EF] dark:bg-[#024CA1]  p-5 border-rounded box-border z-1 ">
            <div className="flex flex-col justify-center text-[#032A5D] dark:text-white  font-bold p-4">
              <div className="text-4xl p-1 ">
                <span className="text-black dark:text-[#FFCA02]">
                  Construct
                </span>
                W
              </div>
              <div className="text-2xl">
                <span className=" text-black dark:text-[#FFCA02]">
                  BOB THE{" "}
                </span>
                BUILDER
              </div>
              <div className="text-lg text-black dark:text-white">
                Site for workers and Contractors
              </div>
            </div>
            <button class="font-semi rounded-full  bg-white dark:bg-[#FFCA02] py-2 px-4 text-xl text-[#0082EF] hover:bg-[#FFCA02] hover:text-white  dark:hover:bg-[#0082EF] dark:hover:text-[#FFCA02]">
              <Link href="/login">Get Started</Link>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
