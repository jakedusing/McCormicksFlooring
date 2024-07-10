import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import mccormickflooring from "../public/mccormickflooring_nobg.png";
import lvpIcon from "../public/lvp-icon_orig.png";
import floorbefore from "../public/floorbefore.jpg";
import floorbefore1 from "../public/floorbefore1.jpg";
import floorafter from "../public/floorafter.jpg";
import floorafter1 from "../public/floorafter1.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>McCormick's Flooring</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">McCormick's Flooring</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Mike McCormick
            </h2>
            <h3 className="text-2xl py-2">Contractor</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Licensed contactor for your flooring needs.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillFacebook />
            <AiFillInstagram />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-2xl w-80 h-80 mt-20 mx-auto">
            <Image src={mccormickflooring} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center text-center justify-center p-10 mt-5 shadow-lg rounded-xl">
            <Image src={lvpIcon} width={100} height={100} />
            <h3 className="text-3xl py-1">Services offered</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Luxury Vinyl Plank, Hardwood, Laminate, Baseboards, and much more.
            </p>
          </div>
        </section>
        <div>
          <div className="flex flex-row justify-between">
            <Image src={floorbefore} width={500} height={500} />
          </div>
          <div>
            <Image src={floorbefore1} />
          </div>
          <div>
            <Image src={floorafter} />
          </div>
          <div>
            <Image src={floorafter1} />
          </div>
        </div>
      </main>
    </div>
  );
}
