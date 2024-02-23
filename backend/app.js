import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';

import authRoute from './api/routes/authRoute.js'
import experiecnceRoute from './api/routes/experienceRoute.js'
import projectRoute from './api/routes/projectRoute.js'
import skillRoute from './api/routes/skillRoute.js'
import passport from 'passport';
import passportJwt from 'passport-jwt';
import User from './api/models/userModel.js'
const { ExtractJwt, Strategy: JwtStrategy } = passportJwt;

const SECRETKEY = process.env.SECRETKEY;
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 65;

const app = express();
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

//passport-jwt setup
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRETKEY;  

passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({ _id: jwt_payload.identifier });
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (err) {
            done(err, null);
        }
    })
);
// api
app.use('/api', projectRoute);
app.use('/api', skillRoute);
app.use('/api', experiecnceRoute);
app.use('/api', authRoute);
 

// MongoDB connection
mongoose.connect(MONGO_URL).then(() => {
        console.log('Connected to MongoDB');

        // Server is running after MongoDB connection

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
          
    })
    .catch((error) => {
        console.error(error);
    });


 