import { NextResponse } from "next/server";
import { connectMongoDB } from "../../DB/mongoDb";
import User from '../../models/User'
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { email, password, name } = await request.json();

    console.log(email);
    
    const FormDataApi = await User.findOne({ email });
    if (FormDataApi) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashPassword = await bcrypt.hash(password , 10 )

    const user = new User({
      name,
      email,
      password:hashPassword
    });

    await user.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
