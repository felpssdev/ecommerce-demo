import conn from "@/models/User"
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import mongoose from "mongoose"

export const POST = async (req: string) => {
  const response = await JSON.parse(req)
  const { name, email, password } = response

  const hashedPassword = await bcryptjs.hash(password, 5)

  const newUser = new conn.models.User({
    name,
    email,
    password: hashedPassword
  })

  try {
    mongoose.createConnection(process.env.MONGO as string)

    mongoose.connection.on('error', err => {
      console.error(err)
    })

    await newUser.save()

    return new NextResponse("User has been created!", {
      status: 201
    })
  } catch (error) {
    return new NextResponse("Something went wrong when creating User!", {
      status: 500
    })
  }
}