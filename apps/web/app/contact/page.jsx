import Image from "next/image";
import ContactForm from "../../components/ContactForm";

async function getContact() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/contact-info`, { cache: 'no-store' });


  const data = await res.json();
  if (!data?.docs || data.docs.length === 0) return null;

  const contactData = data.docs[0];

  return {
    email: contactData.email,
    links: contactData.links || [],
    pictures: contactData.pictures || [],
  };
}

export default async function Contact() {
  const contact = await getContact();

  if (!contact) return <p>No contact info available.</p>;

  return (
    <div className="min-h-screen flex justify-center m-20 animate-fade">
      <div className="flex flex-col gap-20 justify-center items-center lg:flex lg:flex-row lg:text-2xl md:text-xl">
        
        {/* Left section */}
        <div className="flex flex-col lg:flex items-center justify-between gap-10 w-full">
          <div className="w-1/2 flex justify-center">
            {contact.pictures.length > 0 &&
              contact.pictures[0].picture?.url && (
                <Image
                  src={contact.pictures[0].picture.url}
                  alt={contact.pictures[0].picture.alt || "Profile"}
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg object-cover"
                />
              )}
          </div>

          <div className="w-1/2 text-left">
            <h1 className="text-4xl 2xl:text-5xl font-bold text-gray-900">Contact Me</h1>
            <p className="mt-4 xl:mt-7 text-lg lg:text-xl 2xl:text-2xl text-gray-600 italic">
              Here is my email to contact me:{" "}
              <strong>{contact.email}</strong>
              <br />
              Here are my socials:
              <br />
              <br />
            </p>

            <div className="flex flex-row gap-5 justify-between">
              {contact.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon?.url && (
                    <Image
                      src={link.icon.url}
                      alt={link.icon.alt || link.label || "social icon"}
                      width={30}
                      height={30}
                      className="hover:animate-hover-on w-10"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
