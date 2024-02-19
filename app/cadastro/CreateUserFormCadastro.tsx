"use client";
import { z } from "zod";
import { CadastrosSchema } from "./schema";

export type CreateUserFormCadastro = z.infer<typeof CadastrosSchema>;
