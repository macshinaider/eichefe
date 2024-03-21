"use client";
import { useState, useEffect, useRef } from "react";
import "./input.css";
import api from "@/lib/axios";
import { toast } from "react-toastify";
import { delay } from "@/lib/delay";

export default function UserKey({ params }: { params: { id: number } }) {
  const [values, setValues] = useState(Array(6).fill(""));
  const [code, setCode] = useState("");
  const [idmsg, setIdmsg] = useState("");
  const [remotejid, setRemotejid] = useState("");
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const index = values.findIndex((value) => value === "");
    if (index !== -1 && inputs.current[index]) {
      inputs.current[index]!.focus();
      console.log(code);
    }
  }, [values, code]);

  const GetCode = async () => {
    const res = await api.get("/api/utils/gerarcodigo");
    const rescode = await api.get(
      `/api/utils/sendcodewhats?id=${params.id}&code=${res.data.codigo}`
    );

    setIdmsg(rescode.data.send.key.id);
    setRemotejid(rescode.data.send.key.remoteJid);
    console.log(rescode.data.send.key.remoteJid);
    console.log(rescode.data.send.key.id);

    setCode(res.data.codigo);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues(
      values.map((value, i) => (i === index ? event.target.value : value))
    );
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && values[index] === "" && index > 0) {
      if (inputs.current[index - 1] !== null) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleConfirmed = async () => {
    if (values.join("") === code) {
      toast.success("Codigo Confirmado Com Sucesso");
      await delay(5000);
      await api.post(
        `/api/whatsapp/reactionmsg?remotejid=${remotejid}&idmsg=${idmsg}`
      );
      await delay(1000);

      window.location.href = "/dashboard";
    } else {
      // Mostra uma mensagem de erro
      toast.error(
        "O código inserido não é válido. Por favor, tente novamente."
      );
    }
  };

  if (!code)
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="mt-[-30%] text-3xl">Solicitar Codigo Por Whatsapp</h1>
        <div className="flex gap-4">
          <div className="flex bg-emerald-500 hover:bg-emerald-400 p-4 rounded">
            <button onClick={GetCode}>Solicitar Codigo</button>
          </div>
        </div>
      </div>
    );

  if (code)
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="mt-[-30%] text-5xl">Autenticação</h1>
        <div className="flex gap-2">
          {values.map((value, i) => (
            <input
              key={i}
              type="number"
              className="no-arrows h-14 w-14 rounded text-5xl text-center"
              value={value}
              ref={(el) => (inputs.current[i] = el)}
              onChange={(event) => handleChange(i, event)}
              onKeyDown={(event) => handleKeyDown(i, event)}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex bg-emerald-500 hover:bg-emerald-400 p-4 rounded cursor-pointer">
            <button
              className="flex items-center justify-center"
              onClick={handleConfirmed}
            >
              Confirmar
            </button>
          </div>
          <div className="flex bg-blue-500 hover:bg-red-400 p-4 rounded cursor-pointer">
            <button className="flex items-center justify-center">
              Reenviar Codigo
            </button>
          </div>
        </div>
      </div>
    );
}
