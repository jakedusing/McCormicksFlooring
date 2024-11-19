import Head from "next/head";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import WorkImages from "./components/WorkImages";
import Image from "next/image";
import mccormickflooring from "../public/mccormickflooring_nobg.png";
import lvpIcon from "../public/lvp-icon_orig.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>McCormick's Flooring</title>
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 overflow-hidden">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-black dark:text-white">
              McCormick's Flooring
            </h1>
            <ul className="flex items-center">
              <li className="text-black dark:text-white">
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl transition-transform transform hover:scale-110"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md ml-8 hover:shadow-lg hover:scale-105 transition-all"
                  href="mailto:mccormicksflooring@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 text-gray-600 font-medium dark:text-gray-500">
              Mike McCormick
            </h2>
            <h3 className="text-3xl py-2 text-black dark:text-white">
              Owner of McCormick's Flooring
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-md mx-auto">
              Professional flooring and tile installation.
              <br />
              Great Workmanship.
              <br />
              Affordable prices.
              <br />
              Quality work.
            </p>
          </div>
          <div className="flex justify-center gap-8 text-5xl text-gray-600 dark:text-gray-300">
            <a
              href="https://www.facebook.com/p/McCormicks-flooring-100063481025326/?_rdr"
              target="_blank"
              className="transform transition-all hover:scale-125 hover:text-blue-600"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/tolyboi_staytru/"
              target="_blank"
              className="transform transition-all hover:scale-125 hover:text-pink-500"
            >
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-gray-100 to-gray-300 rounded-2xl w-80 h-80 mt-10 mx-auto dark:bg-gradient-to-b dark:from-gray-300 dark:to-gray-500">
            <Image src={mccormickflooring} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section className="flex justify-center p-10 mt-10">
          <div className="flex flex-col items-center text-center justify-center p-10 mt-10 shadow-lg rounded-xl bg-white dark:bg-gray-800 w-full md:max-w-lg mx-auto">
            <Image src={lvpIcon} width={100} height={100} />
            <h3 className="text-3xl py-1 dark:text-white">Services offered</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Luxury Vinyl Plank, Hardwood, Laminate, Baseboards, and much more.
              <br />
              Professional installation of commercial and residential flooring
              and tile.
            </p>
          </div>
        </section>
        <div>
          <h3 className="flex flex-row justify-center pt-10 pb-3 text-2xl dark:text-gray-300">
            Previous Work
          </h3>
          <WorkImages />
        </div>
        <footer className="py-8">
          <div className="text-md text-center text-gray-600 dark:text-gray-300">
            McCormick's Flooring, LLC. Since 2019
          </div>
        </footer>
      </main>
    </div>
  );
}
