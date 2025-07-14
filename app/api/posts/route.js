import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");


  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return NextResponse.json({ message: "user saved!" }, { status: 201 });
}
