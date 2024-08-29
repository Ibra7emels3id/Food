import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../models/User";
import { connectMongoDB } from "../../../DB/mongoDb";
import bcrypt from 'bcrypt'



export const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await connectMongoDB()

                const user = await User.findOne({ email: credentials.email })
        
                if (user) {
                    const HashPassword = await bcrypt.compare(credentials.password , user.password)
                    if (HashPassword){
                        return user
                    }
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.SUCRETURN_SEC
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };