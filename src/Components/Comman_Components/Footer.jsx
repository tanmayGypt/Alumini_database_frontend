function Footer() {
  return (
    <div className="bg-gray-200 p-4 rounded-md text-xs relative">
      <div className="flex justify-between items-start">
        <div>
          <div>Bhagwan Parshuram Institute Of Technology, New Delhi</div>
          <div className="font-semibold my-2">Contact Us</div>
          <div className="my-2">
            Alumni Coordinator: [Coordinator Name] <br />
            E-mail: alumni@collegename.edu <br />
            Phone: (123) 456-7890
          </div>
          <div className="my-2 text-sm">
            Powered By <br />
            <span className="text-xl font-semibold">VAAVE</span>
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
              className="w-20 h-10 rounded"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div className="text-left text-xs">
          <span className="text-gray-500 ">Copyright © 2024</span>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline">
            Alumni Directory
          </a>
        </div>
        <div className="flex " style={{ marginTop: "mt-30px" }}>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img
              src="https://w7.pngwing.com/pngs/961/859/png-transparent-google-play-android-app-store-apple-android-text-rectangle-logo.png"
              alt="Play Store"
              className="w-20 h-auto rounded  "
              style={{ marginTop: "-70px" }}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "-10px" }}
          >
            <img
              src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
              alt="App Store"
              className="w-20 h-auto rounded"
              style={{ marginTop: "-60px" }}
            />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mr-4 mb-4">
        <button className="bg-green-500 text-white px-2 py-1 rounded">
          Feedback
        </button>
      </div>
    </div>
  );
}

export default Footer;
