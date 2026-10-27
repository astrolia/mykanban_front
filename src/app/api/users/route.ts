import { NextResponse } from "next/server";
import {userService} from "../../../services/userService";


export async function POST(resquest: Request){

    const service = new userService;

    try{
        const body = await resquest.json();

        const result = await service.registerUser(body);

        return NextResponse.json(result, {status: 201})

    }catch(error: any){

        return NextResponse.json({error: error.message}, {status: 400});

    }

}