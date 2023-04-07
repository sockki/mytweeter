import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

export interface ResponseType {
    ok: boolean;
    [key: string]: any;
}


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const { user } = req.session;
    const nowuser = await db.user.findUnique({
      where: {
        id: user?.id
      }
    });
    if (!nowuser) {
      return res.status(404).end();
    }
    await req.session.destroy();
    return res.json({
        ok:true,
    })
  }
  return res.status(405).end();
}

export default withApiSession(handler);
