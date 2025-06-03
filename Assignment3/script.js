// the first thing i do is to identify all the Element that can be usefull for all the selection
const dropArea = document.getElementById("dropArea");
const input = document.getElementById("videoInput");
const video = document.getElementById("videoPlayer");
const preview = document.querySelector(".video-preview");

// Handle drag over styling

// -For the drag and drop, i added the dragover when a files class got draged over the drop area
// -However when dragover the files itself will open by the browser instead of just dropped without open it.
// -So i used the preventDefault() to ensures the browser doesn't open the file
// -classList.add("dragover") migght trigger the Css to change the appearance like color changing of the border
// -So in case of that i removed the hightlight style when tthe drag ends or file is droppend
["dragenter", "dragover"].forEach((event) => {
  dropArea.addEventListener(event, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((event) => {
  dropArea.addEventListener(event, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove("dragover");
  });
});

// Handle drop
// When the dropArea got interacted by dropping the video, this section will gets triggered
// Currently, it only passes the first file to handleVideo(0).
// So to encounter this i need to add multiple files, so i replace handleVideo[0] to handleVideo(files)
dropArea.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  if (files.length) {
    handleVideo(files[0]);
  }
});

// Handle file selection via click
// This will Triggers when the users decided to selects a type of file through their drivers
//  Again, only the first files is being used. So i have to repeace with HandleVideo(input.files) for multiple upload.
input.addEventListener("change", () => {
  if (input.files.length) {
    handleVideo(input.files[0]);
  }
});

// Ok for Displaying a single Video i need to make sure it have a file types.
// so i created a function where it will skip the files that aren't videos.
// Also an URL to preview video is also necessary since theere it no Server to upload.
// However, the problems i am having is the site can upload only one video, and when i upload a new one it will replace instead of side-by-side.
// So to add a new one i have to appends it by suing the innerHTML tag.
// with the help of the innerHTML i can append the previous videos at the same time without overwriting the code.
function handleVideo(file) {
  if (!file.type.startsWith("video/")) {
    alert("Please upload a valid video file.");
    return;
  }

  const videoURL = URL.createObjectURL(file);
  let newVideo = ` <video id="videoPlayer" src="${videoURL}" controls></video>`;
  console.log(newVideo);
  preview.innerHTML += newVideo;
  // video.src = videoURL;
  // video.load();
  // video.play();
  // preview.style.display = "block";
}

// I created this for the sites, to have multiple upload purposes, uploading multiple video at once.
// the HandleVideos is designed for multiple uploads.
// with the Converter, i Converts FIleList into an Array because FileList giving you object, not a real Javascript Array 
// This dynamically createds a video elements than can be use for DOM (it is safer, with no messy string HTML, giving the full control over the element)
// appendChild(videoEl) is once you created a video elements, you still need to put it into the page, this help me to add a new video in my preview areas.
function handleVideos(fileList) {
  Array.from(fileList).forEach((file) => {
    if (!file.type.startsWith("video/")) {
      alert(`"${file.name}" is not a valid video file.`);
      return;
    }

    const videoURL = URL.createObjectURL(file);

    const videoEl = document.createElement("video");
    videoEl.src = videoURL;
    videoEl.controls = true;
    console.log(videoEl);
    previewContainer.appendChild(videoEl);
  });
}
