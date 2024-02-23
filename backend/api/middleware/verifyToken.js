import dotenv from 'dotenv';
dotenv.config();
 import User from '../models/userModel';
import passport from 'passport';
import passportJwt from 'passport-jwt';

const { ExtractJwt, Strategy: JwtStrategy } = passportJwt;

const SECRETKEY = process.env.SECRETKEY;



//passport-jwt setup
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRETKEY; // Corrected the property name

 passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
        try{
           const user =  User.findOne({_id: jwt_payload.identifier});
                
                if(user){
                    done(null, user);
                }
                else{
                    done(null, false);
                }
        } catch(err) {
            if(err) {
                done(err, null);
            }
        }
       
    })
);
