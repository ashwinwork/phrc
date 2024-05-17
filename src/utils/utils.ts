import * as jwt from "jsonwebtoken"

export async function generateAuthToken(id: number, signToken: string) {
    const token = jwt.sign({id}, signToken)
 
    return token;
}