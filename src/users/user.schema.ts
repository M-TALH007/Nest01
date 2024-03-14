// src/users/user.schema.ts

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  cnic : Number,
});

export interface User extends mongoose.Document {
  name: string;
  age: number;
  cnic : Number;
}
