import axios from 'axios';

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export const APIURL = `http://localhost:4000/api`;

//this is where all our api endpoints are located

// cars
export async function fetchAllCars() {
  try {
    const res = await fetch(`${APIURL}/cars`);
    const json = res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}
