import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response("Please provide both email and password", {
        status: 400,
      });
    }

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response("User not found", {
        status: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.pass);

    if (!isPasswordValid) {
      return new Response("Invalid credentials", {
        status: 401,
      });
    }

    const token = jwt.sign({ userId: user.user_id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    return new Response(JSON.stringify({ message: "Authenticated successfully" }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600`,
      },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(`Internal Server Error: ${error.message}`, {
      status: 500,
    });
  }
}
