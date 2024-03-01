"use client";
import { z } from "zod";
import { CheckZipCode } from "./functions/CheckZipcode";
import { TemZap } from "./functions/temZap";

export const CadastrosSchema = z
  .object({
    name: z.string().min(3, "Invalido esse name").max(255),
    email: z.string().email(),
    password: z.string().min(8),
    passwordretry: z.string(),
    cpfcnpj: z.string().min(8,"Dados Incorretos"),
    whatsapp: z.string().refine(async (res) => TemZap(res), {
      message: "Numero de Whatsapp Invalido",
    }),
    cep: z.string().refine(async (res) => CheckZipCode(res), {
      message: "CEP invalido",
    }),
    logradouro: z.string(),
    bairro: z.string(),
    numero: z.string(),
    cidade: z.string(),
    estado: z.string(),
  })
  .refine((data) => data.password === data.passwordretry, {
    message: "As senhas devem ser iguais",
    path: ["passwordretry"],
  });
