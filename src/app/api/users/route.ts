import { NextRequest, NextResponse } from "next/server"
import conn from "@/models/User"
import mongoose from "mongoose"

export const GET = async (_req: Request | NextRequest) => {
  try {
    mongoose.createConnection(process.env.MONGO as string)

    mongoose.connection.on('error', err => {
      console.error(err)
    })

    const users = await conn.models.User.find()

    return new NextResponse(JSON.stringify(users), { status: 200 })

  } catch (error: unknown | any) {
    return new NextResponse(error.message, { status: 500 })
  }
}