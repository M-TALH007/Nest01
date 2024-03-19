// src/users/user.schema.ts

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: { type: Number, required: true }, // Age is required
  cnic: { type: Number, required: true, unique: true }, // CNIC is required and unique
  email: { type: String, required: true, unique: true }, // Email is required and unique
  password: { type: String, required: true }, // Password is required
});

export interface User extends mongoose.Document {
  name: string;
  age: number;
  cnic: number;
  email: string;
  password: string;
}

