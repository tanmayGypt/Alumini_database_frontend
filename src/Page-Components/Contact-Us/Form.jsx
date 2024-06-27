import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {FaLinkedin } from 'react-icons/fa';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('')
  const [subject, setSubject] = useState('')
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !subject || !message) {
      alert('Please fill in all required fields');
      return;
    }
    // if (!recaptchaValue) {
    //   alert('Please complete the reCAPTCHA');
    //   return;
    // }
    console.log({ name, email, contact, subject, message, /*recaptchaValue*/ });
    // form submission logic here 
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-20">

      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md 
      /" onSubmit={handleSubmit}>
        
        <h2 className="text-2xl font-bold ">Contact Us</h2>
        <p className='text-gray-500 text-xs py-3'>Pls use the form below to contact us</p>

        {/* name */}
        <div className="flex flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* email */}
        <div className="flex flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="email">
            Personel Email Id <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Contact num */}
        <div className="flex flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="contact">
          Contact No <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="contact"
            type="text"
            placeholder="Your Contact No"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        {/* Subject */}
        <div className="flex flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="message">
          Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            required
          />
        </div>

        {/* reCAPTCHA and Submit button */}
        <div className="flex flex-row mb-2">
          <div className="block pt-2 mb-1 md:w-1/3 pr-4"></div>
          <div
            className=" appearance-none rounded w-full mt-1 text-gray-700 leading-tight focus:outline-none focus:bg-white">
                <ReCAPTCHA
                    sitekey="YOUR_SITE_KEY" // Replace with actual site key
                    onChange={handleRecaptchaChange}
                />

                <button
                    className="bg-green-500 hover:bg-green-700 mt-2 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Submit
                </button>
            </div>
        </div>
      </form>
      <br/>
      {/* Icons and Links */}
      <div className="flex flex-row">
          <a href="https://bpitindia.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-row">
            <img className="w-10 mr-1" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADcAOAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBAcFAv/EACoQAAIBBAAFAwMFAAAAAAAAAAECAwAEBREGEiExUQcTQSKRoRQVMmGB/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIEBQMB/8QAKREAAgEDAgUCBwAAAAAAAAAAAAECAxEhBBIFEzFBccHRFCIkQkNRgf/aAAwDAQACEQMRAD8A7jQCgFAKAUAoBQCgFAKAUAoBQCgKhxB6iYfAZWXG3sF888QUsYo1K9QCO7DzVqlo6lWO6NiLkkZsbx5isjYQXkEN4sc1+tgodFB9xlBBP1fx0e/4rhqab07Sn3LOm089Tu2fam34Rvz52SPOyYiLHTSzrbfqVYSIFdObl6bPffn71JUls3372K982NR+MbRuHbXO21pcS2txKsJQ8qvG5k9vRBOujdDon/an8PLmOm3le1xfFzZTiJTf3uNexnTIWsAuBCzLqaInXMjb13BHXXX71F0flU74eBcw43id8nb4+e0xN0UvrdrhGZ0ARBy65jvoTzdAN9jXs6GxtOXR2CZ94XiX93ixlxHjbmO1yMbPFMzKQuhvTAHYJAOu/alSjy3JN5QTuc89Q+Ds9l+LLu9x9mktvIsYVzcRrvSAHoWB7ir2l1VGnSUZPJF05N3SJxOFv8FgsTa5SFYZn4mglVRIr7XkA39JPyDWfxOtCrODg/16mzwaLjz7r8cvQtGVuse3qJJFc5VLQDDcjulysbKfd3rfwdda7QUuRdK+fQx+54+Qvdem8MVysNlGmUiisyEEXuwpcryyhD5Ucx6a+exrvCP1GM4d/Nuh4+hcxj7CwS+zU16Z5ri3CNeXEiaEQ2VVeUBQuzvoOu/mqe+UrQSwuxKxo8A3tonp5ipXuoFjgs0SVzIAI2A6hj8H+jXTUxfxElbueR6E+l08M3AmIWKVHaK3CSBWBKMPg+DTWJqvLyI9D0MlwlgsrePeZDHpNcPoM5dhvQ0Ox8CqEqMJO7RoUOJauhBU6c7L+GG24J4ctbiK4t8XGksTh0YSP0YHYPfyKKhTTukTnxfWzi4SqYfj2LBoeK6mcTQDVARoeKAmgFAKAUAoBQCgFAKAUAoBQCgFAKA//9k=" alt="Bpit" />
            <span className='py-3 text-xs'>Bhagwan Parshuram Institute Of Technology, New Delhi</span>
          </a>
          <a className='py-2' href="https://www.linkedin.com/school/bhagwan-parshuram-institute-of-technology/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} /> 
          </a>
        </div>
    </div>
  );
};

export default Form;
