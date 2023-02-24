const client = require('./client');
const bcrypt = require('bcrypt');

async function createUser({ username, password }) {
  const SALT_COUNT = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *
        `,
      [username, hashedPassword]
    );

    delete user.password;

    return user;
  } catch (error) {
    console.error('error creating users in users.js', error);
  }
}

module.exports = {
  createUser,
};
