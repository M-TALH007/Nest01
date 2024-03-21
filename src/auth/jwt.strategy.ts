// src/auth/passport.local.strategy

import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";


@Injectable()
// jis ko injectable bnate h usko module me providers me likhte h 
// define out strategy which we want to use in our jwt
export class passportJwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({

            jwtFromRequest: ExtractJwt.fromBodyField("auth"),
          
            ignoreExpiration: false,
          
            secretOrKey: 'My secret key is learn jwt'
          
          });
      }

      async validate(payload:any):Promise<any> {
      return payload;
      }
      

}