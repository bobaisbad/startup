const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

let users = [];
let events = [];
let details = {};

events.push({ time: 'All Day',
            monday: { id: '', name: '' },
            // tuesday: { id: '1', name: 'Holiday - Thanksgiving' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '12:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '01:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '02:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '03:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '04:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '05:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '06:00 AM',
            // monday: { id: '2', name: 'Running' },
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '07:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '08:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '09:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '10:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '11:00 AM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '12:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '01:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '02:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '03:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '04:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '05:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '06:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '07:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '08:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '09:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '10:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

events.push({ time: '11:00 PM',
            monday: { id: '', name: '' },
            tuesday: { id: '', name: '' },
            wednesday: { id: '', name: '' },
            thursday: { id: '', name: '' },
            friday: { id: '', name: '' },
            saturday: { id: '', name: '' },
            sunday: { id: '', name: '' } })

// console.log(events);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

DB.populateEvents();

apiRouter.post('/auth/register', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        await DB.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

apiRouter.get('/events', verifyAuth, async (_req, res) => {
    //////////////////////////////////////////
    const events = await DB.getEvents(); ////////////////////////////////
    //////////////////////////////////////////
    res.send(events);
});

apiRouter.post('/event', verifyAuth, async (req, res) => {
    await DB.addEvent(req.body);
    const events = await DB.getEvents();
    // const events = updateEvents(req.body);
    // events = req.body;

    console.log(`Newly posted events:`);
    console.log(events);

    res.send(events);
});

apiRouter.get('/details', verifyAuth, async (_req, res) => {
    // const details = updateEvents(req.body);
    //////////////////////////////////////////
    const details = await DB.getDetails();
    //////////////////////////////////////////
    res.send(details);
});

apiRouter.post('/detail', verifyAuth, async (req, res) => {
    let detail = req.body;

    DB.addDetail(detail.id, detail);

    // console.log(`Newly posted detail:`);
    // console.log(detail);
    // console.log(detail.id)

    // details[detail.id] = detail;

    // console.log(`Newly posted details:`);
    // console.log(details);

    res.send(detail);
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// async function updateScores(newScore) {
//   await DB.addScore(newScore);
//   return DB.getHighScores();
// }

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    // users.push(user);
    await DB.addUser(user);

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === 'token') {
        return DB.getUserByToken(value);
    }

    // return users.find((u) => u[field] === value);
    return DB.getUser(value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});