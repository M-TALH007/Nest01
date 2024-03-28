import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  age: { type: Number }, 
  cnic: { type: String, required: true, unique: true }, 
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  pic: { type: String }, 
  hobbies: { type: String }, 
  interests: { type: String }, 
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

export interface User extends mongoose.Document {
  name: string;
  age?: number; 
  cnic: string;
  email: string;
  password: string;
  pic?: string;
  hobbies?: string;
  interests?: string;
  role : string;
}
