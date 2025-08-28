'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [Data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [Msg, setMsg] = useState(false)


  const handleSubmit = async (e) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/api/contact`, { cache: "no-store" });
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
      });

      const data = await res.json();
      console.log("Response:", data);
      setMsg(true)

      setData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    }
  };

  return(

  

   <div >
          <form className='flex flex-col gap-5 ' onSubmit={handleSubmit}>
            <label className='font-extrabold italic' >Name</label>
            <input type="text"
              name="name"
              value={Data.name}
              onChange={(e) => { setData({ name: e.target.value, email: Data.email, message: Data.message }) }}
              placeholder="Your Name"
              required className='bg-gray-200 text-black border-2  rounded-full p-1' />
            <label className='font-extrabold italic'>Email</label>
            <input type="email"
              name="email"
              value={Data.email}
              onChange={(e) => { setData({ name: Data.name, email: e.target.value, message: Data.message }) }}
              placeholder="Your Email"
              required className='bg-gray-200 text-black border-2 rounded-full p-1' />
            <label className='font-extrabold italic' >Your Message</label>
            <textarea name="message"
              value={Data.message}
              onChange={(e) => {
                setData({ name: Data.name, email: Data.email, message: e.target.value })
              }}
              onInput={(e) => {
                e.target.style.height = 'auto'; 
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="Your Message"
              required className='bg-gray-200 text-black border-2 rounded-md p-2 w-full overflow-hidden ' />
            <button type='submit' className='cursor-pointer bg-black  text-white rounded-full w-[50%] p-2'> Submit</button>
          </form>
          {Msg && (
            <div className="top-0 mt-8 bg-gray-300 text-gray-800 px-4 py-2 rounded-md border border-black w-full animate-fade">Your message has been sent </div>
          )}
        </div>
  );
}
