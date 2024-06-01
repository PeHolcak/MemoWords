import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // res.status(200).json({ message: 'Hello from Next.js!' })

  return NextResponse.json(
    { data: "perfect" },
    {
      status: 200
    }
  );
}