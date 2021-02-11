const seedUsers = require('./users-seeds');
const seedBoard = require('./board-seed')

const sequelize = require('../../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBoard();
  console.log('\n----- BOARD SEEDED -----\n');

  process.exit(0);
};

seedAll();