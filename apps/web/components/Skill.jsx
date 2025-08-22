'use client';

import ProgressBar from '@ramonak/react-progress-bar';

export default function Skill() {
  return (
    <div className="text-left flex flex-col p-5 gap-5">
      <h1 className="text-xl font-extrabold text-gray-900 text-left">Skills</h1>
      <ul className="flex flex-col gap-2 font-bold italic list-disc">
        <li className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          Next.js
          <ProgressBar
            completed={55}
            bgColor="black"
            width="100%"
            baseBgColor="white"
            height="12px"
            animateOnRender={true}
            className="border-2 rounded-3xl"
          />
        </li>
        <li className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          Python
          <ProgressBar
            completed={67}
            bgColor="black"
            width="100%"
            baseBgColor="white"
            height="12px"
            animateOnRender={true}
            className="border-2 rounded-3xl"
          />
        </li>
        <li className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          C++
          <ProgressBar
            completed={80}
            bgColor="black"
            width="100%"
            baseBgColor="white"
            height="12px"
            animateOnRender={true}
            className="border-2 rounded-3xl"
          />
        </li>
        <li className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          Tailwind CSS/CSS
          <ProgressBar
            completed={75}
            bgColor="black"
            width="100%"
            baseBgColor="white"
            height="12px"
            animateOnRender={true}
            className="border-2 rounded-3xl"
          />
        </li>
        <li className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
          InDesign
          <ProgressBar
            completed={30}
            bgColor="black"
            width="100%"
            baseBgColor="white"
            height="12px"
            animateOnRender={true}
            className="border-2 rounded-3xl"
          />
        </li>
      </ul>
    </div>
  );
}
