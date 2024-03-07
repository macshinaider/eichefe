import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ProviderQuery from "@/lib/reactquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EiChef - Online",
  description: "Seu Sistema de Restaurante e Lanchonetes Simples e Pratico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <ProviderQuery>
            <AuthContextProvider>{children}</AuthContextProvider>
            <ToastContainer />
          </ProviderQuery>
        </ThemeProvider>
      </body>
    </html>
  );
}
