import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signupData, setSignupData] = useState(null);

  useEffect(() => {
    // Retrieve signup data from localStorage
    const storedData = localStorage.getItem('signupData');
    if (storedData) {
      setSignupData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!signupData) {
      toast.error('No signup data found.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://alumnibackend.up.railway.app/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Email': signupData.email, // email from local storage
          'OTP': otp, // Include OTP from input
        },
        body: JSON.stringify({
          FirstName: signupData.firstName,
          LastName: signupData.lastName,
          Fathername: signupData.fatherName,
          Password: signupData.password,
          Status: signupData.status,
          Branch: signupData.branch,
          BatchYear: parseInt(signupData.batchYear),
          MobileNo: signupData.mobileNo,
          Email: signupData.email,
          EnrollmentNo: signupData.enrollmentNo,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message === 'OTP verified successfully') {
          toast.success('OTP verified successfully');
          localStorage.removeItem('signupData');
          window.location.href = '/login';
        } else {
          toast.error(data.message || 'Unexpected response message');
        }
      } else {
        switch (response.status) {
          case 400:
            toast.error(data.message || 'Bad Request: Email and OTP are required');
            break;
          case 401:
            if (data.message === 'Invalid OTP') {
              toast.error('Invalid OTP');
            } else if (data.message === 'OTP has expired') {
              toast.error('OTP has expired');
            } else {
              toast.error('Unauthorized: Invalid OTP or OTP has expired');
            }
            break;
          case 500:
            toast.error(data.error || 'Internal Server Error');
            break;
          default:
            toast.error('An unexpected error occurred');
            break;
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(`OTP verification failed. Please try again later. Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex mt-20 items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mx-auto">Verify OTP</h2>
        <p className='text-gray-500 text-xs py-3'>Please enter the OTP sent to your email</p>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="otp">
            OTP <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="otp"
            name="otp"
            type="text"
            value={otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          {isLoading ? (
            <Oval color="#00BFFF" height={30} width={30} />
          ) : (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Verify OTP
            </button>
          )}
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default VerifyOTP;
