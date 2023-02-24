const {
  client,
  // declare your model imports here
  // for example, User
} = require('.');

async function dropTables() {
  try {
    console.log('Dropping all tables...');
    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS cars;
    DROP TABLE IF EXISTS make;
    DROP TABLE IF EXISTS model; 
    DROP TABLE IF EXISTS selectedCars;
    DROP TABLE IF EXISTS type;
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS photos;
    DROP TABLE IF EXISTS users;
    `);

    console.log('finished dropping tables!');
  } catch (error) {
    console.error('Error dropping tables...');
    throw error;
  }
}

async function createTables() {
  try {
    console.log('Starting to create tables...');
    await client.query(`
    CREATE TABLE cars (
      id SERIAL PRIMARY KEY, 
      description TEXT,
      isFavorite BOOLEAN DEFAULT false, 
      price INTEGER,
      year INTEGER,
      "typeId" INTEGER REFERENCES type(id),
      "makeId" INTEGER REFERENCES make(id),
      "usersId" INTEGER REFERENCES users(id),
      color VARCHAR(255),
      mileage INTEGER,
      UNIQUE ("typeId", "makeId", "userId") 
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY, 
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      isAdmin BOOLEAN DEFAULT false
    );

    CREATE TABLE make (
      id SERIAL PRIMARY KEY, 
      name VARCHAR(255) NOT NULL
    );

    CREATE TABLE model (
      id SERIAL PRIMARY KEY, 
      name VARCHAR(255) NOT NULL,
      "makeId" INTEGER REFERENCES make(id)
    );

    CREATE TABLE type (
      id SERIAL PRIMARY KEY, 
      name VARCHAR(255) NOT NULL
    );

    CREATE TABLE selectedCars (
      id SERIAL PRIMARY KEY, 
      "carsId" INTEGER REFERENCES cars(id)
    );

    CREATE TABLE cart (
      id SERIAL PRIMARY KEY, 
      "selectedCars" INTEGER REFERENCES selectedCars(id),
      "usersId" INTEGER REFERECNES users(id)
    );

    CREATE TABLE photos (
      id SERIAL PRIMARY KEY, 
      "carsId" INTEGER REFERENCES cars(id),
      image TEXT
    );
    `); //use the string of the text to the url link to image
    //could download image to then add to source file on here
    console.log('finished creating tables!');
  } catch (error) {
    console.error('Error in creating tables...');
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    const usersToCreate = [
      { username: 'bobby', password: 'bobby123', isAdmin: true},
      { username: 'ana', password: 'ana123456', isAdmin: false },
      { username: 'zack', password: 'zack123456', isAdmin: true }
    ];
    const users = await Promise.all(usersToCreate.map(createUser)); //don't forget to write this function "createUser"

    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error("Error creating users...");
    throw error;
  }
}

async function createInitialMakes() {
  try {
    console.log("Starting to create makes");
    const makesToCreate = 
  } catch (error) {
    
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());