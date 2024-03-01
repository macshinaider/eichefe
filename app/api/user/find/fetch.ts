import api from "@/lib/axios";

export const UserFindId = async (email: string) => {
  const fetch = await api.post("/api/user/find", { email: email });
  return fetch.data;
};
