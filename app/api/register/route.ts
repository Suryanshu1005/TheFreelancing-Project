
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcrypt';

export async function GET(){
    // ....
}

/**
 * Register API 
 * @param req NextRequest 
 */
export async function POST(req: NextRequest){
    try {
        const {username, email, password} = await req.json();
        console.log(req.json());

        /**
         * Hasing the request password
         *@constant hashedPassword 
         */
        const hashedPassword = await bcrypt.hash(password, 10);


        // Send a response with a custom status code (e.g., 201 for Created)
        return NextResponse.json({
            
                username,
                email,
                hashedPassword
            }, {
            status : 201
            });

    } catch (error) {

        // Handle errors and send an appropriate response
        return NextResponse.json({ error: 'Internal Server Error' },{
            status : 500
        });
    }
}