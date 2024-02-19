"use client";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckZipCode } from "./functions/CheckZipcode";
import { useEffect, useState } from "react";
import { CadastrosSchema } from "./schema";
import { CreateUserFormCadastro } from "./CreateUserFormCadastro";
import api from "@/lib/axios";
import { toast } from "react-toastify";

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

  const HandleSubmit = async (data: CreateUserFormCadastro) => {
    try {
      const response = await api.post("/api/user/create", data);

      if (response.status === 200) {
        toast.success("Usuário criado com sucesso!");
        setTimeout(() => {}, 2000);
      }

      console.log(data);
    } catch (error) {}
  };

  function AutoComplit(value: string) {
    const data = CheckZipCode(value);
    return data;
  }

  return (
    <div className="flex flex-col gap-4 bg-zinc-950 text-zinc-300 items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(HandleSubmit)}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
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
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="whatsapp">Whatsapp:</label>
          <input
            type="text"
            {...register("whatsapp", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="cep">Cep:</label>
          <input
            type="text"
            {...register("cep", { required: true })}
            onChange={handleCepChange}
            className="border border-zinc-600 p-2 shadow-sm rounded h-10 w-28 bg-zinc-800 text-white"
          />
          {errors.cep && <p>{errors.cep.message}</p>}
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            value={formData.logradouro}
            {...register("logradouro", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.logradouro && <p>{errors.logradouro.message}</p>}
        </div>

        <div className="flex flex-col gap-1 relative">
          <label htmlFor="numero">Numero:</label>
          <input
            type="text"
            {...register("numero", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.numero && <p>{errors.numero.message}</p>}
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            value={formData.bairro}
            {...register("bairro", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.bairro && <p>{errors.bairro.message}</p>}
        </div>

        <div className="flex flex-col gap-1 relative">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            value={formData.cidade}
            {...register("cidade", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.cidade && <p>{errors.cidade.message}</p>}
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            value={formData.estado}
            {...register("estado", { required: true })}
            className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          />
          {errors.estado && <p>{errors.estado.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-orange-500 font-semibold text-white rounded h-10 hover:bg-orange-600"
        >
          Cadastrar
        </button>
      </form>
      {/* <div className="flex gap-2">
              <span className="font-bold">Já è nosso Cliente? </span>
              <Link href="/login">
                <span className="text-orange-500 hover:text-orange-600 items-center text-center">
                  Fazer Login
                </span>
              </Link>
            </div> */}
    </div>
  );
};

export default Cadastro;
