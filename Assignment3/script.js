const dropArea = document.getElementById("dropArea");
const input = document.getElementById("videoInput");
const video = document.getElementById("videoPlayer");
const preview = document.querySelector(".video-preview");

// Handle drag over styling
["dragenter", "dragover"].forEach(event => {
    dropArea.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.add("dragover");
    });
});

["dragleave", "drop"].forEach(event => {
    dropArea.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.remove("dragover");
    });
});

// Handle drop
dropArea.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    if (files.length) {
        handleVideo(files[0]);
    }
});

// Handle file selection via click
input.addEventListener("change", () => {
    if (input.files.length) {
        handleVideo(input.files[0]);
    }
});

function handleVideo(file) {
    if (!file.type.startsWith("video/")) {
        alert("Please upload a valid video file.");
        return;
    }

    const videoURL = URL.createObjectURL(file);
    video.src = videoURL;
    video.load();
    video.play();
    preview.style.display = "block";
}

function handleVideos(fileList) {
    Array.from(fileList).forEach(file => {
        if (!file.type.startsWith("video/")) {
            alert(`"${file.name}" is not a valid video file.`);
            return;
        }

        const videoURL = URL.createObjectURL(file);

        const videoEl = document.createElement("video");
        videoEl.src = videoURL;
        videoEl.controls = true;

        previewContainer.appendChild(videoEl);
    });
}

