
// Variable Declaration
const songTitle = document.querySelector("#song-title");
const artistName = document.querySelector("#artist");
const songMinutes = document.querySelector("#songminutes");
const songSeconds = document.querySelector("#songseconds");
const form = document.querySelector(".song-entry");

const queueContainer = document.querySelector(".queue-container");
const songContainer = document.querySelector(".song-container");

let idCount = 0;
const canonicalQueue = [];

// Event Listener Creation
form.addEventListener("submit", queueHandler);
console.log(songContainer);

// Queue Handler Function
function queueHandler(e) {
    e.preventDefault();
    console.log("Added to queue");

    const songBundle = {
        title : songTitle.value,
        artist : artistName.value,
        minutes : songMinutes.value,
        seconds : songSeconds.value,
        songID : idCount,
    }

    idCount = idCount + 1;

    bundler(songBundle);
    queueConstructor(canonicalQueue);
    console.log(songBundle);
    console.log(canonicalQueue);
}

// Song Bundler Function
function bundler(passedSong) {
    canonicalQueue.push(passedSong);
}

// Queue Constructor Function
function queueConstructor(passedBundle) {
    
    songContainer.innerHTML = `
        <p class="montserrat-small">${passedBundle.songID}</p>
        <p class="montserrat-medium">${passedBundle.title}</p>
        <p class="montserrat-small">${passedBundle.artist}</p>
        <p class="montserrat-small">${passedBundle.minutes}: </p>
        <p class="montserrat-small">${passedBundle.seconds}</p>
        <input type="button" value="Move to top" class="montserrat-small">
        <input type="button" value="Remove" class="montserrat-small">
        `;
}