"use client";
import axios from "axios";

export async function CheckZipCode(zip: string) {
  try {
    const response = await axios.get(
      "https://viacep.com.br/ws/" + zip + "/json/"
    );
    return response.data;
  } catch (error) {
    return false;
  }
}
