import "dotenv/config";
import * as bcrypt from 'bcrypt';

import BaseModel from "./base";
import pgParams from "../database";
import logger from "../utils/logger";
import { generateAuthToken } from "../utils/utils";

interface Login{
    userId: number;
    userEmail: string;
    userPassword: string;
    userType: number;
}

class AuthModel extends BaseModel {

    private static connection = new BaseModel(pgParams)        

    public static async login(email:string, password:string){
        logger.info(`Trying to login from ${email}`)
        try{       
            console.log(this.connection);
                 
            const credentials: Login[] = await this.connection.knex('users').select({userId: 'id', userEmail: 'email', userPassword: 'password', userType:'user_type_id'}).where('email', email);
            if(credentials[0].userEmail != email){
                console.log("error");
                return
            }
            bcrypt.compare(password, credentials[0].userPassword, async (err, res) =>{
                if(err){
                    console.log(err);
                }
                if(res){
                    const authToken = await generateAuthToken(credentials[0].userId, process.env.JWT_SIGN_TOKEN);
                    console.log(authToken);
                    return authToken;
                }else{
                    console.log('password doesnot match');
                    
                }
            } )
        }catch(err){
            console.log("error");            
        }
    }
}

export default AuthModel;