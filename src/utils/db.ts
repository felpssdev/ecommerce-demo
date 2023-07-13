import mongoose from "mongoose"

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string, {
      serverSelectionTimeoutMS: 5000
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export default connect
