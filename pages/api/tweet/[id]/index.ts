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
    const { query: { id },session: { user } } = req;
    const posttweet = await db.tweet.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            user: {
                select: {
                    name: true,
                }
            },
            Thatguil: {
                select: {
                    id:true,
                    comment: true,
                    createdAt: true,
                    user: {
                        select: {
                            id:true,
                            name: true,
                        }
                    }
                }
            }
        }
    });
    if (!posttweet) {
        return res.status(404).end();
    }
    const isLiked = Boolean(await db.fav.findFirst({
        where: {
            tweetId: posttweet?.id,
            userId: user?.id,
        },
        select: {
            id:true,
        }
    })
    );
    const liked = (await db.tweet.findFirst({
        where: {
            id: Number(id),
        },
        select: {
            Fav:true,
        }
    }));
    const likednum = liked?.Fav.length;
    const thated = await db.tweet.findFirst({
        where: {
            id: Number(id),
        },
        select: {
            Thatguil: true
        }
    })
    const thatednum = thated?.Thatguil.length;
    res.json({
        ok: true,
        isLiked,
        posttweet,
        likednum,
        thatednum,
    })
}

export default withApiSession(handler);