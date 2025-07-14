import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const team = await prisma.team.findMany();
  return NextResponse.json(team);
}

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const members = parseInt(formData.get("members"));
  const member1 = formData.get("member1");
  const member2 = formData.get("member2");
  const member3 = formData.get("member3");
  const member4 = formData.get("member4");
  const member5 = formData.get("member5");
  const member6 = formData.get("member6");
  const member7 = formData.get("member7");

    if (!name || !members || !member1 || !member2 || !member3 || !member4 || !member5 ) {
        return NextResponse.json({message:"at least 5 players are required"}, {status: 400});
    }
   
    const team = await prisma.team.create({
        data:{
            name,
            members,
            member1,
            member2,
            member3,
            member4,
            member5,
            member6,
            member7
        }
    });

    return NextResponse.json({message:"team created successfully"}, {status: 201});
}
