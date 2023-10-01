import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(
  req: Request,
  res: Response
) {
  try {
    const body = await req.json();
    const { email, username, name, password } = body;

    console.log(password);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    });

    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
