import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import userRoute from './api/routes/userRoute.js'
import passport from 'passport';
import passportJwt from 'passport-jwt';

const { ExtractJwt, Strategy: JwtStrategy } = passportJwt;

const SECRETKEY = process.env.SECRETKEY;
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 65;

const app = express();
app.use(cors());
app.use(express.json());

//passport-jwt setup
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRETKEY; // Corrected the property name

passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        UserActivation.findOne({_id: jwt_payload.identifier}, function (err, user){
            if(err){
                done(err, false);
            }
            if(user){
                done(null, user);
            }
            else{
                done(null, false);
            }
        })
    })
);

// api
app.use('/api', userRoute);

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


 