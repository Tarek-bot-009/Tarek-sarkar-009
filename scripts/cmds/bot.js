const fs = require("fs-extra");
module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
		countDown: 5,
		role: 0,
		shortDescription: "badol",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Hey You, Yes You, You Are So Beautiful", "i Love You🙂", "Yes Dear, I Am Here...😗", "I Love you", "Miss YoU Beppy", "😁Smile I am Taking Selfy✌️🤳", "নে আমার বস তারেক এর মেসেঞ্জার লিংক ওরে মেসেজ দে https://m.me/tarek.20.king", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "I See You Inside Everyone", "That's Why I Love Everyone As More As You🤭", "আমাকে এতো না ডেকে আমার বস তারেক কে একটা গার্লফ্রেন্ড দেও", "ফুল সুন্দর তার থেকে বেশি সুন্দর তুমি কারন তুমি আমার না হওয়া মায়াবী মহারানী", "আমি আপনাকে কিভাবে সাহায্য করতে পারি...? 🤔", "~লিখতে পারি না বলে তোমাকে তুলি না কলমে, যে ব্যথা যায় না দেখা তা কি করে সারাবে মলমে!🙂", "হুম শুনছি আমি আপনি বলুন 😐", "আমার সব কমান্ড দেখতে *help টাইপ করুন ✅", "—বৃষ্টি তুমি ছুঁয়ে দাও তারে! প্রতিটা ফোঁটায় আমি অনুভব করি যারে..😊", "আদেশ করুন যাহাপানা 😎", "আবার যদি আমারে বট কইয়া ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏", "ami tarek er personal assistant", "তুই বট তোর নানি বট 😤 তোর কত বড় সাহস তুই আমারে বট কস 😤 তোর টা খাই নাকি পড়ি যে তুই আমারে বট কস 😤", "আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨", "ডাকছোত কেন ফাস্ট কো 😒", "তুমি কি আমাকে ডেকেছো...? 😇"];

    var B4D9L = Messages[Math.floor(Math.random() * Messages.length)]
  
  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "বট") || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: ` ${B4D9L}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
