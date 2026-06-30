
// Variable Declaration
const songTitle = document.querySelector("#song-title");
const artistName = document.querySelector("#artist");
const songMinutes = document.querySelector("#songminutes");
const songSeconds = document.querySelector("#songseconds");
const form = document.querySelector(".song-entry");

const queueContainer = document.querySelector(".queue-container");
const nowPlayingContainer = document.querySelector(".now-playing-container");

let idCount = 0;
const canonicalQueue = [];

// Event Listener Creation
form.addEventListener("submit", queueHandler);
queueContainer.addEventListener("click", buttonHandler);

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
    nowPlayingConstructor(canonicalQueue[0]);

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
    duplicatedCanonicalQueue.forEach((element, index) => {
        const newSong = document.createElement('div');
        let songIndex = index + 1;
        newSong.classList.add('song-container');
        newSong.innerHTML = `
         <p class="montserrat-small">${songIndex}</p>
                <p class="montserrat-medium">${element.title}</p>
                <p class="montserrat-small">${element.artist}</p>
                <div>
                    <p class="montserrat-small">${element.minutes}: </p>
                    <p class="montserrat-small">${element.seconds}</p>
                </div>
                <input type="button" value="Move to top" class="montserrat-small" data-action="move-to-top">
                <input type="button" value="Remove" class="montserrat-small" data-action="remove">
        `;
        newSong.dataset.musicid = songIndex;
        queueContainer.appendChild(newSong);
    });
    // console.log(duplicatedCanonicalQueue[idCount]);
}

// Now Playing Constructor Function
function nowPlayingConstructor(passedData) {
    nowPlayingContainer.innerHTML = `
            <p class="opensans-small">Now Playing</p>
            <p class="montserrat-medium">${passedData.title}</p>
            <p class="montserrat-small">${passedData.artist}</p>
            <p class="montserrat-small">${passedData.minutes}: </p>
            <p class="montserrat-small">${passedData.seconds}</p>
    `;
}

// Button Handler Function
function buttonHandler(e) {
    switch(e.target.dataset.action) {
        case "move-to-top":
            console.log("move to top");
            moveSong(e.target.closest(".song-container"));

            break;
        case "remove":
            // console.log("remove");
            removeSong(e.target.closest(".song-container"));
            queueConstructor(canonicalQueue);
            nowPlayingConstructor(canonicalQueue[0]);
            break;

        default:
            console.log("invalid click");
    }
}

function removeSong(passedData) {
    // console.log(passedData);
    // passedData.dataset.musicid;
    canonicalQueue.splice(passedData.dataset.musicid - 1, 1);
}

function moveSong(passedData) {
    // canonicalQueue
}