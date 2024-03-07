import axios from "axios";

export const whatsapp = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    apikey: "euamojesus102030",
  },
});
