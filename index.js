async function setupWebcam() {
    try {
        // Request permission to access the camera and get the stream from any available video input device
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Attach the stream to the video element
        const videoFeed = document.getElementById('videoFeed');
        videoFeed.srcObject = stream;

    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access the camera. Please ensure it is connected and allowed.');
    }
}
