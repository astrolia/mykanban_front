import { error } from "console"
import {User} from "../types/user"

export class userService{

    async registerUser(data: User){
        if(data.email.includes('@') || data.email.includes(".")){
            throw new Error("Formato de email invalido");
        }

        return {success: true, message: "Usuario cadastrado"};
    }

}