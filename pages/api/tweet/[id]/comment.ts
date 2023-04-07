import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../lib/withSession";
import db from "../../../../lib/db";

export interface ResponseType {
    ok: boolean;
    [key: string]: any;
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const { query: {id}, session: { user }, body: {comment} } = req;
    const posttweet = await db.tweet.findUnique({
        where: {
            id: Number(id),
        },
    });
    if(!posttweet) {
        return res.status(404).end();
    }

    const newThatguil = await db.thatguil.create({
        data: {
            user: {
                connect: {
                    id: user?.id,
                },
            },
            tweet: {
                connect: {
                    id: Number(id),
                }
            },
            comment:comment,
        }
    })
    console.log(newThatguil)
    res.json({
        ok: true,
        thatguil:newThatguil,
    })
}

export default withApiSession(handler);