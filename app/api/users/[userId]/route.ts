import { NextRequest } from "next/server";
import prisma from "@/libs/prismadb";

export const GET = async (req: NextRequest) => {
  try {
    const sp = req.nextUrl.searchParams;
    const userId = sp.get("userId");

    if (!userId) {
      return new Response("User ID is required", {
        status: 400,
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return new Response(JSON.stringify({
        ...user,
        followersCount,
    }), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
};
