// src/pages/ScanPage.tsx
import React, { useState } from 'react';

const ScanPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // You can handle the image processing logic here
    if (selectedFile) {
      console.log("Uploaded file:", selectedFile);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Scan Your Produce</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="my-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#EC8516] text-black w-[200px] rounded-md font-medium my-6 py-3"
      >
        Upload
      </button>
    </div>
  );
};

export default ScanPage;
