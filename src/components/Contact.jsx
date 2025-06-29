import React, { useRef } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nvayb37', 'template_jldeujm', form.current, 'VfzWsu9Ui6gHtit_1')
      .then((result) => {
          console.log('Email sent!', result.text);
          alert('Message sent!');
      }, (error) => {
          console.log('Failed:', error.text);
          alert('Failed to send. Try again later.');
      });
  };
    return (
        <section id='contact' className='bg-gray-900 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
                <div className='grid lg:grid-cols-2 gap-10'>
                    {/* contact info */}
                    <div className='flex flex-col justify-center space-y-8'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
                            <p className='text-gray-300 my-5'>Have a project in mind, want to collaborate, or just want to say hello?
                                I'm always open to new opportunities and conversations!

                                Feel free to reach out — I’ll get back to you as soon as possible.</p>
                            <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
                            <p className='text-gray-600 mt-2'>
                                <a href="mailto:naeemjaipur@gmail.com" className='text-blue-500 hover:underline'>naeemjaipur@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
                            <p className='text-gray-600 mt-2'>
                                <a href="tel:+918290927014" className='text-blue-500 hover:underline'>+91 82909 27014</a>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
                            <div className='flex gap-3 text-2xl transition-all mt-5'>
                                <a href="https://www.facebook.com/share/1DcMimv1X6" target='_blank'>                
                                <FaFacebook className='text-gray-100 hover:text-blue-400' />
                                </a>
                                <a href="https://www.instagram.com/naeem_akhtar_8290?igsh=MTZoMWJleTdlZTR4dw==" target='_blank'>
                                    <FaInstagram className='text-gray-100 hover:text-blue-400' />
                                </a>
                                <a href="https://www.linkedin.com/in/naeem-akhtar-developer" target='_blank'>
                                    <FaLinkedin className='text-gray-100 hover:text-blue-400' />
                                </a>
                                <a href="https://github.com/Naeem8290" target='_blank'>
                                    <FaGithub className='text-gray-100 hover:text-blue-400' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* contact form */}
                    <div className='bg-gray-950 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8 hover:scale-105'>
                        <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
                        <form action="" className='space-y-6' ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    name="name"
                                    className='mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Your Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-300'>email</label>
                                <input
                                    type="email"
                                    id='email'
                                    name="email"
                                    className='mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Your Email'
                                />
                               
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                                <textarea
                                    id="messsage"
                                    name="message"
                                    rows={5}
                                    className='mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Your Message'></textarea>
                            </div>
                            <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
