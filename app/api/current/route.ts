import serverAuth from "@/libs/serverAuth";

export const GET = async (req: Request) => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { currentUser } = await serverAuth(req);
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error" , { status: 500 });
  }
};