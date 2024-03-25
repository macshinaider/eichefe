import axios from "axios";

export const whatsapp = axios.create({
  baseURL: "https://apizap.eichef.online",
  headers: {
    "Content-Type": "application/json",
    apikey: "euamojesus102030",
  },
});
