import React from 'react'
import Webcam from "react-webcam";


  
  const WebcamCapture = () => (

    <Webcam
      audio={false}
      height={500}
      screenshotFormat="image/jpeg"
      width={500}
      videoConstraints={{
        width: 1280,
        height: 720,
        facingMode: "user"
      }} 
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot();
            console.log(imageSrc);
          }}
        >
          CAPTURE PICTURE
        </button>
      )}
    </Webcam>
  );

export default WebcamCapture;