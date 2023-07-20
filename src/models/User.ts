import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  id: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

const conn = mongoose.createConnection(process.env.MONGO as string)
conn.model('User', userSchema)

export default conn
