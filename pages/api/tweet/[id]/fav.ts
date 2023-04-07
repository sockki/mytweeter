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
    const { query: { id }, session: { user } } = req;

    const tweet = await db.tweet.findUnique({
        where: {
            id: Number(id),
        },
    });
    if (!tweet) {
        console.log(tweet)
    }

    const alreadylikes = await db.fav.findFirst({
        where: {
            tweetId: Number(id),
            userId: user?.id,
        }
    })
    if (alreadylikes) {
        await db.fav.delete({
            where: {
                id: alreadylikes.id,
            }
        })
    }
    else {
        await db.fav.create({
            data: {
                user: {
                    connect: {
                        id: user?.id
                    }
                },
                tweet: {
                    connect: {
                        id: Number(id),
                    }
                }
            }
        })
    }
    res.json({ ok: true});
}

export default withApiSession(handler);