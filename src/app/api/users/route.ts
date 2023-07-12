import connect from "@/utils/db"
import { NextResponse } from "next/server"
import User from "@/models/User"

export const GET = async (req) => {
  try {
    await connect()

    const users = await User.find()

    return new NextResponse(JSON.stringify(users), { status: 200 })

  } catch (error) {
    return new NextResponse(error.message, { status: 500 })
  }
}