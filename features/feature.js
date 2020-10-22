module.exports = function (controller) {
  // use a function to match a condition in the message
  // listen for a message containing the word "hello", and send a reply
  controller.hears("hello", "message", async (bot, message) => {
    // do something!
    await bot.reply(message, "Hello human");
  });
};
