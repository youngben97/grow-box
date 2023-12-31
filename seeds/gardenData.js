const { Garden } = require('../models');

const gardenData = [
  {
    id: 1,
    name: 'Tomato Plant',
    user_id: 1
  },
  {
    id: 2,
    name: 'Potato Plant',
    user_id: 1
  }
];

const seedGarden = () => Garden.bulkCreate(gardenData);

module.exports = seedGarden;
