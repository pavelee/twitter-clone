import prisma from "@/libs/prismadb";

export const GET = async (req: Request) => {
  try {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    return new Response(JSON.stringify(users), {
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
