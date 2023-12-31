module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  equal: (value, title) => {
    return value === title;
  },
  getGardenID: (logs) => {
    return logs[0] ? logs[0].garden_id : null;
  },
  getGardenName: (logs) => {
    return logs[0] ? logs[0]['garden.name'] : '';
  }
};
