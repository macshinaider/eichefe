"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CgEyeAlt } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import Cookie from "js-cookie"

import { toast } from "react-toastify";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { UserFindId } from "../api/user/find/fetch";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

type CreateUserFormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter()

  async function SinginF(data: any) {
    const res = await api.post("/api/user/signin", data);
    return res.data;
  }

  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: CreateUserFormData) => {
    try {
      const res = await SinginF(data);
      console.log(res);
      if (res) {
        toast.success("Login Efetuado com Sucesso !");
        setTimeout(async () => {
          Cookie.set("token", res.token)
          const iduser = await UserFindId(data.email)         

          router.push(`/userkey/${iduser.id}`)
        }, 2000);
      }
      
    } catch (error) {
      console.log(error)
      toast.error("email ou senha invalidos")
      
    }
    
  };

  return (
    <main className="flex flex-col gap-4 bg-zinc-950 text-zinc-300 items-center justify-center p-4 h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="whatsapp">email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="whatsapp">Senha</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white flex-grow"
            />
            <CgEyeAlt
              className="ml-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-500 font-semibold text-white rounded h-10 hover:bg-orange-600"
        >
          Entrar
        </button>
      </form>
      <div className="flex flex-col">
        <span className="font-bold">Ainda não é nosso Cliente? </span>
        <Link href="/planos">
          <span className="text-orange-500 hover:text-orange-600 items-center text-center">
            Planos
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Login;
