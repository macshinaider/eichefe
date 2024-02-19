"use client";
import api from "@/lib/axios";
import { QueryClient } from "@tanstack/react-query";
import { Planos } from "./pages";

export const queryClient = new QueryClient();

export async function FetchPlanos() {
  const res = await api.get("/api/plans");
  return res.data;
}

export default FetchPlanos;
