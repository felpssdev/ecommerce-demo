import conn from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcryptjs from 'bcryptjs'
import mongoose from "mongoose";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        mongoose.createConnection(process.env.MONGO)

        mongoose.connection.on('error', err => {
          throw new Error(err)
        })

        try {
          const user = await conn.models.User.findOne({ email: credentials.email })

          if (user) {
            const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password)

            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Wrong credentials!')
            }
          } else {
            throw new Error('User not found!')
          }
        } catch (error) {
          throw new Error(error.message)
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    error: '/profile/login'
  }
})

export { handler as POST, handler as GET }