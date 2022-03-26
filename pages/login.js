import React, { useState } from "react";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
import Link from "next/link";

import { FaGoogle, FaRegEnvelope, FaLock } from "react-icons/fa";
import { firebase, auth } from "../firebase/initFirebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googleprovider = new GoogleAuthProvider();

const googlelogin = () => {
  signInWithPopup(auth, googleprovider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location = "/admin";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const emaillogin = (email, password) => {
  console.log(email + password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location = "/";
      // ...
    })
    .catch((error) => {
      alert("Error signing up");
      const errorCode = error.code;
      const errorMessage = error.message;
      window.location = "/";
      // ..
    });
};

const login = () => {
  const [EmailID, setEmailID] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Login" />
      <Particle />
      <Firework />
      <center className="grid">
        <div className="fixed flex w-full flex-1 flex-col items-center justify-center px-20 text-center min-h-full ">
          <div className="flex w-2/3 max-w-7xl rounded-2xl bg-white shadow-2xl">
            <div className="w-3/5 p-5 ">
              <div className="text-left text-2xl  font-bold">
                <span className="text-[#0082EF]">Construct</span>W
              </div>

              <div className="py-10 ">
                <h2 className="mb-2 text-3xl font-bold text-[#0082EF] ">
                  Sign into your account
                </h2>
                <div className="mb-2 inline-block w-10 border-2 border-[#0082EF]"></div>
                <div className="my-2 flex justify-center ">
                  <button
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#0082EF]"
                    onClick={() => googlelogin()}
                  >
                    <FaGoogle className="text-xl" />
                  </button>
                </div>
                <p className="text-gray-500 my-2">or use your email address</p>
                <div className="flex flex-col items-center my-2">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      value={EmailID}
                      onChange={(e) => setEmailID(e.target.value)}
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center ">
                    <FaLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="mt-10 inline-block rounded-full border-2 bg-[#0082EF] border-white px-12 py-2 font-semibold hover:bg-black hover:text-[#0082EF]"
                    onClick={() => {
                      emaillogin(EmailID, Password);
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
            I
            <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-[#0082EF] py-36 px-12 text-white">
              <h2 className="mb-2 text-3xl font-bold "> Hello There!</h2>
              <div className="mb-2 inline-block w-10 border-2 border-white"></div>
              <p className="mb-10">
                {" "}
                You have to login to use our amazing features
              </p>
              <button className="inline-block rounded-full mb-5 border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                <Link href="/workers/dashboardWorkers">Explore as worker</Link>
              </button>
              <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                <Link href="/admin/dashboardContractor">
                  Explore as contractor
                </Link>
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default login;
