import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import shorts from "public/shorts.png";
import instagram from "public/instagram.png";
import tiktok from "public/tiktok.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Short Form Marketing</title>
        <meta name="description" content="Best Affiliate products for your short form content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background px-5">
        <section className="min-h-screen">
          <div className="flex-col items-start justify-start ">
            <div className="flex items-center justify-center pt-3 sm:justify-center ">
              <Image
                className="mr-10 drop-shadow-xl "
                src={shorts}
                alt="shorts"
                width={100}
                height={100}
              />
              <h1 className="text-4xl font-extrabold text-white sm:text-7xl">START GETTING</h1>
            </div>
            <div className="flex items-center justify-center pt-1 sm:justify-center">
              <h1 className="text-6xl font-extrabold  text-white sm:text-7xl">THE BEST</h1>
              <Image
                className="ml-10 drop-shadow-xl"
                src={tiktok}
                alt="shorts"
                width={130}
                height={130}
              />
            </div>
            <div className="flex items-center justify-center pt-3 mb-16 sm:justify-center ">
              <Image
                className="mr-5 drop-shadow-xl"
                src={instagram}
                alt="shorts"
                width={120}
                height={120}
              />
              <h1 className="text-4xl font-extrabold text-white  sm:text-7xl">AFFILIATE OFFERS</h1>
            </div>
            <div className="flex-col p-10 py-10 mb-10 justify-start bg-secondary rounded-xl sm:text-center">
              <p className=" mb-3 text-3xl font-extrabold text-white ">AFFILIATE MARKETING IDEAS</p>
              <p className="text-3xl mb-5 font-extrabold text-white ">
                FOR <span className="underline decoration-action ">YOUR CONTENT</span>
              </p>
              <p className=" mb-1  text-xl font-bold text-zinc-500 ">
                WE WILL PROVIDE YOU WITH QUALITY AFFILIATE PRODUCTS WEEKLY
              </p>{" "}
              <p className=" mb-5  text-xl font-bold text-zinc-500 "> JOIN OUR MAILING LIST!</p>
            </div>
            <div className="flex-col w-full  sm:text-center  ">
              <form action="https://formsubmit.co/businnesakif@outlook.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://shortformmarketing.vercel.app/" />
                <input
                  type="email"
                  name="email"
                  className="bg-white w-full h-12 placeholder:text-xl text-gray-700 font-bold pl-5 sm:placeholder:text-4xl text-center "
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="bg-action  w-full h-16 shadow-lg text-2xl mt-5 font-bold text-white hover:bg-blue-900   "
                >
                  START GETTING OFFERS
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
