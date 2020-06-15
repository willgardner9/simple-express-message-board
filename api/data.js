var moment = require('moment');

const messages = [
    {
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      user: "Amando",
      formatted: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ex at elit placerat sollicitudin sed in lectus. Vivamus at semper nibh.",
      user: "Charles",
      formatted: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
    }
  ];

module.exports = messages;