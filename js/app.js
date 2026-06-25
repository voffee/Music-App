
// Variable Declaration
const songTitle = document.querySelector("#song-title");
const artistName = document.querySelector("#artist");
const songMinutes = document.querySelector("#songminutes");
const songSeconds = document.querySelector("#songseconds");
const form = document.querySelector(".song-entry");

// Event Listener Creation
form.addEventListener("submit", queueHandler);

function queueHandler(e) {
    e.preventDefault();
    console.log("Added to queue");

    const songBundle = {
        title : songTitle.value,
        artist : artistName.value,
        minutes : songMinutes.value,
        seconds : songSeconds.value,
    }

    console.log(songBundle);
}