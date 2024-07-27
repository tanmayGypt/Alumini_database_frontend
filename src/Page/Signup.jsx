import React, { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    password: '',
    confirmPassword: '',
    batchYear: '',
    branch: '',
    status: '',
    mobileNo: '',
    email: '',
    enrollmentNo: '',
    degree: 'B.Tech',
  });
  // const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEnrollmentNumber = (enrollmentNo) => {
    const re = /^[A-Za-z0-9]+$/;
    return re.test(enrollmentNo);
  };

  const validateName = (name) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
  };

  const validateBatchYear = (batchYear) => {
    const re = /^\d{4}$/;
    return re.test(batchYear);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileNo) => {
    const re = /^\d{10}$/;
    return re.test(mobileNo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const {
      firstName,
      lastName,
      fatherName,
      password,
      confirmPassword,
      batchYear,
      branch,
      status,
      mobileNo,
      email,
      enrollmentNo,
      degree
    } = formData;
  
    // Validate form fields
    if (!firstName || !lastName || !fatherName || !password || !confirmPassword || !batchYear || !branch || !status || !mobileNo || !email || !enrollmentNo) {
        toast.error('Please fill in all required fields');
        return;
    }
  
    if (!validateName(firstName) || !validateName(lastName) || !validateName(fatherName)) {
        toast.error('Names must contain only letters and spaces');
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
  
    if (!validateBatchYear(batchYear)) {
        toast.error('Batch Year must be a 4-digit number');
        return;
    }
  
    if (!validateEnrollmentNumber(enrollmentNo)) {
        toast.error('Enrollment number must be alphanumeric');
        return;
    }
  
    if (!validateMobileNumber(mobileNo)) {
        toast.error('Mobile number must be a 10-digit number');
        return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('https://alumnibackend.up.railway.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          Fathername: fatherName,
          Password: password,
          Status: status,
          Branch: branch,
          BatchYear: parseInt(batchYear),
          MobileNo: mobileNo,
          Email: email,
          EnrollmentNo: enrollmentNo,
          Degree: degree,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Unknown error');
      }
  
      const data = await response.json();
  
      if (data.message === 'OTP sent successfully') {
        toast.success('OTP sent successfully');
      } else {
        toast.success('Signup successful');
      }
      
      setFormData({
        firstName: '',
        lastName: '',
        fatherName: '',
        password: '',
        confirmPassword: '',
        batchYear: '',
        branch: '',
        status: '',
        mobileNo: '',
        email: '',
        enrollmentNo: '',
        degree: 'B.Tech',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Signup failed. Please try again later. Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };


  

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mx-auto">Signup</h2>
        <p className='text-gray-500 text-xs py-3'>Please use the form below to sign up</p>

        {/* First Name */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="firstName"
            type="text"
            placeholder="Your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            pattern="[A-Za-z\s]+"
            title="First Name should contain only letters and spaces"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="lastName"
            type="text"
            placeholder="Your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            pattern="[A-Za-z\s]+"
            title="Last Name should contain only letters and spaces"
            required
          />
        </div>

        {/* Father Name */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="fatherName">
            Father Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="fatherName"
            type="text"
            placeholder="Your father's name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            pattern="[A-Za-z\s]+"
            title="Father Name should contain only letters and spaces"
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

        {/* Batch Year */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="batchYear">
            Batch Year <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="batchYear"
            type="number"
            placeholder="Batch year"
            name="batchYear"
            value={formData.batchYear}
            onChange={handleChange}
            pattern="\d{4}"
            title="Batch Year should be a 4-digit number"
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
            placeholder="Branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        {/* Status */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="status">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your status</option>
            <option value="Student">Student</option>
            <option value="Alumni">Alumni</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="mobileNo">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="mobileNo"
            type="tel"
            placeholder="Mobile number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            pattern="\d{10}"
            title="Mobile Number should be a 10-digit number"
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
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enrollment Number */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="enrollmentNo">
            Enrollment Number <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="enrollmentNo"
            type="text"
            placeholder="Enrollment number"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleChange}
            pattern="[A-Za-z0-9]+"
            title="Enrollment Number should be alphanumeric"
            required
          />
        </div>

        {/* Degree */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="degree">
            Degree <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          >
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
{/* 
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="degree">
            I agree to the terms and conditions <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="degree"
            type="checkbox"
            placeholder="Degree"
            name="degree"
            required
          />
        </div> */}

        {/* <div className="mt-4">
          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} />
        </div> */}

        <div className="flex items-center justify-center mt-4">
          {isLoading ? (
            <Oval color="#00BFFF" height={30} width={30} />
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // disabled={!recaptchaValue}
            >
              Signup
            </button>
          )}
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;