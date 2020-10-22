module.exports = function (controller) {
  // wait for a new user to join a channel, then say hi
  controller.on("channel_join", async (bot, message) => {
    await bot.reply(message, "Welcome to the channel!");
  });
};
