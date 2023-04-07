import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface Ilogin {
    ok: boolean;
    dbUser: User;
  }

export default function useUser(){
    const {data, error} = useSWR<Ilogin>("/api/users/me");
    const router = useRouter();
    useEffect(() => {
        if(data && !data.ok) {
            router.replace("/log-in");
        }
    },[data,router]);
    //return router.replace("/enter");
    return {user: data, isLoading: !data && !error};
}