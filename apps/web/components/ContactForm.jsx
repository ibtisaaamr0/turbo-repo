'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [Data, setData] = useState({
    Name: '',
    Email: '',
    message: ''
  });
  const [Msg, setMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        setMsg(true);
        setData({ Name: '', Email: '', message: '' });
      } else {
        alert(data.errors?.[0]?.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <label className='font-extrabold italic'>Name</label>
        <input
          type="text"
          value={Data.Name}
          onChange={(e) =>
            setData({ ...Data, Name: e.target.value })
          }
          placeholder="Your Name"
          required
          className='bg-gray-200 text-black border-2 rounded-full p-1'
        />

        <label className='font-extrabold italic'>Email</label>
        <input
          type="email"
          value={Data.Email}
          onChange={(e) =>
            setData({ ...Data, Email: e.target.value })
          }
          placeholder="Your Email"
          required
          className='bg-gray-200 text-black border-2 rounded-full p-1'
        />

        <label className='font-extrabold italic'>Your Message</label>
        <textarea
          value={Data.message}
          onChange={(e) =>
            setData({ ...Data, message: e.target.value })
          }
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          placeholder="Your Message"
          required
          className='bg-gray-200 text-black border-2 rounded-md p-2 w-full overflow-hidden'
        />

        <button
          type='submit'
          className='cursor-pointer bg-black text-white rounded-full w-[50%] p-2'
        >
          Submit
        </button>
      </form>

      {Msg && (
        <div className="top-0 mt-8 bg-gray-300 text-gray-800 px-4 py-2 rounded-md border border-black w-full animate-fade">
          Your message has been sent
        </div>
      )}
    </div>
  );
}
