import { Fa1, Fa2 } from "react-icons/fa6";
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center px-10 py-20  bg-transparent pb-50  md:mt-10 animate-fade">
      <div className="hover:animate-hover-on flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full max-w-screen-2xl shadow-lg p-5 bg-linear-to-t from-gray-100 to-gray-400">
        <div className="lg:w-[40%] w-full text-left space-y-6 ">
        <Fa1
          className=' text-7xl' />

          <h1 className="text-4xl font-extrabold text-gray-900 italic">Burberry Clone</h1>
          <h3 className="text-lg text-gray-600 italic font-bold">Basic React + CSS</h3>
          <p className="text-md text-gray-700">
            A simple responsive Burberry homepage clone showcasing modern web layout and design using only React and plain CSS.
          </p>
        </div>

        <div className="lg:w-[80%] w-full flex flex-col gap-6 ">
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              src="/p1.png"
              alt="Project screenshot 1"
              width={1600}
              height={900}
              className="rounded-xl shadow-md object-cover w-full h-auto "
            />
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              src="/p2.png"
              alt="Project screenshot 2"
              width={1600}
              height={900}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>


      <div className="hover:animate-hover-on flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full max-w-screen-2xl shadow-lg p-5 bg-linear-to-t from-gray-100 to-gray-400">

        <div className="lg:w-[70%] w-full text-left space-y-6">
          <Fa2
          className=' text-7xl' />
          <h1 className="text-4xl font-extrabold text-gray-900 italic">Car Rental System</h1>
          <h3 className="text-lg text-gray-600 italic font-bold">HTML + CSS + PHP</h3>
          <p className="text-md text-gray-700">
            A simple Web page only used for a project for Database to enter cars in databse and fetch them accordingly.
          </p>
        </div>

        <div className="lg:w-[60%] w-full flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              src="/work2.png"
              alt="Project screenshot 2"
              width={1600}
              height={900}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
