// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     batch: '',
//     branch: '',
//     role: '',
//     enrollmentNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-bold text-center">Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="batch" className="block text-sm font-medium text-gray-700">
//               Batch
//             </label>
//             <input
//               type="text"
//               id="batch"
//               name="batch"
//               value={formData.batch}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
//               Branch
//             </label>
//             <input
//               type="text"
//               id="branch"
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="student">Student</option>
//               <option value="alumni">Alumni</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-700">
//               Enrollment Number
//             </label>
//             <input
//               type="text"
//               id="enrollmentNumber"
//               name="enrollmentNumber"
//               value={formData.enrollmentNumber}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    batch: '',
    branch: '',
    role: '',
    enrollmentNumber: '',
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEnrollmentNumber = (enrollmentNumber) => {
    const re = /^\d+$/;
    return re.test(enrollmentNumber);
  };

  const validateName = (name) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
  };

  const validateBatch = (batch) => {
    const re = /^\d+$/;
    return re.test(batch);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword, batch, branch, role, enrollmentNumber } = formData;

    if (!fullName || !email || !password || !confirmPassword || !batch || !branch || !role || !enrollmentNumber) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateName(fullName)) {
      toast.error('Name must contain only letters and spaces');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!validateBatch(batch)) {
      toast.error('Batch must be numeric');
      return;
    }

    if (!validateEnrollmentNumber(enrollmentNumber)) {
      toast.error('Enrollment number must be numeric');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success('Form submitted successfully');
      console.log(formData);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        batch: '',
        branch: '',
        role: '',
        enrollmentNumber: '',
      });
      setRecaptchaValue(null);
    }, 2000);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`}
        onSubmit={handleSubmit}>
        
        <h2 className="text-2xl font-bold text-center mx-auto">Signup</h2>
        <p className='text-gray-500 text-xs py-3 '>Please use the form below to sign up</p>

        {/* Full Name */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="fullName"
            type="text"
            placeholder="Your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            pattern="[A-Za-z\s]+"
            title="Full Name should contain only letters and spaces"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
       
        
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="password">
            Create Password <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="password"
            placeholder="Create password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="confirmPassword">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {/* Batch */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="batch">
            Batch <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="batch"
            type="text"
            placeholder="Your batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            pattern="\d+"
            title="Batch should contain only numbers"
            required
          />
        </div>

        {/* Branch */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="branch">
            Branch <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="branch"
            type="text"
            placeholder="Your branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="role">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>

        {/* Enrollment Number */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="enrollmentNumber">
            Enrollment Number <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="enrollmentNumber"
            type="text"
            placeholder="Your enrollment number"
            name="enrollmentNumber"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            pattern="\d+"
            title="Enrollment number should contain only numbers"
            required
          />
        </div>

        {/* reCAPTCHA and Submit button */}
        <div className="flex flex-row mb-2">
          <div className="block pt-2 mb-1 sm:w-1/3 sm:pr-4"></div>
          <div className="appearance-none rounded w-full mt-1 text-gray-700 leading-tight focus:outline-none focus:bg-white">
            <ReCAPTCHA
              sitekey="YOUR_SITE_KEY" // Replace with actual site key
              onChange={handleRecaptchaChange}
            />

            <button
              className="bg-green-500 hover:bg-green-700 mt-2 text-white text-center font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>

      {/* Load button */}
      {isLoading && (
        <div className='flex justify-center items-center h-full w-full absolute top-0 left-0'>
          <Oval
            height={40}
            width={40}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={2}
          />
        </div>
      )}


      <ToastContainer />

      {/* Icons and Links */}
      <div className="flex flex-row mt-4">
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

export default Signup;
       