import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-70 animate-fade">
      <div className="flex flex-row items-center justify-between gap-10 max-w-5xl w-full">
        
        <div className="w-1/2 flex justify-center">
          <Image
            src="/work-3.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="w-1/2 text-left">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            I’m a passionate developer with a strong interest in building modern web applications using the latest technologies. I love turning ideas into reality with code.
          </p>
          <button className="bg-black text-white p-5 m-3 rounded-full shadow-lg object-cover hover:bg-white hover:text-black"><Link href={"/contact"}>Get in touch</Link></button>

          <button className="bg-red-600 text-white p-5 m-3 rounded-full shadow-lg object-cover hover:bg-white hover:text-black"><Link href={"/sample-resume.pdf"}>My resume</Link></button>
        </div>

      </div>
    </div>
  );
}
