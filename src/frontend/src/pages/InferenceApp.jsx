import React, { useState, useRef } from "react";

const InferenceApp = () => {
    const [inputImages, setInputImages] = useState([]);
    const [videoFile, setVideoFile] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const API_URL = "https://detect.roboflow.com";
    const API_KEY = "KLuysgojSyV9rMNLr20y";

    // Handle Single Image Upload
    const handleSingleImageUpload = (event) => {
        setInputImages([event.target.files[0]]);
    };

    // Handle Batch Image Upload
    const handleBatchImageUpload = (event) => {
        const files = Array.from(event.target.files).slice(0, 25);
        setInputImages(files);
    };

    // Capture from Camera
    const captureFromCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            videoRef.current.srcObject = stream;
            videoRef.current.style.display = "block";
        }).catch(error => console.error("Camera access error:", error));
    };

    const takeSnapshot = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        video.srcObject.getTracks().forEach(track => track.stop());  // Stop the camera
        const capturedImage = canvas.toDataURL("image/png");
        setInputImages([capturedImage]);
        video.style.display = "none";
    };

    // Handle Video Upload
    const handleVideoUpload = (event) => {
        setVideoFile(event.target.files[0]);
    };

    // Inference Function for Images
    const runImageInference = async () => {
        for (let image of inputImages) {
            const formData = new FormData();
            if (typeof image === "string") {
                // Convert base64 to Blob
                const blob = await (await fetch(image)).blob();
                formData.append("file", blob);
            } else {
                formData.append("file", image);
            }

            const response = await fetch(`${API_URL}`, {
                method: "POST",
                headers: { "Authorization": `Bearer ${API_KEY}` },
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Inference Result:", result);
            } else {
                console.error("Inference Error:", response.statusText);
            }
        }
    };

    // Inference Function for Video (processes frames)
    const runVideoInference = async () => {
        // Your video processing and frame inference code here
        console.log("Video inference placeholder.");
    };

    // Start Inference Based on Input Type
    const startInference = () => {
        if (inputImages.length > 0) {
            runImageInference();
        } else if (videoFile) {
            runVideoInference();
        } else {
            alert("Please upload an image, a batch of images, or a video.");
        }
    };

    return (
        <div>
            <h1>Inference App</h1>

            {/* Single Image Upload */}
            <input type="file" accept="image/*" onChange={handleSingleImageUpload} />

            {/* Camera Capture */}
            <button onClick={captureFromCamera}>Capture from Camera</button>
            <video ref={videoRef} autoPlay style={{ display: "none" }} onClick={takeSnapshot}></video>
            <canvas ref={canvasRef} width="640" height="640" style={{ display: "none" }}></canvas>

            {/* Batch Image Upload */}
            <input type="file" accept="image/*" multiple onChange={handleBatchImageUpload} />

            {/* Video Upload */}
            <input type="file" accept="video/*" onChange={handleVideoUpload} />

            {/* Run Inference Button */}
            <button onClick={startInference}>Run Inference</button>
        </div>
    );
};

export default InferenceApp;