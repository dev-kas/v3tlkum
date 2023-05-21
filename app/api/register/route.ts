import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  const existingUser = await prisma.user.findMany({
    where: {
      email: email
    }
  });
  console.log(existingUser.length);
  if (existingUser.length > 0) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     name,
  //     hashedPassword
  //   }
  // });


  // return NextResponse.json(user);
  return NextResponse.json(existingUser);
}
