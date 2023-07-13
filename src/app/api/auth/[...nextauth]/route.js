import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect()

        try {
          const user = User.findOne({ email: credentials.email })

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

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
    })
  ],
  pages: {
    error: '/profile/login'
  }
})

export { handler as POST, handler as GET }