import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: IForm) => {
    if (!loading) {
      setLoading(true);
      const request = await fetch("/api/users/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (request.status === 200) {
        alert("Account already exists! Please log in!");
      }
      if (request.status === 201) {
        alert("Account created! Please log in!");
      }
      if (request.status !== 405) {
        router.push("/log-in");
      }

      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-center pt-1 pb-2  rounded-b-md shadow-md text-2xl text-gray-100 bg-sky-300">
        Create account
      </div>
      <form
        className="mt-6 flex-col space-y-3"
        onSubmit={handleSubmit(onValid)}
      >
        <div>
          <div className="flex space-x-2 items-center justify-center">
            <label
              className="font-mono text-lg text-gray-500"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="border-[1.5px] w-2/3 p-1 pl-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
              type="text"
              {...register("name", { required: "Write your name please." })}
            />
          </div>
          <span className="ml-36 font-mono text-sky-700">{errors?.name?.message}</span>
        </div>
        <div>
          <div className="flex space-x-2 items-center justify-center">
            <label
              className="font-mono text-lg text-gray-500"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="border-[1.5px] w-2/3 p-1 pl-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
              type="email"
              {...register("email", { required: "Write your email please." })}
            />
          </div>
          <span className="ml-36 font-mono text-sky-700">{errors?.email?.message}</span>
        </div>
        <div className="flex items-center justify-center">
          <button className="mt-5 w-2/5 rounded-lg bg-sky-300 text-gray-100 text-lg hover:bg-sky-600">Create Account</button>
        </div>
      </form>
    </div>
  );
};
