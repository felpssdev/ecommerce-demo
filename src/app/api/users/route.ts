import { NextResponse } from "next/server"
import conn from "@/models/User"
import mongoose from "mongoose"

export const GET = async (_req: string) => {
  try {
    mongoose.createConnection(process.env.MONGO)

    mongoose.connection.on('error', err => {
      console.error(err)
    })

    const users = await conn.models.User.find()

    return new NextResponse(JSON.stringify(users), { status: 200 })

  } catch (error) {
    return new NextResponse(error.message, { status: 500 })
  }
}