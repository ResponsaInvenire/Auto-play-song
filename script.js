const schedule = require("node-schedule");
const sound = require("sound-play");
const path = require("path");

schedule.scheduleJob("52 20 * * *", () => {
  const filePathMeme = path.join(__dirname, "meme.mp3");
  sound
    .play(filePathMeme)
    .then(() => console.log("Song started!"))
    .catch((err) => console.log(`Error playing audio: ${err}`));
});

schedule.scheduleJob("53 20 * * *", () => {
  const filePathSound = path.join(__dirname, "sound.mp3");
  sound
    .play(filePathSound)
    .then(() => console.log("Song started!"))
    .catch((err) => console.log(`Error playing audio: ${err}`));
});
