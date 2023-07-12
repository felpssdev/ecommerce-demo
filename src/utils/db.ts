import mongoose from "mongoose"

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string)

    mongoose.connection.on('error', err => {
      throw new Error(err)
    })
  } catch (error) {
    throw new Error("connection failed!")
  }
}

export default connect
