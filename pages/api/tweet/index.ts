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
    if (req.method === "GET") {
        const { user } = req.session;
        const tweets = await db.tweet.findMany({
            include: {
                _count: {
                    select: {
                        Fav: true,
                        Thatguil: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        })
        const isLikeds = await db.fav.findMany({
            where: {
                userId: user?.id,
            },
            select: {
                tweetId:true,
            }
        }
        );
        res.json({
            ok: true,
            tweets,
            isLikeds,
        });
    }
    if (req.method === "POST") {
        const {
            body: { tweet },
            session: { user }
        } = req;
        const mytweet = await db.tweet.create({
            data: {
                content: tweet,
                user: {
                    connect: {
                        id: user?.id
                    },
                },
            },
        });
        res.json({
            ok: true,
            mytweet
        });
    }
}

export default withApiSession(handler);