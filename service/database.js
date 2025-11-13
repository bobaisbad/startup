const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const eventCollection = db.collection('event');
const detailCollection = db.collection('detail');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

function getEvents() {
  // return eventCollection.find({});
  return eventCollection.find({}).toArray();
}

async function addEvent(event) {
  const { _id, ...fields} = event;
  console.log(event.time);
  console.log(event);
  try {
    await eventCollection.updateOne({ time: event.time }, { $set: fields });
  } catch (e) {
    console.log(e.message);
  }
  console.log("Got here");
}

async function getDetails() {
  // try {
  return await detailCollection.find({}).toArray();
  // } catch (e) {
  //   console.log(e.message);
  // }

  // return
}

async function addDetail(id, detail) {
  const detailJS = {
          id: id,
          detail: detail,
  };
  // users.push(user);
  return await detailCollection.insertOne(detailJS);
  // await DB.addUser(user);
}

// async function updateEvents(event) {
//   await addEvent(newScore);
//   return getEvents();
// }

// function getHighScores() {
//   const query = { score: { $gt: 0, $lt: 900 } };
//   const options = {
//     sort: { score: -1 },
//     limit: 10,
//   };
//   const cursor = scoreCollection.find(query, options);
//   return cursor.toArray();
// }

// events = [];
async function populateEvents() {
  await eventCollection.insertOne({ time: 'All Day',
              monday: { id: '', name: '' },
              // tuesday: { id: '1', name: 'Holiday - Thanksgiving' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } });

  await eventCollection.insertOne({ time: '12:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } });

  await eventCollection.insertOne({ time: '01:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } });

  await eventCollection.insertOne({ time: '02:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } });

  await eventCollection.insertOne({ time: '03:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '04:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '05:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '06:00 AM',
              // monday: { id: '2', name: 'Running' },
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '07:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '08:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '09:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '10:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '11:00 AM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '12:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '01:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '02:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '03:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '04:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '05:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '06:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '07:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '08:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '09:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '10:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  await eventCollection.insertOne({ time: '11:00 PM',
              monday: { id: '', name: '' },
              tuesday: { id: '', name: '' },
              wednesday: { id: '', name: '' },
              thursday: { id: '', name: '' },
              friday: { id: '', name: '' },
              saturday: { id: '', name: '' },
              sunday: { id: '', name: '' } })

  // await eventCollection.insertMany(events);
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getEvents,
  addEvent,
  getDetails,
  addDetail,
  populateEvents
  // updateEvents,
  // getHighScores,
};
