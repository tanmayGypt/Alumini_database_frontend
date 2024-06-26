function Footer() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-lg font-bold mb-2">
            Bhagwan Parshuram Institute Of Technology, New Delhi
          </div>
          <div className="font-semibold text-yellow-400 mb-2">Contact Us</div>
          <div className="mb-2">
            <div>Alumni Coordinator: [Coordinator Name]</div>
            <div>Email: alumni@collegename.edu</div>
            <div>Phone: (123) 456-7890</div>
          </div>
          <div className="text-sm">
            Powered By <br />
            <span className="text-xl font-semibold text-yellow-400">VAAVE</span>
          </div>
        </div>
        <div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-tVE-R6e5Uw_LRnOl1kC5MMXciei-j0VQ&s"
              alt="LinkedIn"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
        <div className="text-left text-xs space-x-2">
          <span className="text-gray-400">Copyright © 2024</span>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-yellow-400">
            Disclaimer
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-yellow-400">
            Terms of Use
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-yellow-400">
            Alumni Directory
          </a>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://w7.pngwing.com/pngs/961/859/png-transparent-google-play-android-app-store-apple-android-text-rectangle-logo.png"
              alt="Play Store"
              className="w-24 h-auto"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
              alt="App Store"
              className="w-24 h-auto"
            />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mr-4 mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300">
          Feedback
        </button>
      </div>
    </div>
  );
}

export default Footer;
