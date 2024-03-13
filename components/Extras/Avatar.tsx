"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import api from "@/lib/axios";
import Cookies from "js-cookie";

export default function AvatarDemo() {
  const [imgSrc, setImgSrc] = useState("https://github.com/shadcn.png");
  const [name, setName] = useState("carregando")

  useEffect(() => {
    async function GetImg() {
      const token = Cookies.get("token");
      const data = {
        token: token,
      };
      const response = await api.post("/api/user/getimgperfil", data);
      console.log("🚀 ~ GetImg ~ response:", response);
      if (response.data) {
        console.log("cheguei aqui");
        setImgSrc(response.data.img);
        setName(response.data.name);
      }
    }
    GetImg();
  }, [imgSrc]);

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={imgSrc} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-black">{name}</span>
    </div>
  );
}
