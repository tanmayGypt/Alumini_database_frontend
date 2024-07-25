import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Fathername: '',
    Email: '',
    Password: '',
    Branch: '',
    Status: '',
    EnrollmentNo: '',
    BatchYear: '',
    MobileNo: '',
    Tenth: '',
    Xllth: '',
    Degree: '',
    GithubProfile: '',
    LinkedInProfile: '',
    LeetCodeProfile: '',
    CodeforceProfile: '',
    CodeChefProfile: '',
    InstagramProfile: '',
    TwitterProfile: ''
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      FirstName, LastName, Fathername, Email, Password, Branch, Status,
      EnrollmentNo, BatchYear, MobileNo, Tenth, Xllth, Degree
    } = formData;

    if (
      !FirstName || !LastName || !Fathername || !Email || !Password ||
      !Branch || !Status || !EnrollmentNo || !BatchYear || !MobileNo ||
      !Tenth || !Xllth || !Degree
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/signup', formData);
      toast.success(response.data.message || 'Form submitted successfully');
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        switch (status) {
          case 400:
            toast.error(data.message || 'Invalid request payload');
            break;
          case 409:
            toast.error(data.message || 'Email or enrollment number already exists');
            break;
          case 500:
            toast.error(data.message || 'Internal server error');
            break;
          default:
            toast.error('An unexpected error occurred');
        }
      } else {
        toast.error('Network error');
      }
    } finally {
      setIsLoading(false);
      setFormData({
        FirstName: '',
        LastName: '',
        Fathername: '',
        Email: '',
        Password: '',
        Branch: '',
        Status: '',
        EnrollmentNo: '',
        BatchYear: '',
        MobileNo: '',
        Tenth: '',
        Xllth: '',
        Degree: '',
        GithubProfile: '',
        LinkedInProfile: '',
        LeetCodeProfile: '',
        CodeforceProfile: '',
        CodeChefProfile: '',
        InstagramProfile: '',
        TwitterProfile: ''
      });
      setRecaptchaValue(null);
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

        {Object.keys(formData).map((key) => (
          (key !== 'Status' && key !== 'GithubProfile' && key !== 'LinkedInProfile' && key !== 'LeetCodeProfile' &&
           key !== 'CodeforceProfile' && key !== 'CodeChefProfile' && key !== 'InstagramProfile' && key !== 'TwitterProfile') && (
            <div className="flex flex-col sm:flex-row mb-2" key={key}>
              <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').trim()} <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id={key}
                type={key === 'Password' ? 'password' : 'text'}
                placeholder={`Your ${key.replace(/([A-Z])/g, ' $1').trim()}`}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          )
        ))}

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="Status">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            required
          >
            <option value="">Select your status</option>
            <option value="Student">Student</option>
            <option value="Alumini">Alumini</option>
          </select>
        </div>

        {['GithubProfile', 'LinkedInProfile', 'LeetCodeProfile', 'CodeforceProfile', 'CodeChefProfile', 'InstagramProfile', 'TwitterProfile'].map((key) => (
          <div className="flex flex-col sm:flex-row mb-2" key={key}>
            <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor={key}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={key}
              type="text"
              placeholder={`Your ${key.replace(/([A-Z])/g, ' $1').trim()}`}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="flex items-center justify-center mb-4">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptchaChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Oval color="#fff" height={20} width={20} /> : 'Sign Up'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
