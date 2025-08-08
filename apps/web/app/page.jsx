
import {assets} from '../assets/assets';
import Image from "next/image";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import Skill from "../components/Skill";

export default function Home() {
  return (

    <>

      <main className="min-h-xs flex flex-col justify-center items-center bg-transparent px-10 py-10 gap-15 mb-40 animate-fade">
        

        <div className="rounded-full bg-gray-300 md:rounded-xl flex flex-col-reverse lg:gap-20 gap-10 md:flex-row items-center justify-between max-w-xs xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mt-5 shadow-2xl p-3.5 lg:p-14 md:p-6   md:mt-30 md:py-20 md:px-5">

          <div className="text-left ">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-bold text-gray-900 typing-animation">Hey, I’m Ibtisam </h1>
            <p className="mt-7 mb-7 text-base lg:text-xl text-gray-600">A passionate developer building amazing things.</p>

            <div className="flex justify-center mb-7 lg:flex gap-5">

            <button className="bg-gradient-to-t from-gray-700 to-black text-white p-2 py-4 2xl:p-6 max-w-xs xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl lg:text-md xl:text-xl 2xl:max-w-4xl rounded-full shadow-lg object-cover hover:bg-white hover:text-black "><Link href={"/contact"}>Get in touch</Link></button>
            <button className="p-2 2xl:p-6 xl:text-xl rounded-full shadow-lg object-cover text-white bg-gradient-to-t from-gray-700 to-black hover:bg-white lg:text-md hover:text-black"><Link href={"/projects"}>Projects</Link></button>
            </div>
          </div>

          <div>
            <Image
              src={assets.user_image}
              alt="Profile"
              width={600}
              height={600}
              priority
              className="rounded-full shadow-lg  w-full xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl"
            />
          </div>
        </div>

        <div className="rounded-full md:rounded-xl flex flex-col-reverse gap-5 lg:flex-col-reverse items-center justify-between max-w-xs xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mt-5 shadow-2xl p-5 xl:p-15 bg-gray-300 md:mt-30">
          <Skill/>
            <div>
            <Image
              src={"/work-4.png"}
              alt=""
              width={300}
              height={300}
              priority
              className="rounded-full shadow-lg h-full object-cover xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl" />
          </div>
        </div>


          <div className=" md:text-left flex flex-col justify-center items-center gap-5 max-w-xs xs:w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl ">
            <h1 className="text-xl sm:text-xl md:text-4xl font-bold text-gray-900 flex gap-5">About Me <FcAbout /></h1>
            <p className="mt-4 text-base sm:text-2xl text-gray-600 text-justify">
              I’m a passionate developer with a strong interest in building modern web applications using the latest technologies. I love turning ideas into reality with code.
            </p>
            <div className="flex flex-row gap-5 md:text-xl lg:text-2xl">

            <button className="bg-gradient-to-t from-gray-600 to-gray-800 text-white p-3 lg:p-5 m-0 rounded-full shadow-lg object-cover hover:bg-white hover:text-black"><Link href={"/contact"}>Get in touch</Link></button>

            <button className="bg-gradient-to-t from-red-900 to-red-400 text-white p-3 m-0 rounded-full shadow-lg object-cover hover:bg-white hover:text-black"><Link href={"/sample-resume.pdf"}>My resume</Link></button>
            </div>
          </div>


      </main>
    </>
  );
}

