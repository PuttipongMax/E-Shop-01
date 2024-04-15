import React from 'react';
import { 
  FaFacebook, FaInstagram, FaLinkedin, 
  FaLocationArrow, FaMobileAlt 
} from 'react-icons/fa';

const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#about"
  },
  {
    title: "Contact",
    link: "/#contact"
  },
  {
    title: "Blog",
    link: "/#blog"
  }
]

function Footer(){
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20
        pt-5'>
          {/* company detail */}
          <div className='py-8 px-4'>
            <a 
            href="#"
            className='text-primary font-semibold 
            text-2xl tracking-widest uppercase 
            sm:text-3xl
            '>
              Eshop
            </a>
            <p className='text-gray-600 dark:text-white/70 
            lg:pr-24 pt-3'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quidem incidunt
              Excepturi.
            </p>
            <p className='text-gray-500 mt-4'>
              Made with &#128151; by The Coding Junior
            </p>
            <a 
            href="#"
            target='_blank'
            className='inline-block bg-primary/90 text-white
            py-2 px-4 mt-4 text-sm rounded-full'
            >
              Visit our 
            </a>
          </div>

          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 
          sm:grid-cols-3 md:pl-10'>  
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold mb-3
              sm:text-left'>
                Important Links
              </h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                      href={data.link}
                      className='text-gray-600 duration-300
                      hover:text-black hover:dark:text-white
                      dark:text-gray-400'
                      >
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold mb-3
              sm:text-left'>
                Quick Links
              </h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                      href={data.link}
                      className='text-gray-600 duration-300
                      hover:text-black hover:dark:text-white
                      dark:text-gray-400'
                      >
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Company Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>            
              </div>          
              <div className='flex items-center gap-3 mt-6'>
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            
              {/* social links */}
              <div className='flex items-center gap-3 mt-6'>
                <a href='#'>
                  <FaInstagram
                  className='text-3xl hover:text-primary duration-300'
                  />
                </a>
                <a href='#'>
                  <FaFacebook
                  className='text-3xl hover:text-primary duration-300'
                  />
                </a>
                <a href='#'>
                  <FaLinkedin 
                  className='text-3xl hover:text-primary duration-300'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;