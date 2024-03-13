"use client";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckZipCode } from "./functions/CheckZipcode";
import { useEffect, useState } from "react";
import { CadastrosSchema } from "./schema";
import { CreateUserFormCadastro } from "./CreateUserFormCadastro";
import api from "@/lib/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {}, [
    formData.bairro,
    formData.estado,
    formData.cidade,
    formData.logradouro,
  ]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserFormCadastro>({
    resolver: zodResolver(CadastrosSchema),
  });

  const {
    field: { onChange, value },
  } = useController({
    name: "cep",
    control,
  });

  const handleCepChange = async (event: any) => {
    const cep = event.target.value;

    // Obtendo os dados do CEP
    const addressData = await CheckZipCode(cep);

    // Atualizando o estado do componente
    setFormData({
      ...formData,
      logradouro: addressData.logradouro,
      bairro: addressData.bairro,
      cidade: addressData.localidade,
      estado: addressData.uf,
    });
  };
  const router = useRouter();

  const HandleSubmit = async (data: CreateUserFormCadastro) => {
    try {
      const response = await api.post("/api/user/create", data);

      if (response.status === 200) {
        toast.success("Usuário criado com sucesso!");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function AutoComplit(value: string) {
    const data = CheckZipCode(value);
    console.log("🚀 ~ AutoComplit ~ data:", data)
    return data;
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between w-screen gap-2 bg-zinc-950 text-zinc-300 items-center justify-center p-2">
      {/* <div>Alter Cod</div> */}
      <div className="">
        <form
          onSubmit={handleSubmit(HandleSubmit)}
          className="flex flex-col gap-4 w-full max-w-xs"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
              />

              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="passwordretry">Confirmar Senha:</label>
              <input
                type="password"
                {...register("passwordretry", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
              />
              {errors.passwordretry && <p>{errors.passwordretry.message}</p>}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="whatsapp">Whatsapp:</label>
              <input
                type="text"
                {...register("whatsapp", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 w-44 px-3 bg-zinc-800 text-white"
              />
              {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="cep">Cep:</label>
              <input
                type="text"
                {...register("cep", { required: true })}
                onChange={handleCepChange}
                className="border border-zinc-600 p-2 shadow-sm rounded h-10 w-32 bg-zinc-800 text-white"
              />
              {errors.cep && <p>{errors.cep.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1 relative">
            <label className="flex w-32" htmlFor="cpfcnpj">
              CPF ou CNPJ:
            </label>
            <input
              type="text"
              {...register("cpfcnpj", { required: true })}
              onChange={handleCepChange}
              className="border border-zinc-600 p-2 shadow-sm rounded h-10 w-40 bg-zinc-800 text-white"
            />
            {errors.cpfcnpj && <p>{errors.cpfcnpj.message}</p>}
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="logradouro">Logradouro:</label>
              <input
                type="text"
                value={formData.logradouro}
                {...register("logradouro", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 w-64 px-3 bg-zinc-800 text-white"
              />
              {errors.logradouro && <p>{errors.logradouro.message}</p>}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label htmlFor="numero">Numero:</label>
              <input
                type="text"
                {...register("numero", { required: true })}
                className="border border-zinc-600 shadow-sm rounded h-10 w-16 px-3 bg-zinc-800 text-white"
              />
              {errors.numero && <p>{errors.numero.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1 relative">
            <label className="flex w-32" htmlFor="bairro">
              Bairro:
            </label>
            <input
              type="text"
              value={formData.bairro}
              {...register("bairro", { required: true })}
              className="border border-zinc-600 shadow-sm w-64 rounded h-10 px-3 bg-zinc-800 text-white"
            />
            {errors.bairro && <p>{errors.bairro.message}</p>}
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                value={formData.cidade}
                {...register("cidade", { required: true })}
                className="border border-zinc-600 shadow-sm w-64 rounded h-10 px-3 bg-zinc-800 text-white"
              />
              {errors.cidade && <p>{errors.cidade.message}</p>}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                value={formData.estado}
                {...register("estado", { required: true })}
                className="border border-zinc-600 shadow-sm rounded w-14 h-10 px-3 bg-zinc-800 text-white"
              />
              {errors.estado && <p>{errors.estado.message}</p>}
            </div>
          </div>
          <div className="flex bg-emerald-500 hover:bg-emerald-400 h-14 w-32 text-center items-center justify-center rounded">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
