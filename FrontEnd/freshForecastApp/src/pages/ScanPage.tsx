import React, { useState } from "react";
import FreshProduceImage from "../assets/pic1.jpg"; // Import the image

const ScanPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("Uploaded file:", selectedFile);
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col py-20 items-center relative px-4"
      style={{ backgroundImage: `url(${FreshProduceImage})` }} // Use the imported image
    >
      {/* Main content container with overlay */}
      <div className="absolute inset-0">
        {/* Semi-transparent black overlay covering the full height */}
        <div className="h-full w-full bg-black opacity-75" />
      </div>

      {/* Moved the card higher */}
      <div className="max-w-[600px] w-full bg-[#ffffff] rounded-3xl shadow-md p-8 text-center relative z-10 mt-10"> {/* Added relative and z-10 to ensure it appears above the overlay */}
        <h1 className="text-[#B33F62] text-3xl font-bold mb-6">Scan Your Produce</h1>
        <p className="text-[#2A3340] text-lg mb-4">
          Upload an image of your produce, and let us help you assess its quality.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="my-4 w-full border border-[#2A3340] rounded-md p-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#EC8516] text-black w-full rounded-md font-medium py-3 mt-6 hover:bg-[#d97614]"
        >
          Upload
        </button>
        {selectedFile && (
          <p className="text-sm text-[#2A3340] mt-4">Selected File: {selectedFile.name}</p>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
