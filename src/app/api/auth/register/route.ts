import conn from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import mongoose from "mongoose"

export const POST = async (req: string) => {
  const response = await req.json()
  const { name, email, password } = response

  const newUser = new conn.models.User({
    name,
    email,
    password
  })

  try {
    mongoose.createConnection(process.env.MONGO)

    mongoose.connection.on('error', err => {
      console.error(err)
    })

    await newUser.save()

    return new NextResponse("User has been created!", {
      status: 201
    })
  } catch (error) {
    return new NextResponse(console.log(error.message), {
      status: 500
    })
  }
}