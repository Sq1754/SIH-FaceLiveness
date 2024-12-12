        // Initialize the webcam
        async function setupWebcam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user" } // user for front camera, environment for rear camera
                });
                const videoElement = document.getElementById('videoFeed');
                videoElement.srcObject = stream;
            } catch (error) {
                console.error('Error accessing webcam:', error);
                alert('Unable to access the camera. Please ensure it is connected and allowed.');
            }
        }
