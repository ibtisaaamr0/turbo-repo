"use client"

import { Fa1, Fa2, Fa3, Fa4, Fa5, Fa6, Fa7, Fa8, Fa9 } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsRender() {
  const [projects, setProjects] = useState([]);

  const icons = [Fa1, Fa2, Fa3, Fa4, Fa5, Fa6, Fa7, Fa8, Fa9];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiUrl=process.env.NEXT_PUBLIC_API_URL ;
        const res = await fetch(`${apiUrl}/projects`,{ cache: "no-store" });
        const data = await res.json();
        if (!res.ok) {
          console.error("Failed request:", res.status, res.statusText);
          return;
        }

        if (Array.isArray(data.docs)) {
          setProjects(data.docs);
        }
        else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-20 items-center justify-center px-10 py-20 bg-transparent pb-50 md:mt-10 animate-fade">
      {projects.slice().reverse().map((project, index) => {
        const Icon = icons[index]

        return (
          <div
            key={index}
            id={`project-${index}`}
            className="hover:animate-hover-on flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full max-w-screen-2xl shadow-lg p-5 bg-linear-to-t from-gray-100 to-gray-400"
          >
            <div className="lg:w-[40%] w-full text-left space-y-6">
              <Icon className="text-7xl" />
              <h1 className="text-4xl font-extrabold text-gray-900 italic">{project.project}</h1>
              <h3 className="text-lg text-gray-600 italic font-bold">{project.description}</h3>
              <p className="text-md text-gray-700">{project.information}</p>
            </div>

            <div className="lg:w-[80%] w-full flex flex-col gap-6">
              {(Array.isArray(project.Images) ? project.Images : [project.Images]).map((img, imgIndex) => (
                <div key={imgIndex} className="w-full overflow-hidden rounded-xl">
                  <Image
                    src={img.Image?.url}
                    alt={`Project screenshot ${imgIndex + 1}`}
                    width={1600}
                    height={900}
                    className="rounded-xl shadow-md object-cover w-full h-auto"
                  />

                </div>
              ))}
            </div>

          </div>
        );
      })}
    </div>
  );
}
