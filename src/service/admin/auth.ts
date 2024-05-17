import AuthModel from "../../models/auth"


export async function loginService(email: string, password: string) {
    const getToken = AuthModel.login(email, password);
    
    return getToken;
}