import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, password, markacc } = await req.json();

    // Input validation
    if (!email || !firstName || !lastName || !password) {
      console.log(req.body)
      return new Response("Please provide all feilds", {
        status: 400,
      })
    }

    // prevent duplicate email
    const user = await prisma.users.findUnique({
      where: { email },
    });
    if(user) {
      return new Response("User with email already exists", {
        status: 400,
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: { email, firstName, lastName, pass: hashedPassword, markacc },
    });

    return Response.json(newUser)
  } catch (error) {
    console.error(error);
      return new Response(`Internal Server Error: ${error}`, {
        status: 500,
      })
  }
}
