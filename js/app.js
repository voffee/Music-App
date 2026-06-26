
// Variable Declaration
const songTitle = document.querySelector("#song-title");
const artistName = document.querySelector("#artist");
const songMinutes = document.querySelector("#songminutes");
const songSeconds = document.querySelector("#songseconds");
const form = document.querySelector(".song-entry");

const queueContainer = document.querySelector(".queue-container");
// const songContainer = document.querySelector(".song-container");

let idCount = 0;
const canonicalQueue = [];

// Event Listener Creation
form.addEventListener("submit", queueHandler);

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

    bundler(songBundle);
    queueConstructor(canonicalQueue);

    idCount = idCount + 1;
}

// Song Bundler Function
function bundler(passedSong) {
    canonicalQueue.push(passedSong);
}

// Queue Constructor Function
function queueConstructor(passedData) {
    const duplicatedCanonicalQueue = [...passedData];
    queueContainer.innerHTML = ``;
    duplicatedCanonicalQueue.forEach(element => {
        const newSong = document.createElement('div');
        newSong.classList.add('song-container');
        newSong.innerHTML = `
        <p class="montserrat-small">${element.songID}</p>
        <p class="montserrat-medium">${element.title}</p>
        <p class="montserrat-small">${element.artist}</p>
        <p class="montserrat-small">${element.minutes}: </p>
        <p class="montserrat-small">${element.seconds}</p>
        <input type="button" value="Move to top" class="montserrat-small">
        <input type="button" value="Remove" class="montserrat-small">
        `;
        queueContainer.appendChild(newSong);
    });
    console.log(duplicatedCanonicalQueue[idCount]);
}