import React, { useState, useEffect } from "react";


const ImageFetcher = () => {
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          "http://tradeplaorg-001-site5.gtempurl.com/iaiafb/KYCDetails",
          {
            method: "POST",
            // Add any headers or body data required for the POST request
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ key: value }),
          }
        );
        const data = await response.json();

        // Assuming the base64 image data is provided in the 'image' field of the response
        const image = data.companyRegistrationCertificate;

        setImageData(image);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  if (!imageData) {
    return null; // Return null or a loading indicator if the image data is not available yet
  }

  return (
    <img src={`data:image/jpeg;base64,${imageData}`} alt="Fetched Image" />
  );
};

export default ImageFetcher;
