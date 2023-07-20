import conn from "@/models/User"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import mongoose from "mongoose"
import connect from "@/utils/db"
import crypto from 'crypto'

export const POST = async (req: Request | NextRequest) => {
  const response = await req.json()
  const { name, email, password } = response

  const salt = crypto.randomBytes(16).toString('hex')

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('base64')

  const newUser = new conn.models.User({
    name,
    email,
    password: hashedPassword,
    id: crypto.randomBytes(16).toString('hex')
  })

  try {
    // mongoose.createConnection(process.env.MONGO as string)

    // console.log(mongoose.connection)

    // mongoose.connection.on('error', err => {
    //   console.error(err)
    // })

    await connect()

    await newUser.save()

    return new NextResponse("User has been created!", {
      status: 201
    })
  } catch (error) {
    console.log(error)
    return new NextResponse("Something went wrong when creating User!", {
      status: 500
    })
  }
}