"use client"

import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch("http://localhost:5000/api/contact_info");
        const data = await res.json();

        if (!data || data.length === 0) return;

        // Take first row (assuming only one contact info row)
        const contactData = data[0];

        // Ensure links is always an array
        const links = Array.isArray(contactData.links) ? contactData.links : [];

        setContact({ ...contactData, links });
      } catch (err) {
        console.error("Error fetching contact:", err);
      }
    }

    fetchContact();
  }, []);

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center m-20 animate-fade">
      <div className='flex flex-col gap-20 justify-center items-center lg:flex lg:flex-row lg:text-2xl md:text-xl'>

        {/* Profile + info */}
        <div className="flex flex-col lg:flex items-center justify-between gap-10 w-full">
          <div className="w-1/2 flex justify-center">
            {contact.img && (
              <Image
                src={contact.img}
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full shadow-lg object-cover"
              />
            )}
          </div>

          <div className="w-1/2 text-left">
            <h1 className="text-4xl 2xl:text-5xl font-bold text-gray-900">Contact Me</h1>
            <p className="mt-4 xl:mt-7 text-lg lg:text-xl 2xl:text-2xl text-gray-600 italic">
              Here is my email to contact me: <strong>{contact.email}</strong><br />
              Here are my socials: <br /><br />
            </p>

            <div className='flex flex-row gap-x-3'>
              {contact.links.map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={
                      index === 0
                        ? "/insta.png"
                        : index === 1
                        ? "/linkedin.png"
                        : "/github.png"
                    }
                    alt=""
                    width={30}
                    height={30}
                    className="hover:animate-hover-on"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
