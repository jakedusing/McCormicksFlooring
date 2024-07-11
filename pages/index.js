import Head from "next/head";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Carousel from "./components/ExampleWork";
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
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-2 py-2 rounded-md ml-8"
                  href="mailto:mccormicksflooring@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-300 md:text-6xl">
              Mike McCormick
            </h2>
            <h3 className="text-2xl py-2 text-black dark:text-white md:text-3xl">
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
          <div className="text-5xl flex justify-center gap-12 py-1 text-gray-600 dark:text-gray-300">
            <a
              href="https://www.facebook.com/p/McCormicks-flooring-100063481025326/?_rdr"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/tolyboi_staytru/"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-2xl w-80 h-80 mt-10 mx-auto dark:bg-gradient-to-b dark:from-gray-300 dark:to-gray-500">
            <Image src={mccormickflooring} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center text-center justify-center p-10 mt-10 shadow-lg rounded-xl md:max-w-lg mx-auto">
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
        <Carousel />
        <footer>
          <div className="text-sm py-8 flex justify-center text-gray-600 dark:text-gray-300">
            McCormick's Flooring, LLC. Since 2019
          </div>
        </footer>
      </main>
    </div>
  );
}
