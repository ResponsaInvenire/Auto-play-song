const schedule = require("node-schedule");
const sound = require("sound-play");
const path = require("path");
const fs = require("fs");

function playSound(cronTime, fileName) {
  const filePath = path.isAbsolute(fileName) 
    ? fileName 
    : path.join(__dirname, "song", fileName);

  // Check if file exists before scheduling
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Audio file not found: ${filePath}`);
    return;
  }

  console.log(`📅 Scheduling audio: "${fileName}" at cron: ${cronTime}`);

  schedule.scheduleJob(cronTime, async () => {
    try {
      console.log(`▶️ Playing: ${fileName}`);
      await sound.play(filePath);
      console.log("✅ Audio finished playing");
    } catch (err) {
      console.error(`❌ Error playing audio: ${err.message}`);
    }
  });
}

module.exports = playSound;