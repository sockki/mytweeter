import { Thatguil, Tweet, User } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";
import { cls } from "../../lib/utils";

interface ThatguilWithUser extends Thatguil {
    user: User;
}

interface PosttweetwithUser extends Tweet {
    user: User;
    Thatguil: ThatguilWithUser[];
}

interface ITweetDetail {
    ok: boolean;
    posttweet: PosttweetwithUser;
    isLiked: boolean;
    likednum: number;
    thatednum: number;
}

interface Ithatguil {
    comment: string;
}



const TweetDetail: NextPage = () => {
    const router = useRouter();
    /// 죄측 사용자 정보
    const { user: logindata } = useUser();
    const [logout, { loading: logoutloading }] = useMutation("/api/users/logout");
    ////

    /// posttweet 정보
    const { data, mutate } = useSWR<ITweetDetail>(router.query.id ? `/api/tweet/${router.query.id}` : null);
    const [togglelike, { loading }] = useMutation(`/api/tweet/${router.query.id}/fav`);
    ///

    const { register, handleSubmit, reset } = useForm<Ithatguil>();
    const [uploadthat, { data: thatdata, loading: thatloading }] = useMutation(`/api/tweet/${router.query.id}/comment`);


    const onlogout = () => {
        logout({});
        router.replace("/log-in");
    }

    const onlikeClick = () => {
        if (!loading) {
            togglelike({});
        }
        if (!data) return;
        mutate({ ...data, isLiked: !data.isLiked, likednum: data.isLiked ? data.likednum - 1 : data.likednum + 1 }, false);
    };

    const onValid = (data: Ithatguil) => {
        if (thatloading) return;
        uploadthat(data);
    }
    useEffect(() => {
        if (thatdata && thatdata.ok) {
            reset();
            mutate();
        }
    }, [thatdata, reset])
    return (
        <div className="relative">

            <div className="fixed left-0 top-0 mt-3 ml-3 p-4 border-[1.5px] border-gray-200 rounded-lg">
                <div className="flex space-x-3">
                    <div className="w-7 h-7 bg-slate-500 rounded-full" />
                    <h1 className="font-mono text-gray-800 text-lg font-semibold">{logindata?.dbUser?.name}</h1>
                </div>
                <button className="mt-3 ml-2 px-2 rounded-3xl hover:bg-sky-200 transition duration-500" onClick={onlogout}>{logoutloading ? "Loading...." : "Log out"}</button>
            </div>

            <div className="w-full max-w-xl mx-auto relative pb-60">
                <div className="mt-3">

                    <div className="flex-col py-2 px-3 border-[1.5px]  border-gray-200 rounded-lg space-y-4 ">
                        <div className="flex  space-x-3">
                            <div className="w-6 h-6 bg-slate-500 rounded-full" />
                            <div className="flex item-center justify-center font-mono font-semibold text-sm">{data?.posttweet?.user?.name}</div>
                        </div>
                        <div className="ml-4">{data?.posttweet.content}</div>
                        <div className="ml-1 flex space-x-9">
                            <div className="flex space-x-1">
                                <button onClick={onlikeClick} className="hover:bg-sky-100 rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#808080">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997"
                                                stroke={cls(
                                                    data?.isLiked ? "#46a9e2" : "#919191"
                                                )} strokeWidth="1.5" strokeMiterlimit="10" />
                                            <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
                                                stroke={cls(
                                                    data?.isLiked ? "#46a9e2" : "#919191"
                                                )} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                </button>
                                <div className="text-[#919191]">{data?.likednum}</div>
                            </div>
                            <div className="flex space-x-1">
                                <div className="text-[#919191]">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-[#919191]">
                                    {data?.thatednum}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-3">
                        {data?.posttweet.Thatguil.map((thatguil) => (
                            <div key={thatguil.id} className="flex-col py-2 px-3 border-[1.5px]  border-gray-200 rounded-lg">
                                <div className="flex space-x-3">
                                    <div className="w-6 h-6 bg-slate-500 rounded-full" />
                                    <div className="flex item-center justify-center font-mono font-semibold text-sm">{thatguil.user.name}</div>
                                </div>
                                <div className="ml-4 mt-1">{thatguil.comment}</div>
                            </div>
                        ))}
                    </div>



                    <div className="fixed border-[1.5px] pt-8 pb-2 shadow-lg w-full max-w-xl h-28 bottom-0 rounded-t-lg bg-gray-100 hover:h-56 group hover:bg-sky-100 transition">
                        <form className="grid gap-4" onSubmit={handleSubmit(onValid)}>
                            <textarea
                                className="h-5 ml-1 border-[1.5px] border-gray-200 rounded-md shadow-sm w-3/4 mx-auto group-hover:h-32  focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                                {...register("comment",
                                    {
                                        required: true,
                                        minLength: {
                                            message: "5자 이상 입력하세요!",
                                            value: 5,
                                        }
                                    })
                                }
                            />
                            <button
                                onClick={() => mutate()}
                                className="bg-sky-500 text-gray-100 font-mono rounded-md py-1 border-black w-40 mx-auto"
                            >
                                {thatloading ? "loading...." : "Comment!"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetDetail;