
import ContactForm from '../../components/ContactForm';
import Image from 'next/image';

export default function Contact() {





  return (
    <div className="min-h-screen flex justify-center m-20 animate-fade">
      <div className='flex flex-col gap-20 justify-center items-center lg:flex lg:flex-row lg:text-2xl md:text-xl'>
        <div className="flex flex-col lg:flex items-center justify-between gap-10  w-full  ">

          <div className="w-1/2 flex justify-center">
            <Image
              src="/work-4.png"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
            />
          </div>

          <div className="w-1/2 text-left ">
            <h1 className="text-4xl 2xl:text-5xl font-bold text-gray-900"> Contact Me</h1>
            <p className="mt-4 xl:mt-7 text-lg lg:text-xl 2xl:text-2xl text-gray-600  italic ">
              Here is my email to contact me : <strong>ibtisamr00@gmail.com </strong><br />
              Here are my socials : <br />
              <br />
            </p>

            <div className='flex flex-row gap-x-3'>
              <button className='hover:animate-hover-on'>
                <a href={"http://www.instagram.com"} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={"/insta.png"}
                    alt=''
                    width={30}
                    height={30} />
                </a>
              </button>

              <button className='hover:animate-hover-on'>
                <a href={"http://www.linkedin.com"} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={"/linkedin.png"}
                    alt=''
                    width={30}
                    height={30} />
                </a>
              </button>

              <button className='hover:animate-hover-on'>
                <a href={"http://www.github.com"} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={"/github.png"}
                    alt=''
                    width={30}
                    height={30} />
                </a>
              </button>

            </div>
          </div>
        </div>

        <div >
          <ContactForm/>
        </div>

      </div>

    </div>
  );
}
